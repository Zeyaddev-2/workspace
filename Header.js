import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__cont">
        <Link to="./home">
          <div className="header__opt2">
            <span className="opt__line1">Home</span>
          </div>
        </Link>

        
        <div className="header__opt2">
          <span className="opt">Pants</span>
        </div>
        <div className="header__opt2">
          <span className="opt">Shirts</span>
        </div>
        <div className="header__opt2">
          <span className="opt">Jeans</span>
        </div>
        <div className="header__opt2">
          <span className="opt">Headwear</span>
        </div>
        <div className="header__opt2">
          <span className="opt">Bracelets</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
