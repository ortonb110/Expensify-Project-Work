import Expenses from "../Model/Expenses.js";
import BadRequestError from "../Errors/BadRequest.js";
import { StatusCodes } from "http-status-codes";
import checkPermissions from "../utils/CheckPermissions.js";
import mongoose, { mongo } from "mongoose";
import moment from 'moment'

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

  checkPermissions(req.user.userID, expense.createdBy);

  const update = await Expenses.findOneAndUpdate({ _id: expenseId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json(update);
};
const deleteExpense = async (req, res) => {
  const { id: expenseId } = req.params;
  const expense = await Expenses.findOne({ _id: expenseId });
  if (!expense) {
    throw new BadRequestError("Expense does not exist");
  }
  checkPermissions(req.user.userID, expense.createdBy);

  await Expenses.findByIdAndDelete({ _id: expenseId });
  res.status(StatusCodes.OK).json({ msg: "Done" });
};

const stats = async (req, res) => {
  let stats = await Expenses.aggregate([
    {
      $match: { createdBy: new mongoose.Types.ObjectId(req.user.userID) },
    },
    {
      $group: { _id: "$payment", count: { $sum: 1 } },
    },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  //This section of code is to make sure our code doesn't break on the frontend
  const defaultStats = {
    cash: stats.Cash || 0,
    "mobile money": stats["Mobile Money"] || 0,
    "online payment": stats["Online Payment"] || 0,
  };

  let monthlyExpenses = await Expenses.aggregate([
    {
      $match: { createdBy: new mongoose.Types.ObjectId(req.user.userID) },
    },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.year": -1, "_id.month": -1 },
    },
    {
      $limit: 6,
    },
  ]);

  monthlyExpenses = monthlyExpenses.map((item)=> {
    const {_id:{year, month}, count} = item;
    let date = moment().month(month -1).year(year).format('MMM Y');
    return {date, count}
  }).reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyExpenses });
};

export { addExpense, getAllExpense, updateExpense, deleteExpense, stats };
