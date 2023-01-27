const express = require("express");
const cors = require("cors");

const app = express();
const port = 2022;
const data = require("./data.json");
const { request, response } = require("express");
app.use(cors());
app.use(express.json());

app.post("/products", (request, response) => {
  data.products.push(request.body);
});
app.get("/products", (request, response) => {
  console.log("start");
  response.status(200).json(data.products);
});

app.get("/orders", (request, response) => {
  response.status(201).json(data.orders);
});
app.get("/moderators", (request, response) => {
  response.status(202).json(data.moderats);
});

app.get("/users", (request, response) => {
  response.status(203).json(data.users);
});

app.listen(port, () => {
  console.log(`server is starting in ${port}`);
});
