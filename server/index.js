require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const authRoutes = require("./routes/auth");
const storeRoutes = require("./routes/store");
const cartRoutes = require("./routes/cart");
const paymentRoutes = require("./routes/payment");

const app = express();

// Middlewares
app.use(
  cors({ origin: ["https://parakh-frontend.vercel.app"], credentials: true })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.JWT_SECRET || "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use(authRoutes.routes);
app.use(storeRoutes.routes);
app.use(cartRoutes.routes);
app.use(paymentRoutes.routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
