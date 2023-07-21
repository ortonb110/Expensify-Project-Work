import Unauthenticated from "../Errors/Unauthenticated.js";
import jwt from "jsonwebtoken";

const Auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Unauthenticated("Authorization Invalid!");
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userID: payload.userId };
    next();
  } catch (error) {
    throw new Unauthenticated("Failed to Authenticate!");
  }
};

export default Auth;
