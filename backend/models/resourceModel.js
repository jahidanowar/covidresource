const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  category: {
    type: String,
    required: [true, "Please select a category"],
  },
  name: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
  },
  phone: {
    type: Array,
    required: [true, "Phone is required"]
  },
  link: {
    type: String,
    required: [true, "Source link is required"]
  },
  state: {
    type: String,
    required: [true, "Please select a state"],
  },
  district: {
    type: String,
    required: [true, "Please select a district"],
  },
  address: {
    type: String,
  },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: [Number],
  },
  views: {
    type: Number,
    default: 0,
  },
  info: {
    type: String,
  },
  cost: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  varifiedAt: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["published", "pending"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
resourceSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Resource", resourceSchema);
