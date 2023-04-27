import React from "react";
import "./_contact.scss";
import bg from "../../assets/contact.jpg";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="contact">
      <div className="bg">
        <img src={bg} alt="" />
        <div className="footer"></div>
      </div>
      <div className="contact__content">
        <div className="width">
          <div className="intro ">
            <div className="title">
              <h5>CONTACT</h5>
            </div>

            <div className="desc">
              <h1 className="h1">
                Do you have any questions?
                <span className="outline-text">
                  <br /> Write us a message.
                </span>
              </h1>
              <p>
                Experience our exceptional customer service and reach out to us
                with any questions or concerns - we're always here to help!
              </p>
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
        <div className="flex">
          <div className="content">
            <h1 className="out-text">01</h1>
            <div className="title">
              <h5>LOCATION</h5>
            </div>
            <h3 className="h3">Welcome to visit</h3>
            <p>
              <span>Nairobi, Kenya,</span>
              <span>HTGS 4456 North Av.</span>
            </p>
          </div>
          <div className="content ">
            <h1 className="out-text">02</h1>
            <div className="title">
              <h5>CONTACT</h5>
            </div>
            <h3 className="h3">Shall we talk?</h3>
            <p>
              <span>Email: sam.x.njuguna@gmail.com</span>
              <span>Phone: +254 700 050 229</span>
            </p>
          </div>
        </div>
        <div className="form mt">
          <h1 className="out-text">03</h1>
          <div className="title">
            <h5>CONTACT FORM</h5>
          </div>
          <h3 className="h3">Write us a message</h3>
          <form action="">
            <div className="input">
              <div className="col">
                <label htmlFor="">first name</label>
                <input type="text" placeholder="Andrew" />
              </div>
              <div className="col">
                <label htmlFor="">Last name</label>
                <input type="text" placeholder="Chow" />
              </div>
            </div>
            <div className="input">
              <div className="col">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="col">
                <label htmlFor="">Phone Number</label>
                <input type="number" placeholder="+254 7** *** ***" />
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type your Message."
            />
            <div className="row">
              <button className="button">send message</button>
              <p>
                <span>* </span>
                We promise not to share your personal information with third
                parties.
              </p>
            </div>
          </form>
        </div>
        <div className="location mt">
          <h1 className="out-text">04</h1>
          <div className="title">
            <h5> LOCATION MAP</h5>
          </div>
          <h3 className="h3">Welcome to visit</h3>
          <div className="my">
            <MdLocationOn />
            <div className="loc">
              <a
                href="https://www.google.com/maps/@-1.2202012,36.8911121,15.54z"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIREYA
              </a>
            </div>
          </div>
        </div>
        <div className="mt call">
          <div className="title">
            <h5>CALL TO ACTION</h5>
          </div>
          <div className="desc">
            <h1 className="h1">
              We have an offer
              <span className="outline-text"> for you</span>
            </h1>
            <p>Interesting? Enter your email address to find out</p>
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

export default Contact;
