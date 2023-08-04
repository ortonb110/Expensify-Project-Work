import Expenses from "../Model/Expenses.js";
import BadRequestError from "../Errors/BadRequest.js";
import { StatusCodes } from "http-status-codes";
import checkPermissions from "../utils/CheckPermissions.js";

const addExpense = async (req, res) => {
  const { description, amount, receiver } = req.body;
  if (!description || !amount || !receiver) {
    throw new BadRequestError("Please provide all values!");
  }

  req.body.createdBy = req.user.userID;
  const expense = await Expenses.create(req.body);
  res.status(StatusCodes.OK).json({
    expense,
  });
};

const getAllExpense = async (req, res) => {
  const allExpenses = await Expenses.find({ createdBy: req.user.userID });

  res
    .status(StatusCodes.OK)
    .json({ allExpenses, totalExpenses: allExpenses.length, numOfPages: 1 });
};

const updateExpense = async (req, res) => {
  const { id: expenseId } = req.params;
  const { amount, description, receiver } = req.body;
  if (!amount || !description || !receiver) {
    throw new BadRequestError("Please provide all values!");
  }

  const expense = await Expenses.findOne({ _id: expenseId });

  if (!expense) {
    throw new BadRequestError("No expense found!");
  }

  checkPermissions(req.user.userID,expense.createdBy);

  const update = await Expenses.findOneAndUpdate({ _id: expenseId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json(update);
};
const deleteExpense = async (req, res) => {};

export { addExpense, getAllExpense, updateExpense, deleteExpense };
