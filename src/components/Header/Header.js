import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div>
          <img src={Logo} alt="" />
        </div>

        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/countries">Countries</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
