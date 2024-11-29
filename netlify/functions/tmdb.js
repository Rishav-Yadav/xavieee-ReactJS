const fetch = require("node-fetch");

exports.handler = async () => {
  const apiKey = "cd0ce1c185698cb27384f76fe842f709";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Headers": "Content-Type", // Optional: Allow specific headers
        "Access-Control-Allow-Methods": "GET", // Optional: Allow specific methods
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Add header here as well
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify({ error: "Failed to fetch data from TMDB API" }),
    };
  }
};
