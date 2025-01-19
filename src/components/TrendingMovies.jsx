import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Fullpage from "fullpage.js";
import { getMovies } from "../context/TrendingAction";
import TrendingContext from "../context/TrendingContext";
import "fullpage.js/dist/fullpage.css";

function TrendingMovies() {
  const { movies, dispatch } = useContext(TrendingContext);
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    // Fetch trending movies
    const getTrendingMovies = async () => {
      const temp = await getMovies();
      dispatch({ type: "MOVIES", payload: temp });
    };

    getTrendingMovies();

    // Initialize FullPage.js
    const fullpageInstance = new Fullpage("#fullpage", {
      licenseKey: "YOUR_LICENSE_KEY", // Optional, replace with your key
      navigation: false, // Hide navigation dots
      autoScrolling: true, // Enable auto-scrolling
      scrollBar: false, // Remove scrollbar
      scrollingSpeed: 700,
      credits: {
        enabled: false, // Disable "Made with FullPage.js" credit
      },
      continuousHorizontal: true, // Enable continuous horizontal scrolling
    });

    // Custom auto-scroll function
    const autoScroll = () => {
      if (horizontalScrollRef.current) {
        const container = horizontalScrollRef.current;
        const cardWidth =
          container.querySelector(".horizontal-item").offsetWidth;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0; // Reset to start
        } else {
          container.scrollLeft += cardWidth;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 2000); // Scroll every 2 seconds

    return () => {
      fullpageInstance.destroy();
      clearInterval(scrollInterval);
    };
  }, [dispatch]);

  const trendingMovies = movies.slice(0, 10);

  return (
    <div id="fullpage">
      {/* Horizontal Scrolling Section (only this one) */}
      <div className="section">
        <div className="horizontal-scroll-container" ref={horizontalScrollRef}>
          {trendingMovies.concat(trendingMovies).map((item, index) => (
            <div key={index} className="horizontal-item">
              <Link to="./">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingMovies;
