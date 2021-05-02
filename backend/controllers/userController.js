const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("./../utils/catchAsync");

/*
 */
exports.register = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({
    email: email,
    username: username,
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
  if (!user) {
    res.status(404).json({
      message: "Email does not exist!",
    });
  } else {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(422).json({
        message: "Invalid Email & Password!",
      });
    } else {
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
    }
  }
});

exports.user = catchAsync(async(req, res, next) =>{
  const userId = req.userId ;

  const user = await User.findById(userId).select("-password");

  res.status(200).json({data: user});

});
