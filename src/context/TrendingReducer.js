const trendingReducer = (state, action) => {
  switch (action.type) {
    case "MOVIES":
      return { ...state, movies: action.payload };
    case "SERIES":
      return { ...state, series: action.payload };
    case "SEARCH":
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};
export default trendingReducer;
