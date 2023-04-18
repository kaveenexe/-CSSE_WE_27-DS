const Order = require("../models/Order");

//Get all orders
exports.getAllOrders = async (req, res, next) => {
  const orders = await Order.find();

  //Get total amount of orders
  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  //Get number of total products of all orders
  let noOfProducts = 0;
  orders.forEach((order) => {
    noOfProducts += order.quantity;
  });

  res.status(200).json({
    totalAmount,
    noOfProducts,
    orders,
  });
};

//Add new orders
exports.createOrder = (req, res) => {
  Order.create(req.body)
    .then((data) => res.json({ message: "Order added successfully...", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add order", error: err.message })
    );
};
