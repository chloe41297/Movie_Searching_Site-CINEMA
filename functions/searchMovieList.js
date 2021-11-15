require("dotenv").config();
const { KEY } = process.env;

const axios = require("axios");

exports.handler = async function (e) {
  const options = JSON.parse(e.body);
  const { title } = options;
  const res = await axios({
    url: `https://www.omdbapi.com?apikey=${KEY}&s=${title}`,
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: body,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };
};
