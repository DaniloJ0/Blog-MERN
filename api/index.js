import { connect } from "./src/configs/db_confing.js";
import userRoute from './src/routes/auth_route.js'
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();


//middleware
app.use(express.json());

//routes
app.use('/', userRoute);

//Conection to BD
connect();

app.listen("5000", () => {
  console.log("Backend is running...");
});


export default app;