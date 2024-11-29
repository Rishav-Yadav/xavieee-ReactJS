export const movies = async () => {
  const response = await fetch(
    `https://67497afab97b14289d6d50b6--endearing-biscochitos-506ba9.netlify.app/.netlify/functions/tmdb`
  );
  console.log(response);
};
