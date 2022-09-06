import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      phone: req.body.phone,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created successfully.");
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) return next(createError(400, "incorrect Password"));
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {}
};

export { register, login };
