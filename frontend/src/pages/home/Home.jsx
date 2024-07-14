import React from "react";
import Hero from "./hero/Hero";
import TrendingBook from "./trendingBook/TrendingBook";
import BottomBanner from "./bottombanner/BottomBanner.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingBook />
      <BottomBanner />
    </>
  );
};

export default Home;
