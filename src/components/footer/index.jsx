import React from "react";
import "./_footer.scss";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-com">
      <div className="width">
        <div className="flex">
          <div className="logo">
            <h4>mireya</h4>
            <span>&copy;Alright reseved</span>
          </div>
          <div className="social">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
          </div>
          <div className="creator">
            <p>By: &nbsp;Samson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
