import React from "react";
import "./Landing.css";
import { BiSearch } from "react-icons/bi";
import { MdShoppingBasket } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <img src="" />
      <div className="search__container">
        <div className="header__search">
          <input
            className="head__searchInput"
            placeholder="Search"
            type="text"
          />
          <BiSearch className="head__searchIcon" />
          <ImCancelCircle className="head__cancel" />
        </div>
      </div>

      <div className="head__nav">
        <Link to="home">
          <div className="head__opt1">
            <span className="head_options">Home</span>
          </div>
        </Link>
        <Link>
          <div className="head__opt1">
            <span className="head_options">New Releases</span>
          </div>
        </Link>
        <Link to="mensection">
          <div className="head__opt1">
            <span className="head_options">Men Section</span>
          </div>
        </Link>

        <div className="head__opt1">
          <span className="head_options">Women section</span>
        </div>

        <div className="head__opt1">
          <span className="head_options"> Kids Section</span>
        </div>

        <div className="head__opt1">
          <span className="head_options">Sign in</span>
        </div>

        <div className="head__opt1">
          <span className="head_options"> Register</span>
        </div>

        <div className=" opt__basket">
          <span></span>
        </div>
      </div>

      <div className="landing__text">
        <span className="landing__txt1">
          Ready to shop with the newest offers?
        </span>
        <span className="landing__txt2">Click below and see what's new</span>

        <button className="landing__button">
          <div class="box-1">
            <div class="btn btn-one">
              <span>SHOP NOW</span>
            </div>
            <div></div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Landing;
