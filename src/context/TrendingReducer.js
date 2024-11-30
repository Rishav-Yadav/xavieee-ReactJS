const trendingReducer = (state, action) => {
  switch (action.type) {
    case "MOVIES":
      return { ...state, movies: action.payload };
    case "SERIES":
      return { ...state, series: action.payload };
    default:
      return state;
  }
};
export default trendingReducer;
