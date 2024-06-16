import { Schema, model } from "mongoose";

const itemSchema=new Schema({
    id:{
        type:Number,
        name:String,
        quantity:Number
    }
})

const orderSchema= new Schema({
    id:{
        type:Number,
        unique:true,
        required: true 
    },
    customer:{
        type:String,
        required: true 
    },
    items: [itemSchema],
    status: { 
        type: String, 
        enum: ['Pending', 'Completed'], 
        required: true 
    },

})

const Order= model('Order',orderSchema);
export default Order;