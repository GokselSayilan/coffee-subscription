import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbarLogo">
        <Link to={"/"}>
          <img
            src="assets/shared/desktop/logo-black.svg"
            className="navbarLogoImg"
          />
        </Link>
      </div>
      {isMenuOpen ? (
        <img
          src="assets/shared/mobile/icon-close.svg"
          alt=""
          className="hamburgerMenu visible"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <img
          src="assets/shared/mobile/icon-hamburger.svg"
          alt=""
          className="hamburgerMenu"
          onClick={() => setIsOpen(true)}
        />
      )}
      <div className={isMenuOpen ? "mobileMenu visible" : "none"}>
        <ul className="mobileMenuLists">
          <li className="mobilMenuList">
            <Link
              to={"/"}
              className="mobilMenuList"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="mobilMenuList">
            <Link
              to={"/about"}
              className="mobilMenuList"
              onClick={() => setIsOpen(false)}
            >
              ABOUT US
            </Link>
          </li>
          <li className="mobilMenuList">
            <Link
              to={"/plan"}
              className="mobilMenuList"
              onClick={() => setIsOpen(false)}
            >
              CREATE YOUR PLAN
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbarRightLists">
        <li className="navbarRightList">
          <Link to={"/"} className="linkElementNavbar">
            HOME
          </Link>
        </li>
        <li className="navbarRightList">
          <Link to={"/about"} className="linkElementNavbar">
            ABOUT US
          </Link>
        </li>
        <li className="navbarRightList">
          <Link to={"/plan"} className="linkElementNavbar">
            CREATE YOUR PLAN
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
