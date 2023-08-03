import React from "react";
import {
  AiFillHome,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-items">
          <div className="footer-logo">
            <AiFillHome className="footer-logo-icon" />
          </div>
          <div className="footer-items-para">
            © 2023 RealEsate. All rights reserved.
          </div>
          <div className="footer-items-icons">
            <AiFillInstagram className="footer-items-icon" />
            <AiFillFacebook className="footer-items-icon" />
            <AiFillTwitterSquare className="footer-items-icon" />
            <FaPinterestSquare className="footer-items-icon" />
            <AiFillLinkedin className="footer-items-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
