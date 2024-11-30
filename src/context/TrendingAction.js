export const getMovies = async () => {
  const response = await fetch(
    "https://endearing-biscochitos-506ba9.netlify.app/.netlify/functions/TrendingMovies"
  );
  const data = await response.json();
  return data.results;
};
export const getSeries = async () => {
  const response = await fetch(
    `https://endearing-biscochitos-506ba9.netlify.app/.netlify/functions/TrendingSeries`
  );
  const data = await response.json();
  return data.results;
};
export const search = async (string) => {
  const response = await fetch(
    `https://endearing-biscochitos-506ba9.netlify.app/.netlify/functions/Search?query=${string}`
  );
  const data = await response.json();
  return data.results;
};
