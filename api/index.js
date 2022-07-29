import { connect } from "./src/configs/db_confing.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import multer from "multer";


const app = express();

import authRoute from './src/routes/auth_route.js'
import userRoute from './src/routes/users_route.js'
import postRoute from './src/routes/posts_route.js'
import categoryRoute from './src/routes/categories_route.js'

//middleware
app.use(express.json());

//routes
app.use('/', authRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/category', categoryRoute);

//Conection to BD
connect();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.listen("5000", () => {
  console.log("Backend is running...");
});


export default app;