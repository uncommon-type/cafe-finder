require("dotenv").config({ path: `${__dirname}/.env` });

const fetch = require("node-fetch");

const fetchFromYelp = async (location) => {
  const res = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=coffee&location=${location}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.YELP_API}`,
      },
    }
  );
  return res.json();
};

exports.handler = async ({ queryStringParameters }) => {
  const { location } = queryStringParameters;

  try {
    let data = await fetchFromYelp(location);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
  }
};
