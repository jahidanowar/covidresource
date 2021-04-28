const catchAsync = require("./../utils/catchAsync");
const Resource = require("./../models/resourceModel");

/** 
 *  Resource Index
*/
exports.index = catchAsync(async (req, res, next) => {
//   console.log(req.query);
  const resources = await Resource.find({});
  res.status(200).json({ count: resources.length, data: resources });
});

/** 
 * Store a single resource
*/
exports.store = catchAsync(async(req, res) => {
  const category = req.body.category ;
  const name = req.body.name ;
  const link = req.body.link ;
  const phone = req.body.phone;
  const state = req.body.state;
  const district = req.body.district ;
  const address = req.body.address;
  const views = req.body.views;
  const long = req.body.long;
  const lat = req.body.lat;

  const resource = new Resource({
    category : category,
    name: name,
    link: link,
    phone:[phone],
    state: state,
    district: district,
    address: address,
    views:views,
    location :{
      type: "Point",
      coordinates: [long, lat]
    }
  });
  const source = await resource.save();
  res.status(200).json({resource: source});
});

/**
 * Shows Single Resource
 */
exports.show =catchAsync(async(req, res) => {
  const resourceId = req.params.slug ;

  const resource = await Resource.findById(resourceId);
  res.status(200).json({data: resource});
});

/**
 *  Upadte Views in a Resource
*/
exports.update = catchAsync(async(req, res) => {
  const resourceId = req.params.slug ;

  const source = await Resource.findById(resourceId);
  await Resource.findByIdAndUpdate(resourceId,{
    $set:{views: source.views + 1}
  });
  res.status(200).json({message: "Updated!!"});
});
