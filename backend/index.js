const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

const port = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products",ProductRouter)

//running our server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
