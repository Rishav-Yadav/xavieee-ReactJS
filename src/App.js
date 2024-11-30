import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TrendingMovies from "./components/TrendingMovies";
import { TrendingProvider } from "./context/TrendingContext";

function App() {
  return (
    <>
      <Router>
        <TrendingProvider>
          <Navbar />
          <Home />
          <Routes></Routes>
        </TrendingProvider>
      </Router>
    </>
  );
}

export default App;
