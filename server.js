import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 4000;
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());

//DB Connection
import connect from "./DB/Connect.js";

//Middleware
import notFound from "./ErrorHandler/Not-Found.js";
import ErrorHandler from "./ErrorHandler/errorHandler.js";

//Routes middleware
import authRouter from "./Routes/AuthRoute.js";
import { StatusCodes } from "http-status-codes";
import expenseRouter from "./Routes/ExpenseRoute.js";
import Auth from "./Middlewares/Auth.js";

app.get("/api/v1", (req, res) => {
  res.status(StatusCodes.OK).send("Welcome!!");
});
app.use("/api/v1/auth", authRouter);

app.use("/api/v1/expense", Auth, expenseRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use(notFound);
app.use(ErrorHandler);
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
