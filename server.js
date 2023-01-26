const express = require("express");
const cors = require("cors");

const app = express();
const port = 2022;
const data = require("./data.json");
app.use(cors());
app.get("/products", (request, response) => {
  console.log("start");
  response.status(200).json(data.product);
});

app.get("/order", (request, response) => {
  response.status(201).json(data.order);
});

app.listen(port, () => {
  console.log(`server is starting in ${port}`);
});
