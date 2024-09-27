const express = require("express");
const mongoose = require("mongoose");
const routes = require("./route");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/vibess")
  .then("Connected")
  .catch((err) => console.log(err));

app.use("/", routes);
app.listen(8000, () => {
  console.log("working on 8000");
});
