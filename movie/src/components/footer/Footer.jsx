import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <a style={{ color: "white",textDecoration:"none" }} href="#"><li  className="menuItem">About</li></a>
          <a style={{ color: "white", textDecoration: "none" }} href="#"><li className="menuItem">Blog</li></a>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
       All copyright reserved to @kalpeshsalave
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }} href="https://github.com/kalpking"><FaGithub /></a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="#"><FaGitlab /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="#"><FaInstagram /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://twitter.com/PerfectionLord"><FaTwitter /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.linkedin.com/in/kalpeshsalave/"><FaLinkedin /></a> 
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;