import express from "express";
import { addExpense, getAllExpense, updateExpense, deleteExpense } from "../Controllers/ExpenseController.js";

const router = express.Router();


router.route('/add-expense').post(addExpense);
router.route('/all-expenses').get(getAllExpense)
router.route('/:id').delete(deleteExpense).patch(updateExpense);


export default router;


