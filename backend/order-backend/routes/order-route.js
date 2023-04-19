const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  createOrder,
  updateOrderStatus,
  removeOrder,
} = require("../controller/order-controller");

router.get("/", getAllOrders);
router.post("/add", createOrder);
router.put("/update/:id", updateOrderStatus);
router.delete("/remove/:id", removeOrder);

module.exports = router;
