require('dotenv').config();

import express from 'express';
import orders from './Routes/orders.js';
import inventory from './Routes/inventory.js';
import connectToDatabase from './Database/db.js';

connectToDatabase();
const app = express();
app.use(express.json());

app.use('/orders', orders);
app.use('/inventory', inventory);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
