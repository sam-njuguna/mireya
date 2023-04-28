import React from "react";
import "./_work.scss";
import bg from "../../assets/work.jpg";
import { portfolio } from "../../constants/Constants";
import { MdLocalSee } from "react-icons/md";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div className="work">
      <div className="bg">
        <img src={bg} alt="" />
        <div className="footer"></div>
      </div>
      <div className="work__content">
        <div className="width">
          <div className="intro ">
            <div className="title">
              <h5>PORTFOLIO</h5>
            </div>

            <div className="desc">
              <h1 className="h1">
                Explore Our Amazing
                <span className="outline-text">
                  <br />
                  Professional Cases.
                </span>
              </h1>
              <p>Protect Your Gear with Our High-Quality Professional Cases.</p>
            </div>
            <div className="scroll">
              <div className="border">
                <div className="dot"></div>
              </div>
              <p className="spans">SCROLL DOWN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="width">
        <div className="nav">
          <h1 className="out-text">01</h1>
          <div className="title">
            <h5>PROJECTS</h5>
          </div>
          <h3 className="h3">Project gallery</h3>
        </div>
        <div className="flex">
          <div className="cards">
            {portfolio.map((port) => (
              <Link key={port.id} to={`/detail/${port.id}`}>
                <div className="view">
                  <img src={port.image} alt={port.name} />
                  <div className="center">
                    <MdLocalSee />
                  </div>
                </div>
                {port.image ? (
                  <div className="d">
                    <h4>{port.name}</h4>
                    <p>{port.desc}</p>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="width all">
        <div className="content mt">
          <h1 className="out-text">02</h1>
          <div className="title">
            <h5>RESULT</h5>
          </div>
          <h3 className="h3">
            Invest in Quality with <br /> Our Professional
          </h3>
          <p className="p">
            <span>
              Our team of experts is committed to transforming your space into a
              beautiful and functional living area that meets your unique needs
              and style. Trust us to bring your dream home to life with our
              exceptional services.
            </span>
          </p>
        </div>
        <div className="mt call">
          <div className="title">
            <h5>CALL TO ACTION</h5>
          </div>
          <div className="desc">
            <h1 className="h1">
              We still have a lot of
              <span className="outline-text">
                {" "}
                <br /> interesting things!
              </span>
            </h1>
            <p className="w">
              Despite everything we've accomplished, there are still countless
              fascinating discoveries and experiences waiting to be had.
            </p>
            <div className="btn">
              <Link to="/contact">
                <button className="button">let's discuss</button>
              </Link>
              <Link to="/work">portfolio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
