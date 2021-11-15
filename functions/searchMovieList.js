require("dotenv").config();
const { KEY } = process.env;

const axios = require("axios");

exports.handler = async function (e) {
  const options = JSON.parse(e.body);
  const { title, method } = options;

  const res = await axios({
    url: `https://www.omdbapi.com?apikey=${KEY}&s=${title}`,
    method,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };
};
