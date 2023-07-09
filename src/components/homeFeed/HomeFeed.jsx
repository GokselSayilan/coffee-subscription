import React from "react";
import "./homeFeed.css";
import { Link } from "react-router-dom";

function HomeFeed() {
  return (
    <div className="HomeFeed">
      <div className="homeBanner">
        <img
          src="assets/home/desktop/image-hero-coffeepress.jpg"
          alt="homeBanner"
          className="homeBannerImg"
        />
        <img
          src="assets/home/mobile/image-hero-coffeepress.jpg"
          alt="homeBanner"
          className="homeBannerImgRes"
        />
        <div className="bannerTextWrapper">
          <h2 className="homeBannerTitle">Great coffee made simple.</h2>
          <span className="homeBannerDesc">
            Start your mornings with the world's best coffee. Try our expertly
            curated artisan coffees from our est roasters delivered directly to
            your door, at your schedule.
          </span>
          <Link to={"/plan"} className="buttonLink">
            <button className="homeBannerButton">Create your plan</button>
          </Link>
        </div>
      </div>

      <div className="ourCollection">
        <h1 className="ourCollectionBg">our collection</h1>
        <div className="collections">
          <div className="collection">
            <img
              src="assets/home/desktop/image-gran-espresso.png"
              alt=""
              className="collectionImg"
            />
            <h3 className="collectionTitle">Gran Espresso</h3>
            <span className="collectionDesc">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </span>
          </div>

          <div className="collection">
            <img
              src="assets/home/desktop/image-planalto.png"
              alt=""
              className="collectionImg"
            />
            <h3 className="collectionTitle">Plantalto</h3>
            <span className="collectionDesc">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </span>
          </div>

          <div className="collection">
            <img
              src="assets/home/desktop/image-piccollo.png"
              alt=""
              className="collectionImg"
            />
            <h3 className="collectionTitle">Piccollo</h3>
            <span className="collectionDesc">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </span>
          </div>

          <div className="collection">
            <img
              src="assets/home/desktop/image-danche.png"
              alt=""
              className="collectionImg"
            />
            <h3 className="collectionTitle">Danche</h3>
            <span className="collectionDesc">
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </span>
          </div>
        </div>
      </div>

      <div className="whyChooseUs">
        <img src="assets/home/desktop/bg-steps.png" className="whyChooseUsBg" />
        <div className="whyChooseUsTop">
          <h3 className="whyChooseUsTopTitle">Why choose us?</h3>
          <span className="whyChooseUsTopDesc">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </span>
        </div>

        <div className="whyChooseUsBottom">
          <div className="whyChooseUsBottomCard">
            <img
              src="assets/home/desktop/icon-coffee-bean.svg"
              alt=""
              className="whyChooseUsBottomCardImg"
            />
            <h3 className="whyChooseUsBottomCardTitle">Best quality</h3>
            <span className="whyChooseUsBottomCardDesc">
              Discover an endless variety of the world's best artistan coffee
              from each of our roasters.
            </span>
          </div>
          <div className="whyChooseUsBottomCard">
            <img
              src="assets/home/desktop/icon-gift.svg"
              alt=""
              className="whyChooseUsBottomCardImg"
            />
            <h3 className="whyChooseUsBottomCardTitle">Exclusive benefits</h3>
            <span className="whyChooseUsBottomCardDesc">
              Special offers and swag when you subscribe, including 30% off your
              ifrst shipment.
            </span>
          </div>
          <div className="whyChooseUsBottomCard">
            <img
              src="assets/home/desktop/icon-truck.svg"
              alt=""
              className="whyChooseUsBottomCardImg"
              id="truck"
            />
            <h3 className="whyChooseUsBottomCardTitle">Free shipping</h3>
            <span className="whyChooseUsBottomCardDesc">
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed
            </span>
          </div>
        </div>
      </div>

      <div className="howItWorks">
        <h2 className="howItWorksTitle">How it works</h2>
        <div className="howItWorksSeparator">
          <div className="howItWorksSeparatorCircles">
            <div className="howItWorksSeparatorCircle"></div>
            <div className="howItWorksSeparatorCircle"></div>
            <div className="howItWorksSeparatorCircle"></div>
          </div>
        </div>

        <div className="howItWorksCards">
          <div className="howItWorksCard">
            <h1 className="howItWorksCardNumber">01</h1>
            <span className="howItWorksCardTitle">Pick your coffee</span>
            <span className="howItWorksCardDesc">
              Select from our eveolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </span>
          </div>
          <div className="howItWorksCard">
            <h1 className="howItWorksCardNumber">02</h1>
            <span className="howItWorksCardTitle">Choose the frequency</span>
            <span className="howItWorksCardDesc">
              Customize your order frequency, quanitity,even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </span>
          </div>
          <div className="howItWorksCard">
            <h1 className="howItWorksCardNumber">03</h1>
            <span className="howItWorksCardTitle">Receive and enjoy!</span>
            <span className="howItWorksCardDesc">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </span>
          </div>
        </div>
        <Link to={"/plan"} className="buttonLink">
          <button className="howItWorksButton">Create your plan</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeFeed;
