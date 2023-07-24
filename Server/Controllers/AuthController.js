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

  if (password.length < 6) {
    throw new BadRequestError("Password too weak!");
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
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please enter all values!");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new BadRequestError("Email does not exist!");
  }
  const isPassword = await user.comparePassword(password);
  if (!isPassword) {
    throw new BadRequestError("Password incorrect!");
  }
  user.password = undefined;
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      email: user.email,
      location: user.location,
    },
    token: token,
    location: user.location,
  });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !lastName || !name || !location) {
    throw new BadRequestError("Please provide all values!");
  }

  console.log(req.user.userID);
  const user = await User.findOne({ _id:req.user.userID });
  user.name = name;
  user.lastName = lastName;
  user.location = location;
  user.email = email;
  await user.save();
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({user, token, location});
};

export { register, login, updateUser };
