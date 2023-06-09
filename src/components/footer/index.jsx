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
            <a
              href="https://www.linkedin.com/in/samson-njuguna-896a02243"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/sam-njuguna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://discord.com/users/1038333075433721926"
              target="_blank"
              rel="noopener noreferrer"
            >
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
