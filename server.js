const express = require("express");
const cors = require("cors");
const app = require("./app");
const mongoose = require("mongoose");
const port = 3002;
const host = "127.0.0.1";
const router =require('./router')

app.use(cors());
app.use(express.json());

const URI ="mongodb+srv://yasi:123@cluster0.rezyyzl.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

connect();


const server = app.listen(port, host, () => {
  console.log(`Node server is listning to ${server.address().port}.... `);
});

app.use('/api',router);