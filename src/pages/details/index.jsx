import React from "react";
import { Link, useParams } from "react-router-dom";
import { port1 } from "../../constants/Constants";
import { port2 } from "../../constants/Constants";
import { portfolio } from "../../constants/Constants";
import { BsArrowLeft } from "react-icons/bs";
import "./_detail.scss";
const Detail = () => {
  const { id } = useParams();

  const port = [...port1, ...port2, ...portfolio].find(
    (p) => p.id === parseInt(id)
  );
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
          <img src={port.details.image} alt="" />
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
        </div>
      </div>
      <div className="back">
        <div className="max-width">
          <div className="icon">
            <Link to="/work">
              <BsArrowLeft />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
