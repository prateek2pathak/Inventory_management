import { Router } from 'express';
import Order from '../Models/Order.js'; // Adjust the path as per your project structure

const router = Router();

// Fetch orders with optional filters and sorting
router.get('/', async (req, res) => {
  try {
    const { status, sortBy } = req.query;
    const filter = status ? { status } : {};
    const sort = {};

    if (sortBy) {
      if (sortBy === 'customer') {
        sort.customer = 1; // Sort by customer name (ascending)
      } else if (sortBy === 'itemCount') {
        sort['items.length'] = 1; // Sort by item count (ascending)
      }
    }

    const orders = await Order.find(filter).sort(sort);
    const ordersWithItemCount = orders.map(order => ({
      id: order.id,
      customer: order.customer,
      status: order.status,
      itemCount: order.items.length
    }));

    res.json(ordersWithItemCount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific order by its ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findOne({ id: req.params.id });
    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an order by its ID
router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (updatedOrder) {
      res.json(updatedOrder);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
