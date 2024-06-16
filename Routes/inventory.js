import {Router} from "express"
import Item from "../Models/Items.js";

const router=Router();


// To get and id with filter of stock and outofstock
router.get('/',async(req,res)=>{
    try {
        const {stock}=req.query;
        const filter={};
        if (stock==='inStock') {
            filter.quantity=({$gt:0});
        }
        else if(stock==='outOfStock'){
            filter.quantity=0;
        }
        const items= await Item.find(filter);
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
})

router.post('/:id',async(req,res)=>{
    try {
        const item=await Item.findOne({id:req.params.id});
        if (item) {
            res.status(200).json(item);
        }
        else{
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const updatedItem = await Item.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).send('Item not found');
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.delete('/:id',async(req,res)=>{
    try {
        const deletedItem= await Item.findOneAndDelete({id:req.params.id});
        if (deletedItem) {
            res.send(deletedItem);
        }
        else{
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).send({error : error.message});
    }
})

export default router;