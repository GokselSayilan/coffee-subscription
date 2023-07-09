import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <img src="assets/about/desktop/bg-quality.png" className="footerBg" />
      <div className="footerLeft">
        <div className="footerLogo">
          <Link to={"/"}>
            <img
              src="assets/shared/desktop/logo-white.svg"
              alt=""
              className="footerLogoImg"
            />
          </Link>
          <div className="footerLinks">
            <span className="footerLink">
              <Link to={"/"} className="linkElementFooter">
                HOME
              </Link>
            </span>
            <span className="footerLink">
              <Link to={"/about"} className="linkElementFooter">
                ABOUT US
              </Link>
            </span>
            <span className="footerLink">
              <Link to={"/plan"} className="linkElementFooter">
                CREATE YOUR PLAN
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="footerRight">
        <img
          src="assets/shared/desktop/icon-facebook.svg"
          alt=""
          className="footerSocialMediaItem"
        />
        <img
          src="assets/shared/desktop/icon-twitter.svg"
          alt=""
          className="footerSocialMediaItem"
        />
        <img
          src="assets/shared/desktop/icon-instagram.svg"
          alt=""
          className="footerSocialMediaItem"
        />
      </div>
    </div>
  );
}

export default Footer;
