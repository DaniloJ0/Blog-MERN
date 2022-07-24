import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Connected to DB Mongo"))
  .catch(err => console.log(err));

app.listen("5000", () => {
  console.log("Backend is running...");
});
