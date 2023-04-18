const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  createOrder,
  updateOrderStatus,
} = require("../controller/order-controller");

router.get("/", getAllOrders);
router.post( "/add", createOrder );
router.put("/update/:id", updateOrderStatus);

module.exports = router;
