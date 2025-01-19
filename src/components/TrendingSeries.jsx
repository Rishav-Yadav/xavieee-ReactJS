import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Fullpage from "fullpage.js";
import { getSeries } from "../context/TrendingAction";
import TrendingContext from "../context/TrendingContext";
import "fullpage.js/dist/fullpage.css";

function TrendingSeries() {
  const { series, dispatch } = useContext(TrendingContext);
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    // Fetch trending series
    const getTrendingSeries = async () => {
      const temp = await getSeries();
      dispatch({ type: "SERIES", payload: temp });
    };

    getTrendingSeries();

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

  const trendingSeries = series.slice(0, 10);
  return (
    <div id="fullpage">
      {/* Horizontal Scrolling Section (only this one) */}
      <div className="section">
        <div className="horizontal-scroll-container" ref={horizontalScrollRef}>
          {trendingSeries.concat(trendingSeries).map((item, index) => (
            <div key={index} className="horizontal-item">
              <Link to="./">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TrendingSeries;
