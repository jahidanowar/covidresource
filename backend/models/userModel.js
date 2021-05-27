const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email address is already registered"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  role: {
    type: String,
    enum: ["volunteer", "moderator"],
    default: "volunteer",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
