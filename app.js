require("express-async-errors");
const express = require("express");
require('dotenv').config();
require("./src/db/dbConnection");

const app = express();
const port = process.env.PORT || 5000;
const errorHandlerMiddleware = require("./src/middlewares/errorHandler");

const cors = require("cors");
const corsOptions = require("./src/helpers/corsOptions");

const apiLimiter = require("./src/middlewares/rateLimit");

const moment = require("moment-timezone");
moment.tz.setDefault("Europe/Istanbul");

const mongoSanitize = require("express-mongo-sanitize");
//Middlewares
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);


app.use(cors(corsOptions));

app.use("/api", apiLimiter); //apiLimiter

app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);

const router = require("./src/routers/index");
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API ");
});

// Error Handler
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;