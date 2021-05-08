require("dotenv").config({ path: `${__dirname}/.env` });

const fetch = require("node-fetch");

const getVenueInfo = async (id) => {
  const res = await fetch(`https://api.yelp.com/v3/businesses/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.YELP_API}`,
    },
  });
  return res.json();
};

exports.handler = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;

  return {
    statusCode: 200,
    body: "",
  };
};
