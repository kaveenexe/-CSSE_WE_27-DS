const router = require("express").Router();
let Order = require("../models/Order");

//Get all orders
router.route("/getAllOrders").get((req, res) => {
  Order.find()
    .then((Order) => res.json(Order))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Get all orders
// exports.getAllOrders = async (req, res, next) => {
//   const orders = await Order.find();

//   //Get total amount of orders
//   let totalAmount = 0;
//   orders.forEach((order) => {
//     totalAmount += order.totalPrice;
//   });

//   //Get number of total products of all orders
//   let noOfProducts = 0;
//   orders.forEach((order) => {
//     noOfProducts += order.quantity;
//   });

//   res.status(200).json({
//     totalAmount,
//     noOfProducts,
//     orders,
//   });
// };

//Create new order
router.route("/addOrder").post((req, res) => {
  const userID = req.body.userID;
  const transactionID = req.body.transactionID;
  const orderedDate = req.body.orderedDate;
  const quantity = req.body.quantity;
  const totalPrice = req.body.totalPrice;
  const status = req.body.status;

  const newOrder = new Order({
    userID,
    transactionID,
    orderedDate,
    quantity,
    totalPrice,
    status,
  });

  newOrder
    .save()
    .then(() => res.json("Order added successfully..."))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add order", error: err.message })
    );
});

//Update order status
router.route("/updateOrderStatus/:id").put((req, res) => {
  Order.findByIdAndUpdate(req.params.id, { status: req.body.status })
    .then(() => res.json("Order status updated successfully..."))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update order status", error: err.message })
    );
});

//Remove an order
router.route("/removeOrder/:id").delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.json("Order deleted successfully.."))
    .catch((err) =>
      res.status(400).json({ message: "Order not found", error: err.message })
    );
});

module.exports = router;
