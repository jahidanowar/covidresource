const catchAsync = require("./../utils/catchAsync");
const Resource = require("./../models/resourceModel");

exports.index = catchAsync(async (req, res, next) => {
  const resources = await Resource.find({});
  res.status(200).json({ count: resources.length, data: resources });
});

exports.store = (req, res) => {};

exports.show = (req, res) => {};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};
