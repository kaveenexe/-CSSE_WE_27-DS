const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderID: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    transactionID: {
      type: String,
      required: true,
    },
    orderedDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["processing", "confirmed"],
      default: "processing",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;
