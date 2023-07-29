import express from "express";
import { addExpense, getAllExpense } from "../Controllers/ExpenseController.js";

const router = express.Router();


router.route('/add-expense').post(addExpense);
router.route('/all-expenses').get(getAllExpense)


export default router;


