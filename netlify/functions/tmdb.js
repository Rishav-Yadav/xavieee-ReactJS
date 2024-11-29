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
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from TMDB API" }),
    };
  }
};

// const fetch = require('node-fetch');

// exports.handler = async (event, context) => {
//   const apiKey = process.env.TMDB_API_KEY;  // Set your TMDB API key in environment variables
//   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed to fetch data from TMDB API' }),
//     };
//   }
// };
