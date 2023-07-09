import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HomeFeed from "../../components/homeFeed/HomeFeed";

import "./home.css";

function Home() {
  return (
    <div className="home animate__animated animate__fadeIn">
        <HomeFeed />
    </div>
  );
}

export default Home;
