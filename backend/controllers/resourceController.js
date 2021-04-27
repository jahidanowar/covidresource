const catchAsync = require("./../utils/catchAsync");
const Resource = require("./../models/resourceModel");

exports.index = catchAsync(async (req, res, next) => {
//   console.log(req.query);
  const resources = await Resource.find({});
  res.status(200).json({ count: resources.length, data: resources });
});

exports.store = catchAsync(async(req, res) => {
  const category = req.body.category ;
  const name = req.body.name ;
  const link = req.body.link ;
  const state = req.body.state;
  const district = req.body.district ;
  const address = req.body.address;

  const resource = new Resource({
    category : category,
    name: name,
    link: link,
    state: state,
    district: district,
    address: address
  });
  const source = await resource.save();
  res.status(200).json({resource: source});
});

exports.show = (req, res) => {};

exports.update = (req, res) => {};

exports.destroy = (req, res) => {};
