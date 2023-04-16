const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//Connect mongodb
const url = process.env.MONGODB_URL;

//Create conncetion
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Connect to port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
