export const movies = async () => {
  const response = await fetch(
    `https://endearing-biscochitos-506ba9/.netlify/functions/tmdb`
  );
  console.log(response);
};
