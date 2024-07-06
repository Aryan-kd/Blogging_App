<<<<<<< HEAD
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
=======
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
>>>>>>> newBranch

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
<<<<<<< HEAD
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
=======
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
>>>>>>> newBranch
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
<<<<<<< HEAD
    res.json('Signup successful');
=======
    res.json("Signup successful");
>>>>>>> newBranch
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

<<<<<<< HEAD
  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
=======
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
>>>>>>> newBranch
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
<<<<<<< HEAD
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
=======
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
>>>>>>> newBranch
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
<<<<<<< HEAD
      .cookie('access_token', token, {
=======
      .cookie("access_token", token, {
>>>>>>> newBranch
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
<<<<<<< HEAD
=======
    console.log("JWT Error");
>>>>>>> newBranch
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = user._doc;
      res
        .status(200)
<<<<<<< HEAD
        .cookie('access_token', token, {
=======
        .cookie("access_token", token, {
>>>>>>> newBranch
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
<<<<<<< HEAD
          name.toLowerCase().split(' ').join('') +
=======
          name.toLowerCase().split(" ").join("") +
>>>>>>> newBranch
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
<<<<<<< HEAD
        .cookie('access_token', token, {
=======
        .cookie("access_token", token, {
>>>>>>> newBranch
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
