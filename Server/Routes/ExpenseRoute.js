import express from "express";
import { addExpense } from "../Controllers/ExpenseController.js";

const router = express.Router();


router.route('/').post(addExpense);



export default router;


