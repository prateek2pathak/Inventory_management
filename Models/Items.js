import { Schema, model } from "mongoose";

const itemSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Item= model('Items',itemSchema);
export default Item;