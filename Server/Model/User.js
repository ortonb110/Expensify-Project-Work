import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const User = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name!"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email!"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      msg: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    select: false,
    minlength: 6,
    trim: true,
  },
  location: {
    type: String,
    default: "My City",
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    default: "lastName",
    maxlength: 20,
    trim: true,
    minlength: 3,
  },
});

User.pre("save", async function () {
  if(!this.isModified('password')) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

User.methods.createJWT = function () {
  return jwt.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

User.methods.comparePassword= function (userPassword) {
  const isMatch = bcrypt.compare(userPassword, this.password);
  return isMatch;
}

export default mongoose.model("User", User);
