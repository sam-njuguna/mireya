import React from "react";
import { Link, useParams } from "react-router-dom";
import { portfolio } from "../../constants/Constants";
import "./_detail.scss";
import { FaArrowLeft } from "react-icons/fa";
const Detail = () => {
  const { id } = useParams();

  const port = portfolio.find((p) => p.id === parseInt(id));
  return (
    <div className="detail">
      <div className="max-width">
        <div className="desc">
          <h1 className="h1">{port.details.name}</h1>
          <div className="scroll">
            <div className="border">
              <div className="dot"></div>
            </div>
            <p className="spans">SCROLL DOWN</p>
          </div>
          <div className="img">
            <img src={port.details.image} alt="" />
          </div>
          <div className="date">
            <span className="line"></span>
            <p>{port.details.date}</p>
          </div>
          <div className="con">
            <h3 className="h3">Description About the Work</h3>
            <p>{port.details.desc}</p>
          </div>
          <div className="test">
            <h3 className="h3">How Client Say</h3>
            <i>{port.details.test}</i>
          </div>
          <div className="more">
            <h3 className="h3">More Images</h3>
            <div className="image">{port.details.more}</div>
          </div>
        </div>
      </div>
      <div className="back">
        <div className="max-width">
          <Link to="/work">
            <div className="icon">
              <FaArrowLeft />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
