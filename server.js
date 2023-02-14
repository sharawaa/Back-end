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
const { request, response, query } = require("express");
const { error } = require("console");
const { parse } = require("path");

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
        //console.log("garjiinu",product.id)
        if (err) {
          response.status(500).send[{ messege: err }];
        } else {
          response.status(200).send[
            { messege: "product delete successfuly " }
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
            { messege: "product successfuly added" }
          ];
        }
      });
    }
  });
});


app.get("/orders", (request, response) => {
  response.status(201).json(orders);
});


app.post("/orders", (request, response)=>{
  fs.readFile("./data/orders.json",(error, data)=>{
    console.log(JSON.parse(data));
    if(error){
      response.status(500).send({messege:error});
    }else{
      let order= JSON.parse(data);
      order.push(request.body);

      fs.writeFile("./data/orders.json",JSON.stringify(order), (err)=>{
        if(err){
          response.status(500).send[{messege:err}]
        }else{
          response.status(201).send[
            { messege: "order added successfuly " }
          ]
        }
      })
    }
  })
})
/*moderats get*/
app.get("/moderators", (request, response) => {
  response.status(202).json(moderats);
});
/*moderats post*/
app.post("/moderators", (request, response) => {
  fs.readFile("./data/moderats.json", (error ,data) => {
    console.log(JSON.parse(data));
    if (error) {
      response.status(500).send({ messege: error });
    } else {
      let moderat = JSON.parse(data);
      moderat.push({ ...request.body, id: uuidv4() });

      fs.writeFile("./data/moderats.json", JSON.stringify(moderat), (err) => {
        if (err) {
          response.status(500).send[{ messege: err }];
        } else {
          response.status(202).send[
            { messege: "moderat added successfuly" }
          ];
        }
      });
    }
  });
});
/*moderat delete  */

app.delete("/moderators/:id",(request, response)=>{
  fs.readFile("./data/moderats.json",( error , data)=>{
    if(error){
      response.status(500).send({messege:error})
    }else{
      let product = JSON.parse(data)
      product = product.filter((products)=>products.id !== request.params.id);
      //console.log(products.id)
      
      fs.writeFile(".data/moderats.json", JSON.stringify(product), (err)=>{
        if(err){
          response.status(500).send[{ messege: err }];
        }else{
          response.status(202).send[
            { messege: "moderator successfuly delete" }
          ];
        }
      })
    }
  })
})
/*users get*/
app.get("/users", (request, response) => {
  response.status(203).json(users);
});
/*users post */
app.post("/users", (request, response)=>{
  fs.readFile("./data/users.json", (error, data)=>{
    if(error){
      response.status(500).send({ messege: error });
    }else{
      let user = JSON.parse(data);
      user.push({...request.body, id: uuidv4()});
      fs.writeFile("./data/users.json", JSON.stringify(user), (err)=>{
        if(err){
          response.status(500).send[{messege: err}]
        }else{
          response.status(203).send[
            {messege: "user  successfuly added"}
          ]
        }
      })
    }
  })
})

app.listen(port, () => {
  console.log(`server is starting in ${port}`);
});
