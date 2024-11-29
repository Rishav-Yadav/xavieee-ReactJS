const trendingReducer = (state, action) => {
  switch (action.type) {
    case "MOVIES":
      return { ...state, movies: action.payload };
    case "SERIES":
      return;
    default:
      return state;
  }
};
export default trendingReducer;
