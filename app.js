const express = require("express");
require('dotenv').config();
require("./src/db/dbConnection");

const app = express();
const port = process.env.PORT || 5000;

const router = require("./src/routers/index");
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API ");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
