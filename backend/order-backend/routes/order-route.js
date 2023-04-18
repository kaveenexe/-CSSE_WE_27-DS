const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  createOrder
} = require( "../controller/order-controller" );

router.get("/", getAllOrders);
router.post("/add", createOrder);

module.exports = router;
