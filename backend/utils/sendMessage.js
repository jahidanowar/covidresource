const axios = require("axios");

module.exports = async (message) => {
  const response = await axios.post(
    `${process.env.TELEGRAM_BOT_URI}&text=${message}&parse_mode=MarkdownV2`
  );
  return response.status == 200 ? true : false;
};
