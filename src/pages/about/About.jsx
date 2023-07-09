import React from "react";
import "./about.css";

import Navbar from "../../components/navbar/Navbar";
import AboutFeed from "../../components/aboutFeed/AboutFeed";
import Footer from '../../components/footer/Footer'

function About() {
  return (
    <div className="about animate__animated animate__fadeIn">
        <AboutFeed />
    </div>
  );
}

export default About;
