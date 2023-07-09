import React from "react";
import "./aboutFeed.css";

function AboutFeed() {
  return (
    <div className="aboutFeed">
      <div className="aboutBanner">
        <img
          src="assets/about/desktop/image-hero-whitecup.jpg"
          alt=""
          className="aboutBannerImg"
        />
        <img
          src="assets/about/mobile/image-hero-whitecup.jpg"
          alt=""
          className="aboutBannerImgMobile"
        />
        <div className="aboutContent">
          <h1 className="aboutTitle">About Us</h1>
          <span className="aboutDesc">
            Cofferoasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment
          </span>
        </div>
      </div>

      <div className="ourCommitment">
        <div className="ourCommitmentLeft">
          <img
            src="assets/about/desktop/image-commitment.jpg"
            alt=""
            className="ourCommitmentLeftImg"
          />
          <img
            src="assets/about/mobile/image-commitment.jpg"
            alt=""
            className="ourCommitmentLeftImgMobile"
          />
        </div>
        <div className="ourCommitmentRight">
          <div className="ourCommitmentRightContent">
            <h3 className="ourCommitmentRightContentTitle">Our commitment</h3>
            <p className="ourCommitmentRightContentDesc">
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </div>
      </div>

      <div className="unCompromisingQuality">
        <img
          src="assets/about/desktop/bg-quality.png"
          alt=""
          className="unCompromisingQualityBg"
        />

        <div className="unCompromisingQualityBox">
          <div className="unCompromisingQualityLeft">
            <div className="unCompromisingQualityLeftContent">
              <h3 className="unCompromisingQualityLeftContentTitle">
                Uncompromising quality
              </h3>
              <span className="unCompromisingQualityLeftContentDesc">
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </span>
            </div>
          </div>
          <div className="unCompromisingQualityRight">
            <img
              src="assets/about/desktop/image-quality.jpg"
              className="unCompromisingQualityRightImg"
            />
            <img
              src="assets/about/mobile/image-quality.jpg"
              className="unCompromisingQualityRightImgMobile"
            />
          </div>
        </div>
      </div>

      <div className="ourHeadQuarters">
        <h3 className="ourHeadQuartersTitle">Our headquarters</h3>
        <div className="countryCards">
          <div className="countryCard">
            <img
              src="assets/about/desktop/illustration-uk.svg"
              alt=""
              className="countryCardImg"
            />
            <h3 className="countryCardTitle">United Kingdom</h3>

            <span className="countryCardInfo">68 Asfordby Rd</span>
            <span className="countryCardInfo">Alcaston</span>
            <span className="countryCardInfo">SY6 1YA</span>
            <span className="countryCardInfo">+44 1241 918425</span>
          </div>
          <div className="countryCard">
            <img
              src="assets/about/desktop/illustration-canada.svg"
              alt=""
              className="countryCardImg"
            />
            <h3 className="countryCardTitle">Canada</h3>
            <span className="countryCardInfo">1528 Eglinton Avenue</span>
            <span className="countryCardInfo">Toronto</span>
            <span className="countryCardInfo">Ontario M4P 1A6</span>
            <span className="countryCardInfo">+1 416 485 2997</span>
          </div>
          <div className="countryCard">
            <img
              src="assets/about/desktop/illustration-australia.svg"
              alt=""
              className="countryCardImg"
            />
            <h3 className="countryCardTitle">Australia</h3>
            <span className="countryCardInfo">36 Swanston Street</span>
            <span className="countryCardInfo">Kewell</span>
            <span className="countryCardInfo">Victoria</span>
            <span className="countryCardInfo">+61 4 9928 3629</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFeed;
