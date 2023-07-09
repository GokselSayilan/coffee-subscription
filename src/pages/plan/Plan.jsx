import React from "react";
import Navbar from "../../components/navbar/Navbar";

import './plan.css'
import PlanFeed from "../../components/planFeed/PlanFeed";
import Footer from "../../components/footer/Footer";

function Plan() {
  return (
    <div className="plan animate__animated animate__fadeIn">
        <PlanFeed/>
    </div>
  );
}

export default Plan;
