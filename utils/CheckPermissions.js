import Unauthorized from "../Errors/Unauthorized.js";

const checkPermissions = (requestUserId, expenseUserId) => {
  if (requestUserId === expenseUserId.toString()) return;
  throw new Unauthorized("You're not authorized to access this route!");
};

export default checkPermissions;
