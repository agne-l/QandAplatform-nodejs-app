import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const REGISTER = async (req, res) => {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numericRegex = /\d/;

    let email = req.body.email;
    let password = req.body.password;

    if (!emailRegex.test(email)) {
      return res.status(404).json({ message: "Invalid email address" });
    }

    if (password.length < 8 || !numericRegex.test(password)) {
      return res.status(404).json({
        message:
          "Passwords must be at least 8 characters and contain both alphabetic and numeric characters.",
      });
    }

    const existingEmail = await UserModel.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(404).json({
        message: "There's already an account with this email.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    user.id = user._id;

    const newUser = await user.save();

    return res.status(200).json({ newUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const LOGIN = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ msg: "User does not exist" });
    }

    const isPasswordMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(404).json({ msg: "User does not exist" });
    }

    const token = jwt.sign(
      { email: user.email, id: user.id },
      process.env.JWT_SECRET
    );

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const GET_ALL_USERS = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const GET_USER_BY_ID = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

export { REGISTER, LOGIN, GET_ALL_USERS, GET_USER_BY_ID };
