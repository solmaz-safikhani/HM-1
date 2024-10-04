/*

1- Import the express Package: Write code to import the express package into your program.

2- Initialize an Express Application: Initialize an Express application by calling express() and store it in a variable named app.

3- Create a Route to Retrieve Products: Set up a GET route at /products that allows querying products based on optional query strings: maxPrice and limit.

4- Filter Products by Price: If the maxPrice query string is provided, filter the products array to include only products with a price less than the specified maxPrice.

5- Limit the Number of Results: If the limit query string is provided, slice the filtered results to return only the number of products specified by limit.

6- If the maxPrice and limit query parameters are both missing, return the entire list of products as the response.

7- Send the Response: Send the filtered and limited list of products as the response.

8- Start the Server: Set the application to listen on port 4000 and log a message to the console indicating that the server is running.
*/

const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      description: "Bluetooth 5.0, noise-cancelling, 20-hour battery life",
      price: 49.99,
    },
    {
      id: 2,
      name: "Smartwatch",
      description: "Fitness tracker, heart rate monitor, GPS, 7-day battery life",
      price: 199.99,
    },
    {
      id: 3,
      name: "4K TV",
      description: "Ultra HD, HDR, 55-inch display, Smart TV features",
      price: 499.99,
    },
    {
      id: 4,
      name: "Gaming Laptop",
      description: "16GB RAM, 1TB SSD, NVIDIA RTX 3060, 15.6-inch display",
      price: 1299.99,
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      description: "RGB lighting, customizable keys, tactile switches",
      price: 89.99,
    },
    {
      id: 6,
      name: "Smartphone",
      description: "128GB storage, 6.5-inch OLED display, dual-camera system",
      price: 699.99,
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      description: "Portable, waterproof, 24-hour playtime, deep bass",
      price: 59.99,
    },
    {
      id: 8,
      name: "Electric Toothbrush",
      description: "Sonic technology, 3 brushing modes, 2-week battery life",
      price: 39.99,
    },
    {
      id: 9,
      name: "Portable Charger",
      description: "10000mAh, fast charging, dual USB ports, compact design",
      price: 29.99,
    },
    {
      id: 10,
      name: "Drone",
      description: "4K camera, 30-minute flight time, GPS return home",
      price: 399.99,
    },
    {
      id: 11,
      name: "Wireless Mouse",
      description: "Ergonomic design, adjustable DPI, long battery life",
      price: 24.99,
    },
    {
      id: 12,
      name: "Action Camera",
      description: "4K video, waterproof, Wi-Fi, image stabilization",
      price: 149.99,
    },
    {
      id: 13,
      name: "Electric Scooter",
      description: "350W motor, 25 km/h top speed, 30 km range",
      price: 349.99,
    },
    {
      id: 14,
      name: "Noise Cancelling Headphones",
      description: "Over-ear, Bluetooth, 30-hour battery life",
      price: 199.99,
    },
    {
      id: 15,
      name: "Smart Thermostat",
      description: "Wi-Fi enabled, programmable, energy-saving features",
      price: 129.99,
    },
    {
      id: 16,
      name: "Coffee Maker",
      description: "12-cup capacity, programmable timer, brew strength control",
      price: 69.99,
    },
    {
      id: 17,
      name: "Air Fryer",
      description: "5.8 Qt capacity, digital controls, dishwasher safe",
      price: 89.99,
    },
    {
      id: 18,
      name: "Smart Light Bulb",
      description: "Wi-Fi enabled, color-changing, voice control",
      price: 19.99,
    },
    {
      id: 19,
      name: "Robot Vacuum",
      description: "Automatic cleaning, Wi-Fi, self-charging, smart navigation",
      price: 299.99,
    },
    {
      id: 20,
      name: "Fitness Tracker",
      description: "Heart rate monitor, sleep tracking, waterproof",
      price: 79.99,
    },
  ];
  
  // answer
  

const express = require('express');
const app = express();

app.get('/products', (req, res) => {
  const maxPrice = parseInt(req.query.maxPrice);
  const limit = parseInt(req.query.limit);

  let filteredProducts = products;
  if (maxPrice) {
    filteredProducts = products.filter(product => product.price <= maxPrice);
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  res.json(filteredProducts);
});

app.listen(5000, () => {
console.log('server is running on port 5000')
});