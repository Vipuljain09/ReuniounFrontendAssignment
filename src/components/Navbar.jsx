import React from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
import { Link } from "react-router-dom";

// Use this Menubar for small size devices like mobile, tablet ...
const MenuBar = () => {

  return (
    <div className="menubar" id="menubar">
      <ul className="menubar-links">
        <li className="menubar-link">
          <Link className="link" to="/rent">
            Rent
          </Link>
        </li>
        <li className="menubar-link">
          <Link className="link" to="/buy">
            Buy
          </Link>
        </li>
        <li className="menubar-link">
          <Link className="link" to="/sell">
            Sell
          </Link>
        </li>
        <li className="menubar-link">
          <Link className="link" to="/about">
            Abouts us
          </Link>
        </li>
        <li className="menubar-link">
          <Link className="link" to="/contact">
            Contact us
          </Link>
        </li>
      </ul>
      <div className="menubar-auth">
        <div className="menubar-auth-login">
          <Link className="link" to="/login">
            Login
          </Link>
        </div>
        <div className="menubar-auth-sign-up">
          <Link className="link" to="/sign-up">
            Sign-up
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {

  //  Toggle Handler is used to show and hide the menubar after clicking on menubar-icon... 
  
  const toggleHandler = () => {
    document.getElementById("menubar").classList.toggle("menubar-toggle");
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-items">
          <div className="navbar-logo">
            <AiFillHome className="navbar-logo-icon" />
            <h2 className="navbar-logo-heading">
              <Link to="/" className="link">
                BuildEstate
              </Link>
            </h2>
          </div>
          <ul className="navbar-links">
            <li className="navbar-link">
              <Link className="link" to="/rent">
                Rent
              </Link>
            </li>
            <li className="navbar-link">
              <Link className="link" to="/buy">
                Buy
              </Link>
            </li>
            <li className="navbar-link">
              <Link className="link" to="/sell">
                Sell
              </Link>
            </li>
            <li className="navbar-link">
              <Link className="link" to="/about">
                Abouts us
              </Link>
            </li>
            <li className="navbar-link">
              <Link className="link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-auth">
          <div className="navbar-auth-login">
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
          <div className="navbar-auth-sign-up">
            <Link className="link" to="/sign-up">
              Sign-up
            </Link>
          </div>
        </div>
        <AiOutlineMenu className="menubar-icon" onClick={toggleHandler} />
        <MenuBar />
      </div>
    </div>
  );
};

export default Navbar;
