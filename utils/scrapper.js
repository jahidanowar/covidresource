const cio = require("cheerio");
const got = require("got");
const mongoose = require("mongoose");
const Resource = require("./../models/resourceModel");
const dotenv = require("dotenv");
dotenv.config();

const url = "https://life.coronasafe.network/west_bengal";
const long = 88.215608;
const lat = 24.095866;
const state = "West Bengal";

const ucrFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getPhoneNumber = (string) => {
  return string.match(/\d+/)[0].substr(0, 10);
};

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("You are successfully connect with MongoDb Database");
  } catch (error) {
    console.log("App starting error: ", error.stack);
    process.exit(1);
  }
})();

(async () => {
  const pageContent = await got(url);

  const $ = cio.load(pageContent.body);
  const resources = $(".max-w-3xl");

  for (let i = 0; i < resources.length; i++) {
    const resource = $(resources[i]);
    const category = resource.find("span.bg-gray-200").text().trim();
    const title = resource.find("h1.font-bold").text().trim();
    const city = resource.find("span.ml-2").text().trim();
    const phone = resource.find("a.ml-2").text().trim();
    const link = "https://life.coronasafe.network/west_bengal";

    try {
      await Resource.create({
        category,
        name: ucrFirst(title),
        state: state,
        district: city,
        phone: [getPhoneNumber(phone)],
        verified: false,
        status: "pending",
        link,
        location: {
          type: "Point",
          coordinates: [long, lat],
        },
      });
      console.log(`Resource no: ${i} added 👍`);
    } catch (e) {
      console.log(e.message);
    }
  }
  process.exit(1);
})();
