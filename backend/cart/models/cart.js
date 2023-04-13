// models/todo.js
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    foodId: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    orderedDate: {
        type: Date, 
        default: Date.now
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit_price: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
});

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;