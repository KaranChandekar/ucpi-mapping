import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Connect with Us:</p>
      <div className="btn-container">
        <a href="https://twitter.com/UCPI_tech" target="_blank">
          Twitter <i class="fa-brands fa-twitter icon"></i>
        </a>
        <a href="https://discord.gg/v6ruvP3v7w" target="_blank">
          Discord <i class="fa-brands fa-discord icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
