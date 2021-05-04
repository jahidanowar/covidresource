const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.index = catchAsync(async (req, res, next) => {
  const users = await User.find({
    verified: false,
    _id: { $ne: req.userId },
  }).select("-password");
  res.status(200).json(users);
});

exports.update = catchAsync(async (req, res, next) => {
  const { verified, role } = req.body;

  const userUpdate = {};

  if (role) {
    userUpdate.role = role;
  }
  if (verified) {
    userUpdate.verified = true;
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, userUpdate);

  // console.log(userUpdate, updatedUser);

  if (!updatedUser) {
    return res.status(500).json("Something went wrong");
  }

  return res.status(200).json("User updated");
});

exports.destroy = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json("Invalid Request");
  }
  const deleteUser = await User.findByIdAndDelete(id);
  // console.log(userUpdate, updatedUser);
  if (!deleteUser) {
    return res.status(500).json("Something went wrong");
  }
  return res.status(200).json({});
});

/*
 */
exports.register = catchAsync(async (req, res, next) => {
  const { email, name, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({
    email,
    name,
    password: hash,
  });

  const register = await user.save();
  res.status(201).json({ message: "Registered!", data: register });
});

/*
 */
exports.login = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });
  // Pro
  if (!user) {
    return res.status(404).json({
      message: "Email does not exist!",
    });
  }
  if (!user.verified) {
    return res.status(403).json({
      message: "Please wait. One of our moderators will activate your account",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(422).json({
      message: "Invalid Email & Password!",
    });
  }

  const token = jwt.sign(
    {
      email: user.email,
      userId: user._id,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "10h",
    }
  );
  res.status(200).json(token);
});

exports.user = catchAsync(async (req, res, next) => {
  const userId = req.userId;

  const user = await User.findById(userId).select("-password");

  res.status(200).json({ user });
});

exports.logout = catchAsync(async (req, res, next) => {
  res.json({ status: "OK" });
});
