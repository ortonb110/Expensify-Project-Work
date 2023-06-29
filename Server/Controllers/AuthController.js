import { StatusCodes } from "http-status-codes";
import User from "../Model/User.js";
import BadRequestError from "../Errors/BadRequest.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !password || !email) {
    throw new BadRequestError("Please provide all values!");
  }

  const alreadyExist = await User.findOne({ email });
  if (alreadyExist) {
    throw new BadRequestError(`${email} already exist!`);
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      location: user.location,
      lastName: user.lastName,
    },
    token: token,
    location: user.location,
  });
};
const login = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Login" });
};

export { register, login };
