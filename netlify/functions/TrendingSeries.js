const fetch = require("node-fetch");

exports.handler = async (event) => {
  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
      body: "",
    };
  }

  // Fetch data from TMDB API
  const apiKey = "cd0ce1c185698cb27384f76fe842f709";
  const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("TMDB Response Received"); // Log for debugging

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Content-Type": "application/json", // Ensure JSON response
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching TMDB data:", error); // Log errors
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
      body: JSON.stringify({ error: "Failed to fetch data from TMDB API" }),
    };
  }
};
