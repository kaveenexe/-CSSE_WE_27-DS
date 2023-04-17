require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

const customerRoutes = require("./routes/customer");

var cors = require("cors");
app.use(cors());

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

/* ROUTES */
app.use("/customer", customerRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
