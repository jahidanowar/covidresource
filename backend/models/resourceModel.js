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
  state: {
    type: String,
  },
  district: {
    type: String,
  },
  address: {
    type: String,
  },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: [Number],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
resourceSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Resource", resourceSchema);
