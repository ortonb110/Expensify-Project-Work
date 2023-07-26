import Expenses from "../Model/Expenses.js";
import BadRequestError from "../Errors/BadRequest.js";
import Expenses from "../Model/Expenses.js";
import { StatusCodes } from "http-status-codes";

const addExpense = async (req, res) => {
  const { description, amount, receiver } = req.body;
  if (!description || !amount || !receiver) {
    throw new BadRequestError("Please provide all values!");
  }

  req.body.createdBy = req.user.userID;

  const { expense } = await Expenses.create(req.body);
  res.status(StatusCodes.OK).json({
    expense,
  });
};

export { addExpense };