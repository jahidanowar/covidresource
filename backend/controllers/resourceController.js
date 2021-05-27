const catchAsync = require("./../utils/catchAsync");
const Resource = require("./../models/resourceModel");
const sendMessage = require("../utils/sendMessage");

/**
 *  Resource Index
 */
exports.index = catchAsync(async (req, res, next) => {
  // console.log(req.query);
  const query = Resource.find({});

  if (req.query.category) {
    query.where({ category: req.query.category });
  }
  if (req.query.state) {
    query.where({ state: req.query.state });
  }
  if (req.query.district) {
    query.where({ district: req.query.district });
  }

  query.where({ status: "published" });

  query.sort("-_id").limit(20);

  const resources = await query;
  res.status(200).json({ count: resources.length, data: resources });
});

/**
 * Store a single resource
 */
exports.store = catchAsync(async (req, res) => {
  const category = req.body.category;
  const name = req.body.name;
  const link = req.body.link;
  const phone = req.body.phone;
  const state = req.body.state;
  const district = req.body.district;
  const address = req.body.address;
  const long = req.body.long;
  const lat = req.body.lat;
  const info = req.body.info;
  const source = req.body.source;

  const resource = new Resource({
    category: category,
    name: name,
    link: link,
    phone: [phone],
    state: state,
    district: district,
    address: address,
    info: info,
    link: source,
    location: {
      type: "Point",
      coordinates: [long, lat],
    },
  });
  const createdResource = await resource.save();
  res.status(201).json({ createdResource });
  sendMessage(`A new resource added
Category: *${category}*
Name: *${name}*
State: *${state}*
City: *${district}*
Phone: *${phone}*
`);
});

/**
 * Shows Single Resource
 */
exports.show = catchAsync(async (req, res) => {
  const resourceId = req.params.slug;

  const resource = await Resource.findById(resourceId);
  res.status(200).json({ data: resource });
});
/**
 *  Upadte Views in a Resource
 */
exports.update = catchAsync(async (req, res) => {
  const resourceId = req.params.slug;

  // const source = await Resource.findById(resourceId);

  const { name, phone, info, status } = req.body;

  const updatedData = {};
  if (name) {
    updatedData.name = name;
  }
  if (phone) {
    updatedData.phone = phone;
  }
  if (info) {
    updatedData.info = info;
  }
  if (status) {
    updatedData.status = status;
    updatedData.verified = true;
  }

  await Resource.findByIdAndUpdate(resourceId, {
    $set: updatedData,
  });
  res.status(200).json({ message: "Updated!!" });
});

/**
 * Un Published Resources
 */
exports.getPendingResources = catchAsync(async (req, res, next) => {
  const query = Resource.find({ status: "pending" });
  query.sort("_id").limit(100);
  const resources = await query;
  const totalResources = await Resource.countDocuments({});
  res
    .status(200)
    .json({ count: resources.length, totalResources, data: resources });
});
