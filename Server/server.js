import express from "express";
import dotenv from "dotenv";
import connect from "./DB/Connect.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Server started on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
