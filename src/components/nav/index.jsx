import React, { useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";
import "./_nav.scss";
import { Link, NavLink } from "react-router-dom";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleopen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="wid">
          <div className="logo">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <h1>Mireya</h1>
            </Link>
          </div>
          <div className="menu" onClick={handleopen}>
            <h4>MENU</h4>
            {isOpen ? <HiXMark /> : <HiBars2 />}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="links">
          <div className="all-width">
            <div className="ul">
              <ul>
                <li>
                  <NavLink to="/" active="/" onClick={() => setIsOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    active="/about"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/work"
                    active="/work"
                    onClick={() => setIsOpen(false)}
                  >
                    Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    active="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    active="/blog"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="loc">
              <div className="location">
                <div className="col">
                  <h4> COUNTRY:</h4>
                  <p>Kenya</p>
                </div>
                <div className="col">
                  <h4>CITY:</h4>
                  <p>Nairobi</p>
                </div>
                <div className="col">
                  <h4>ADRESS:</h4>
                  <p>Kasarani,Mwiki Road</p>
                </div>
                <div className="col">
                  <h4>EMAIL:</h4>
                  <p>sam.x.njuguna@gmail.com</p>
                </div>
                <div className="col">
                  <h4>PHONE:</h4>
                  <p>+254 700 050 229</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
