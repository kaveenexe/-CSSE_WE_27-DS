const router = require("express").Router();
let Order = require("../models/Order");

//Get Orders
router.route("/").get((req, res) => {
  Order.find()
    .then((Order) => res.json(Order))
    .catch((err) => res.status(400).json("Error: " + err));
} );

//Add new orders
router.route("/add").post((req, res) => {
  const orderID = req.body.orderID;
  const userID = req.body.userID;
  const transactionID = req.body.transactionID;
  const orderedDate = req.body.orderedDate;
  const quantity = req.body.quantity;
  const total = req.body.total;
  const status = req.body.status;

  const newOrder = new Order({
    orderID,
    userID,
    transactionID,
    orderedDate,
    quantity,
    total,
    status,
  });

  //Send data to the database
  newOrder
    .save()
    .then(() => res.json("Order added successfully..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
