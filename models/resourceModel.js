const mongoose = require(mongoose);
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: [String],
  link: {
    type: String,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    cordinates: {
      type: [Number],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Resource", resourceSchema);
