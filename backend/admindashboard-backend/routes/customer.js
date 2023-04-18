const router = require("express").Router();
let User = require("../models/User");

router.route("/").get((req, res) => {
  User.find({ role: "customer" })
    .select("-password")
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const role = req.body.role;
  const password = req.body.password;
  const re_enter_pw = req.body.re_enter_pw;

  const newCustomer = new User({
    name,
    email,
    phone,
    role,
    password,
    re_enter_pw,
  });

  newCustomer
    .save()
    .then(() => res.json("Customer added successfully..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
