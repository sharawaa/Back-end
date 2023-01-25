const express = require("express");
const cors = require("cors");

const app = express();
const port = 2022;
app.use(cors());
app.get("/products", (request, response) => {
  console.log("start");
  response.status(200).json(products);
});

app.listen(port, () => {
  console.log(`server is starting in ${port}`);
});

const products = [
  {
    description:
      "A tablet computer, commonly shortened to tablet, is a mobile device, typically with a mobile operating system and touchscreen display processing circuitry, and a rechargeable battery in a single, thin and flat package. ",
    spec: [
      { capacity: "0.8 cubic feet" },
      { color: "Brushed Stainless Steel" },
    ],
    name: "I Pad",
    id: "7301e7de",
    image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC._SR360,460.jpg",
    price: 394.99,
    stock: 40,
    sale: 50.0,
    category: "computers & tablets",
  },

  {
    description:
      "A video game console is an electronic device that outputs a video signal or image to display a video game that can be played with a game controller.",
    spec: [
      { DisplaySize: "6.8 inch" },
      { CPU: "Medea Teck Helio G 95.8 core" },

      { RAM: "11.6GB" },
    ],
    name: "I Pad",
    id: "7301e90a",
    image:
      "https://m.media-amazon.com/images/I/61EN9UQLg2L._AC_UY436_FMwebp_QL65_.jpg",
    price: 389.99,
    stock: 20,
    sale: 9.0,
    category: "gaming console",
  },

  {
    description:
      "FOOD STEAMER: With 7.4 quarts of cooking capacity & 2 separate steaming containers, you can cook a full meal with sides with one simple turn of a switch.",
    spec: [{ capacity: "5 Liters" }, { wattage: "1500W" }],
    name: "Food Steamer",
    id: "7301ea4a",
    image:
      "https://m.media-amazon.com/images/I/81s-z8ThKlL._AC_UL640_FMwebp_QL65_.jpg",
    price: 89.99,
    stock: 5,
    sale: 5.0,
    category: "appliances",
  },
  {
    description:
      "Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS 16. The ultimate iPad experience.",
    spec: [{ CPU: "8-core" }, { GPU: "10-core" }],
    name: "iPad Pro",
    id: "88b45bfa",
    image:
      "https://www.apple.com/v/ipad-pro/al/images/overview/chip/performance_hero__cxya4f2p5euu_large_2x.jpg",
    price: 799,
    stock: 23,
    sale: 10,
    category: "computers & tablets",
  },
  {
    description: "Serious performance in a thin and light design.",
    spec: [{ inc: "10.9" }, { chip: "m1" }],
    name: "iPad Air",
    id: "88b45eac",
    image:
      "https://www.apple.com/v/ipad-pro/al/images/overview/keyboard-pencil/accessories_1__f688jyg47vm2_large_2x.png",
    price: 599,
    stock: 4,
    sale: 0,
    category: "computers & tablets",
  },
  {
    description: "The all‑new colorful iPad for the things you do every day.",
    spec: [{ gen: "10th" }, { color: "sRGB" }],
    name: "iPad",
    id: "88b45fd8",
    image:
      "https://www.apple.com/v/ipad-pro/al/images/overview/keyboard-pencil/magic_keyboard_hero__ffbg8kz9n8qe_large_2x.jpg",
    price: 499,
    stock: 7,
    sale: 7,
    category: "computers & tablets",
  },
  {
    description: "All the essentials in the most affordable iPad.",
    spec: [{ gen: "9th" }, { inc: "10.2" }],
    name: "iPad",
    id: "88b460fa",
    image:
      "https://fdn.gsmarena.com/imgroot/news/20/09/new-ipads-announced/-1200/gsmarena_008.jpg",
    price: 329,
    stock: 4,
    sale: 5,
    category: "computers & tablets",
  },
  {
    description: "The full iPad experience designed to fit in one hand.",
    spec: [{ inc: "8.3" }, { chip: "A15" }],
    name: "iPad mini",
    id: "88b462d0",
    image:
      "https://cdn.shopify.com/s/files/1/1706/9177/products/ipad-mini-6-pink-Custom-Mac-BD.jpg?v=1662195085",
    price: 499,
    stock: 3,
    sale: 20,
    category: "computers & tablets",
  },
];
