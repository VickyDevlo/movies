import React from "react";
import "./styles.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopReted from "./topRated/TopReted";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopReted />
    </div>
  );
};

export default Home;
