import React, { useState } from "react";
import { HiBars2, HiXMark } from "react-icons/hi2";
import "./_nav.scss";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleopen = () => {
    setIsOpen(!isOpen);
  };
  const link = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const location = [
    {
      title: "COUNTRY:",
      sub_title: "Kenya",
    },
    {
      title: "CITY:",
      sub_title: "Nairobi",
    },
    {
      title: "ADRESS:",
      sub_title: "Kasarani,Mwiki Road",
    },
    {
      title: "EMAIL:",
      sub_title: "sam.x.njuguna@gmail.com",
    },
    {
      title: "PHONE:",
      sub_title: "+254 70000000",
    },
  ];
  return (
    <>
      <nav>
        <div className="wid">
          <div className="logo">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu" onClick={handleopen}>
            <h4>MENU</h4>
            {isOpen ? <HiXMark /> : <HiBars2 />}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="ul">
          <div className="all-width">
            <div className="links">
              <ul>
                {link.map((link, index) => (
                  <NavLink
                    to={link.path}
                    active={link.path}
                    onClick={() => setIsOpen(false)}
                    key={index}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="loc">
              <div className="location">
                {location.map((loc, index) => (
                  <div className="col" key={index}>
                    <h4>{loc.title}</h4>
                    <p>{loc.sub_title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
