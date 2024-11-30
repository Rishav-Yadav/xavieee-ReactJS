const fetch = require("node-fetch");
exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: "",
    };
  }
  const { query = "avengers" } = event.queryStringParameters;
  const apiKey = "cd0ce1c185698cb27384f76fe842f709";
  const url = `https://api.themoviedb.org/3/search/multi?include_adult=true&language=en-US&api_key=${apiKey}&query=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Failed to fetch data from TMDB" }),
    };
  }
};
