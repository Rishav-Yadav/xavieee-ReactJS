import { createContext, useReducer } from "react";
import trendingReducer from "./TrendingReducer";
const TrendingContext = createContext();
export const TrendingProvider = ({ children }) => {
  const initialState = {
    movies: [],
    series: [],
    searchData: [],
  };
  const [state, dispatch] = useReducer(trendingReducer, initialState);
  return (
    <TrendingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TrendingContext.Provider>
  );
};
export default TrendingContext;
