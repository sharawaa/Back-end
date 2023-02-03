const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 2022;

const products = require("./data/products.json");
const moderats = require("./data/moderats.json");
const users = require("./data/users.json");
const orders = require("./data/orders.json");
const { request, response } = require("express");
const { error } = require("console");

app.use(cors());
app.use(express.json());
/*product get*/
app.get("/products", (request, response) => {
  console.log("start");
  response.status(200).json(products);
});
/*product delete*/
app.delete("/products/:id", (request, response) => {
  fs.readFile("./data/products.json", (error, data) => {
    if (error) {
      response.status(500).send({ messege: error });
    } else {
      let product = JSON.parse(data);
      product = product.filter((product) => product.id !== request.params.id);
      fs.writeFile("./data/products.json", JSON.stringify(product), (err) => {
        if (err) {
          response.status(500).send[{ messege: err }];
        } else {
          response.status(200).send[
            { messege: "product added successfuly added" }
          ];
        }
      });
    }
  });
  console.log(request.params.id);
});
/*product put*/
app.put("/products/:id", (request, response) => {
  fs.readFile("./data/products.json", (error, data) => {
    if (error) {
      response.status(500).send({ messege: error });
    } else {
      let products = JSON.parse(data);
      let findData = products.find(
        (product) => product.id === request.params.id
      );
      products[products.indexOf(findData)] = request.body;

      fs.writeFile("./data/products.json", JSON.stringify(products), (err) => {
        if (err) {
          response.status(500).send[{ messege: err }];
        } else {
          response.status(200).send[
            { messege: "product added successfuly added" }
          ];
        }
      });
    }
  });
});

// app.put("/products/:id", (request, response) => {
//   console.log(request.params.id);
//   products = products.filter((product) => {
//     if(product.id === request.params.id) {
//       response.
//     }
//   });
// });
/*product post*/
app.post("/products", (request, response) => {
  fs.readFile("./data/products.json", (error, data) => {
    if (error) {
      response.status(500).send({ messege: error });
    } else {
      let product = JSON.parse(data);
      product.push({ ...request.body, id: uuidv4() });
      fs.writeFile("./data/products.json", JSON.stringify(product), (err) => {
        if (err) {
          response.status(500).send[{ messege: err }];
        } else {
          response.status(200).send[
            { messege: "product added successfuly added" }
          ];
        }
      });
    }
  });
});

app.get("/orders", (request, response) => {
  response.status(201).json(orders);
});

/*moderats get*/
app.get("/moderators", (request, response) => {
  response.status(202).json(moderats);
});
/*moderats post*/
app.post("/moderats", (request, response) => {
  fs.readFile("./data/moderats.json", (data, error) => {
    if (error) {
      response.status(500).send({ messege: error });
    } else {
      let moderat = JSON.parse(data);
      moderat.push(request.body);
      fs.writeFile(".data/moderats.json", JSON.stringify(moderat), (err) => {
        if (error) {
          response.status(500).send[{ messege: err }];
        } else {
          response.status(200).send[
            { messege: "product added successfuly added" }
          ];
        }
      });
    }
  });
});

app.get("/users", (request, response) => {
  response.status(203).json(users);
});

app.listen(port, () => {
  console.log(`server is starting in ${port}`);
});

