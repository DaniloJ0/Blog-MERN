import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connect } from "./src/configs/db_confing.js";

const app = express();

import authRoute from './src/routes/auth_route.js'
import userRoute from './src/routes/users_route.js'
import postRoute from './src/routes/posts_route.js'

//middleware
app.use(express.json());

//routes
app.use('/', authRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);

//Conection to BD
connect();

app.listen("5000", () => {
  console.log("Backend is running...");
});


export default app;