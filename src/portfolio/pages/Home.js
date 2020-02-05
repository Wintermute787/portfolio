import React, { Component } from "react";
import "./Home.css";
import HomeHeader from "../components/home/HomeHeader";
import HomeInfo from "../components/home/HomeInfo";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeInfo />
    </div>
  );
};

export default Home;
