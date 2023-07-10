import React, { useEffect, useState, useRef } from "react";
import "./planFeed.css";
import CloseIcon from "@mui/icons-material/Close";
import ClipLoader from "react-spinners/ClipLoader";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

function PlanFeed() {
  const [stage1Selected, setStage1Selected] = useState("______");
  const [stage2Selected, setStage2Selected] = useState("______");
  const [stage3Selected, setStage3Selected] = useState("______");
  const [stage4Selected, setStage4Selected] = useState("______");
  const [stage5Selected, setStage5Selected] = useState("______");

  const [menu1Open, setMenu1Open] = useState(true);
  const [menu2Open, setMenu2Open] = useState(false);
  const [menu3Open, setMenu3Open] = useState(false);
  const [menu4Open, setMenu4Open] = useState(false);
  const [menu5Open, setMenu5Open] = useState(false);

  const [price1, setPrice1] = useState("7.20");
  const [price2, setPrice2] = useState("9.60");
  const [price3, setPrice3] = useState("12.00");
  const [totalPrice, setTotalPrice] = useState("");

  const [activeStage, setActiveStage] = useState("preferences");
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const card1 = ref0.current;
  const card2 = ref1.current;
  const card3 = ref2.current;
  const card4 = ref3.current;
  const button = ref4.current;

  const cardArray = [card1, card2, card3, card4];

  useEffect(() => {
    if (stage1Selected !== "______") {
      setMenu2Open(true);
      handleScroll(0);
      setActiveStage("bean type");
    }

    if (stage1Selected === "Capsule") {
      setMenu4Open(false);
    }
  }, [stage1Selected]);

  useEffect(() => {
    if (stage2Selected !== "______") {
      setMenu3Open(true);
      handleScroll(1);
      setActiveStage("quantity");
    }
  }, [stage2Selected]);

  useEffect(() => {
    if (stage3Selected !== "______" && stage1Selected !== "Capsule") {
      setMenu4Open(true);
      handleScroll(2);
      setActiveStage("grind option");
    }
    if (stage1Selected === "Capsule") {
      setMenu5Open(true);
      handleScroll(3);
      setActiveStage("deliveries");
    }
  }, [stage3Selected]);

  useEffect(() => {
    if (stage4Selected !== "______") {
      setMenu5Open(true);
      handleScroll(3);
      setActiveStage("deliveries");
    }
  }, [stage4Selected]);

  useEffect(() => {
    // process 1
    if (stage3Selected === "250g") {
      setPrice1("7.20");
      setPrice2("9.60");
      setPrice3("12.00");
    } else if (stage3Selected === "500g") {
      setPrice1("13.00");
      setPrice2("17.50");
      setPrice3("22.00");
    } else if (stage3Selected === "1000g") {
      setPrice1("22.00");
      setPrice2("32.00");
      setPrice3("42.00");
    }
  }, [stage3Selected]);

  useEffect(() => {
    // process 2
    if (stage3Selected && stage5Selected) {
      if (stage5Selected === "Every Week") {
        setTotalPrice((Number(price1) * 4).toFixed(2));
      } else if (stage5Selected === "Every 2 Weeks") {
        setTotalPrice((Number(price2) * 2).toFixed(2));
      } else if (stage5Selected === "Every Month") {
        setTotalPrice(Number(price3).toFixed(2));
      }
    }
  }, [stage3Selected, stage5Selected, price1, price2, price3]);

  useEffect(() => {
    if (stage5Selected !== "______") button.scrollIntoView({ behavior: "smooth" });
  }, [stage5Selected]);

  const handleOrderOpen = (e) => {
    if (
      e.target.id === "orderOpenBoxTopIcon" ||
      e.target.className === "orderOpen"
    ) {
      setIsOrderOpen(false);
    }
  };

  const handleCompleted = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setOrderCompleted(true);

      setTimeout(() => {
        setIsOrderOpen(false);
      }, 1500);
    }, 2000);
  };

  const handleScroll = (index) => {
    cardArray[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="planFeed">
      <div className="planFeedBanner">
        <img
          src="assets/plan/desktop/image-hero-blackcup.jpg"
          alt=""
          className="planFeedBannerImg"
        />
        <img
          src="assets/plan/mobile/image-hero-blackcup.jpg"
          alt=""
          className="planFeedBannerImgMobile"
        />
        <div className="planFeedContent">
          <h2 className="planFeedContentTitle">Create plan</h2>
          <span className="planFeedContentDesc">
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </span>
        </div>
      </div>

      <div className="howItWorksPlan">
        <img
          src="assets/plan/desktop/bg-steps.png"
          alt=""
          className="howItWorksImgPlan"
        />
        <div className="howItWorksWrapperPlan">
          <div className="howItWorksSeparatorPlan">
            <div className="howItWorksSeparatorCirclesPlan">
              <div className="howItWorksSeparatorCirclePlan"></div>
              <div className="howItWorksSeparatorCirclePlan"></div>
              <div className="howItWorksSeparatorCirclePlan"></div>
            </div>
          </div>

          <div className="howItWorksCardsPlan">
            <div className="howItWorksCardPlan">
              <h1 className="howItWorksCardNumberPlan">01</h1>
              <span className="howItWorksCardTitlePlan">Pick your coffee</span>
              <span className="howItWorksCardDescPlan">
                Select from our eveolving range of artisan coffees. Our beans
                are ethically sourced and we pay fair prices for them. There are
                new coffees in all profiles every month for you to try out.
              </span>
            </div>
            <div className="howItWorksCardPlan">
              <h1 className="howItWorksCardNumberPlan">02</h1>
              <span className="howItWorksCardTitlePlan">
                Choose the frequency
              </span>
              <span className="howItWorksCardDescPlan">
                Customize your order frequency, quanitity,even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </span>
            </div>
            <div className="howItWorksCardPlan">
              <h1 className="howItWorksCardNumberPlan">03</h1>
              <span className="howItWorksCardTitlePlan">
                Receive and enjoy!
              </span>
              <span className="howItWorksCardDescPlan">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="order">
        <div className="orderLeft">
          <div className="orderStages">
            <div
              className={
                activeStage === "preferences"
                  ? "activeState orderStage"
                  : "orderStage"
              }
            >
              <h3 className="orderStageNumber">01</h3>
              <h3 className="orderStageTitle">Preferences</h3>
            </div>
            <hr className="orderStageHr" />
            <div
              className={
                activeStage === "bean type"
                  ? "activeState orderStage"
                  : "orderStage"
              }
            >
              <h3 className="orderStageNumber">02</h3>
              <h3 className="orderStageTitle">Bean Type</h3>
            </div>
            <hr className="orderStageHr" />
            <div
              className={
                activeStage === "quantity"
                  ? "activeState orderStage"
                  : "orderStage"
              }
            >
              <h3 className="orderStageNumber">03</h3>
              <h3 className="orderStageTitle">Quantity</h3>
            </div>
            <hr className="orderStageHr" />
            <div
              className={
                stage1Selected === "Capsule"
                  ? "orderStage passive"
                  : "orderStage"
              }
              style={activeStage === "grind option" ? { color: "black" } : {}}
            >
              <h3 className="orderStageTitle" id="grindOption">
                04 Grind Option
              </h3>
            </div>
            <hr className="orderStageHr" />

            <div
              className={
                activeStage === "deliveries"
                  ? "activeState orderStage"
                  : "orderStage"
              }
            >
              <h3 className="orderStageNumber">05</h3>
              <h3 className="orderStageTitle">Deliveries</h3>
            </div>
          </div>
        </div>
        <div className="orderRight">
          <div className="orderRightBoxs">
            <div className="orderRightBox">
              <h3 className="orderRightBoxTitle">
                How do you drink your coffee?
                <img
                  src="assets/plan/desktop/icon-arrow.svg"
                  className={
                    menu1Open
                      ? "orderRightMenuIcon reverseMenuIcon"
                      : "orderRightMenuIcon"
                  }
                  onClick={() => setMenu1Open(!menu1Open)}
                />
              </h3>
              {menu1Open && (
                <div className="orderRightBoxCards animate__animated animate__fadeInRight">
                  <div
                    className={
                      stage1Selected === "Capsule"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage1Selected("Capsule")}
                  >
                    <h4 className="orderRightBoxCardTitle">Capsule</h4>
                    <span className="orderRightBoxCardDesc">
                      Compatible with Nespresso systems and similar brewers
                    </span>
                  </div>
                  <div
                    className={
                      stage1Selected === "Filter"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage1Selected("Filter")}
                  >
                    <h4 className="orderRightBoxCardTitle">Filter</h4>
                    <span className="orderRightBoxCardDesc">
                      For pour over or drip methods like Aeropress, Chemex, and
                      V60
                    </span>
                  </div>
                  <div
                    className={
                      stage1Selected === "Espresso"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage1Selected("Espresso")}
                  >
                    <h4 className="orderRightBoxCardTitle">Espresso</h4>
                    <span className="orderRightBoxCardDesc">
                      Dense and finely ground beans for an intense, flavorful
                      experience
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="orderRightBox" ref={ref0}>
              <h3 className="orderRightBoxTitle">
                What type of coffee?
                <img
                  src="assets/plan/desktop/icon-arrow.svg"
                  className={
                    menu2Open
                      ? "orderRightMenuIcon reverseMenuIcon"
                      : "orderRightMenuIcon"
                  }
                  onClick={() => {
                    if (stage1Selected !== "______") {
                      setMenu2Open(!menu2Open);
                    }
                  }}
                />
              </h3>
              {menu2Open && (
                <div className="orderRightBoxCards animate__animated animate__fadeInRight">
                  <div
                    className={
                      stage2Selected === "Single Origin"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage2Selected("Single Origin")}
                  >
                    <h4 className="orderRightBoxCardTitle">Single Origin</h4>
                    <span className="orderRightBoxCardDesc">
                      Distinct, high quality coffee from a specific family-owned
                      farm
                    </span>
                  </div>
                  <div
                    className={
                      stage2Selected === "Decaf"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage2Selected("Decaf")}
                  >
                    <h4 className="orderRightBoxCardTitle">Decaf</h4>
                    <span className="orderRightBoxCardDesc">
                      Just like regular coffee, except the caffeine has been
                      removed
                    </span>
                  </div>
                  <div
                    className={
                      stage2Selected === "Blended"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage2Selected("Blended")}
                  >
                    <h4 className="orderRightBoxCardTitle">Blended</h4>
                    <span className="orderRightBoxCardDesc">
                      Combination of two or three dark roasted beans of organic
                      coffees
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="orderRightBox" ref={ref1}>
              <h3 className="orderRightBoxTitle">
                How much would you like?
                <img
                  src="assets/plan/desktop/icon-arrow.svg"
                  className={
                    menu3Open
                      ? "orderRightMenuIcon reverseMenuIcon"
                      : "orderRightMenuIcon"
                  }
                  onClick={() => {
                    if (stage2Selected !== "______") {
                      setMenu3Open(!menu3Open);
                    }
                  }}
                />
              </h3>
              {menu3Open && (
                <div className="orderRightBoxCards animate__animated animate__fadeInRight">
                  <div
                    className={
                      stage3Selected === "250g"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage3Selected("250g")}
                  >
                    <h4 className="orderRightBoxCardTitle">250g</h4>
                    <span className="orderRightBoxCardDesc">
                      Perfect for the solo drinker. Yields about 12 delicious
                      cups.
                    </span>
                  </div>
                  <div
                    className={
                      stage3Selected === "500g"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage3Selected("500g")}
                  >
                    <h4 className="orderRightBoxCardTitle">500g</h4>
                    <span className="orderRightBoxCardDesc">
                      Perfect option for a couple. Yields about 40 delectable
                      cups.
                    </span>
                  </div>
                  <div
                    className={
                      stage3Selected === "1000g"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage3Selected("1000g")}
                  >
                    <h4 className="orderRightBoxCardTitle">1000g</h4>
                    <span className="orderRightBoxCardDesc">
                      Perfect for offices and events. Yields about 90 delightful
                      cups.
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="orderRightBox " ref={ref2}>
              <h4
                className={
                  stage1Selected === "Capsule"
                    ? "orderRightBoxTitle passive"
                    : "orderRightBoxTitle"
                }
              >
                Want us to grind them?
                <img
                  src="assets/plan/desktop/icon-arrow.svg"
                  className={
                    menu4Open
                      ? "orderRightMenuIcon reverseMenuIcon"
                      : "orderRightMenuIcon"
                  }
                  onClick={() => {
                    if (
                      stage3Selected !== "______" &&
                      stage1Selected !== "Capsule"
                    ) {
                      setMenu4Open(!menu4Open);
                    }
                  }}
                />
              </h4>
              {menu4Open && (
                <div className="orderRightBoxCards animate__animated animate__fadeInRight">
                  <div
                    className={
                      stage4Selected === "Wholebean"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage4Selected("Wholebean")}
                  >
                    <h4 className="orderRightBoxCardTitle">Wholebean</h4>
                    <span className="orderRightBoxCardDesc">
                      Best choice if you cherish the full sensory experience
                    </span>
                  </div>
                  <div
                    className={
                      stage4Selected === "Filter"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage4Selected("Filter")}
                  >
                    <h4 className="orderRightBoxCardTitle">Filter</h4>
                    <span className="orderRightBoxCardDesc">
                      For drip or pour-over coffee methods such as V60 or
                      Aeropress
                    </span>
                  </div>
                  <div
                    className={
                      stage4Selected === "Cafetiere"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage4Selected("Cafetiere")}
                  >
                    <h4 className="orderRightBoxCardTitle">Cafetiere</h4>
                    <span className="orderRightBoxCardDesc">
                      Course ground beans specially suited for french press
                      coffee
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="orderRightBox" ref={ref3}>
              <h3 className="orderRightBoxTitle">
                How often should we deliver?
                <img
                  src="assets/plan/desktop/icon-arrow.svg"
                  className={
                    menu5Open
                      ? "orderRightMenuIcon reverseMenuIcon"
                      : "orderRightMenuIcon"
                  }
                  onClick={() => {
                    if (
                      stage4Selected !== "______" ||
                      stage1Selected === "Capsule"
                    )
                      setMenu5Open(!menu5Open);
                  }}
                />
              </h3>
              {menu5Open && (
                <div className="orderRightBoxCards animate__animated animate__fadeInRight">
                  <div
                    className={
                      stage5Selected === "Every Week"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage5Selected("Every Week")}
                  >
                    <h4 className="orderRightBoxCardTitle">Every week</h4>
                    <span className="orderRightBoxCardDesc">
                      ${price1} per shipment. Includes free first-class
                      shipping.
                    </span>
                  </div>
                  <div
                    className={
                      stage5Selected === "Every 2 Weeks"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage5Selected("Every 2 Weeks")}
                  >
                    <h4 className="orderRightBoxCardTitle">Every 2 weeks</h4>
                    <span className="orderRightBoxCardDesc">
                      ${price2} per shipment. Includes free priority shipping.
                    </span>
                  </div>
                  <div
                    className={
                      stage5Selected === "Every Month"
                        ? "orderRightBoxCard selectedCard"
                        : "orderRightBoxCard"
                    }
                    onClick={() => setStage5Selected("Every Month")}
                  >
                    <h4 className="orderRightBoxCardTitle">Every month</h4>
                    <span className="orderRightBoxCardDesc">
                      ${price3} per shipment. Includes free priority shipping.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="orderSummary">
            <img
              src="assets/plan/desktop/bg-order-summary.png"
              className="orderSummaryImg"
            />
            <div className="orderSummaryContent">
              <h4 className="orderSummaryTitle">ORDER SUMMARY</h4>
              <h4 className="orderSummaryDesc">
                “I drink my coffee as
                <span className="selectedCoffee"> {stage1Selected}</span>, with
                a <span className="selectedCoffee"> {stage2Selected}</span> type
                of bean.
                <span className="selectedCoffee"> {stage3Selected}</span>
                {stage1Selected !== "Capsule" && "ground ala"}
                {stage1Selected !== "Capsule" && (
                  <span className="selectedCoffee"> {stage4Selected}</span>
                )}
                , sent to me{" "}
                <span className="selectedCoffee"> {stage5Selected}</span>
                .”
              </h4>
            </div>
          </div>
          <div className="buttonWrapper">
            <button
              className="orderButton"
              ref={ref4}
              onClick={() => {
                if (stage5Selected !== "______") {
                  setIsOrderOpen(true);
                  window.scrollTo(0, 0);
                }
              }}
            >
              Create my plan!
            </button>
          </div>
        </div>
      </div>
      {isOrderOpen && stage5Selected !== "______" && (
        <div className="orderOpen" onClick={(e) => handleOrderOpen(e)}>
          <div className="orderOpenBox">
            <div className="orderOpenBoxTop">
              <h3 className="orderOpenBoxTopTitle">Order Summary</h3>
              <span>
                <CloseIcon id={"orderOpenBoxTopIcon"} />
              </span>
            </div>
            <div className="orderOpenBoxMidle">
              {orderCompleted ? (
                <h2 className="orderCompletedTitle">Thank You!</h2>
              ) : (
                <>
                  <h4 className="orderSummaryDesc" id="orderSummaryDescBottom">
                    “I drink my coffee as
                    <span className="selectedCoffee"> {stage1Selected}</span>,
                    with a{" "}
                    <span className="selectedCoffee"> {stage2Selected}</span>{" "}
                    type of bean.
                    <span className="selectedCoffee"> {stage3Selected}</span>
                    {stage1Selected !== "Capsule" && "ground ala"}
                    {stage1Selected !== "Capsule" && (
                      <span className="selectedCoffee"> {stage4Selected}</span>
                    )}
                    , sent to me{" "}
                    <span className="selectedCoffee"> {stage5Selected}</span>
                    .”
                  </h4>
                  <span className="orderOpenBoxMidleDesc">
                    Is this correct? You can proceed to checkout or go back to
                    plan selection if something is off. Subscription discount
                    codes can also be redeemed at the checkout.{" "}
                  </span>
                </>
              )}
            </div>
            <div className="orderOpenBoxBottom">
              <div className="orderOpenBoxBottomWrapper">
                <h2 className="orderOpenBoxBottomPrice">${totalPrice}/ mo</h2>
                <button
                  className="orderOpenBoxBottomButton"
                  disabled={orderCompleted}
                  onClick={handleCompleted}
                >
                  {isLoading && <ClipLoader size={24} color="#ffffff" />}
                  {orderCompleted && <FileDownloadDoneIcon />}
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanFeed;
