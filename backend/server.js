const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cemile-e-commerce:vnUCkuqpwFakyB6n@mern-e-commerce.srbcgso.mongodb.net/?retryWrites=true&w=majority&appName=mern-e-commerce"
    );
    console.log("Connected to MongoDb");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.get("/api", (req, res) => {
  res.send("This is root");
});

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
