const User = require("../models/userModel");

exports.isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (user.role !== "moderator") {
      return res.status(403).json("Unauthorized Request");
    }
    return next();
  } catch (error) {
    next(error);
  }
};
