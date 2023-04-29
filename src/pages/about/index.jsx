import React from "react";
import bg from "../../assets/about.jpg";
import { Link } from "react-router-dom";
import vid from "../../assets/mvideo.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { employees, testimonial } from "../../constants/Constants";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./_about.scss";
import LoaderWrapper from "../../hoc";
const About = () => {
  return (
    <div className="about">
      <div className="bg">
        <img src={bg} alt="" />
        <div className="footer"></div>
      </div>
      <div className="about__content">
        <div className="width">
          <div className="intro ">
            <div className="title">
              <h5>ABOUT US</h5>
            </div>

            <div className="desc">
              <h1 className="h1">
                Design is Intelligence
                <span className="outline-text">
                  <br /> Made Visible.
                </span>
              </h1>
              <p>
                <span className="span">Emmanuel Kariga </span> - CEO, in Mireya
                Desigers Campany.
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
      <div className="width pt">
        <div className="content">
          <h1 className="out-text">01</h1>
          <div className="title">
            <h5>WHO WE ARE</h5>
          </div>
          <h3 className="h3">
            Mireya is an award winning full service <br /> marketing agency
          </h3>
          <p className="p">
            With a team of experts in branding, digital marketing, and creative
            design, Mireya provides tailored solutions to help homeowners
            showcase their unique style and transform their living spaces into
            stunning works of art. From concept to execution, Mireya delivers
            exceptional results that exceed expectations and captivate
            audiences, ensuring that every home design project is a success.
            Trust Mireya to bring your house design to life and make your dream
            home a reality.
          </p>
        </div>
        <div className="content mt">
          <h1 className="out-text">02</h1>
          <div className="title">
            <h5>WHO WE ARE</h5>
          </div>
          <h3 className="h3">
            Relationships come first, everything <br /> else follows
          </h3>
          <p className="p">
            <span>
              We take pride in having strong relationships with our clients. To
              us, business is more than just a handshake and a signed contract.
              Through our full suite of services, we help businesses reach their
              goals and maximize return on investment while focusing on
              transparency and communication.
            </span>
            <span>
              Contact us today for your
              <Link to="/contact">free consultation</Link> .
            </span>
          </p>
        </div>
      </div>
      <div className="vid all-width mt">
        <video controls>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="width pb">
        <div className="content mt ">
          <h1 className="out-text">03</h1>
          <div className="title">
            <h5>SERVICES</h5>
          </div>
          <div className="col">
            <div className="cols">
              <h3 className="h3">
                Transformation Your <br /> Outdoor Space
              </h3>
              <p>
                Revamp your yard with our exterior design services. From
                beautiful gardens to cozy outdoor living areas, we'll help you
                create the perfect oasis.
              </p>
              <Link to="/contact">ORDER A SERVICE</Link>
            </div>
            <div className="cols">
              <h3 className="h3">
                Expert House <br /> Repairs
              </h3>
              <p>
                Need some home repairs? Trust our team of skilled professionals
                to fix any issue quickly and efficiently. We'll have your home
                looking like new in no time.
              </p>
              <Link to="/contact">ORDER A SERVICE</Link>
            </div>
            <div className="cols">
              <h3 className="h3">
                Innovative Architecture <br /> Solutions
              </h3>
              <p>
                Looking to build your dream home? Our team of architects will
                work with you to design a stunning, functional space that
                perfectly fits your lifestyle.
              </p>
              <Link to="/contact">ORDER A SERVICE</Link>
            </div>
            <div className="cols">
              <h3 className="h3">
                Elevate Your <br /> Interiors
              </h3>
              <p>
                Ready for a home makeover? Our interior design experts will help
                you transform any space into a beautiful, comfortable retreat.
                From color schemes to furniture, we've got you covered.
              </p>
              <Link to="/contact">ORDER A SERVICE</Link>
            </div>
          </div>
        </div>

        <div className="content mt ">
          <h1 className="out-text">04</h1>
          <div className="title">
            <h5>EMPLOYEES</h5>
          </div>
          <h3 className="h3">Our Amazing Team</h3>
          <div className="employee">
            <div className="nav">
              <div className="flex">
                <div className="custom-prev">
                  <BsArrowLeft />
                </div>
                <div className="custom-next">
                  <BsArrowRight />
                </div>
              </div>
              <p>SLIDER NAVIGATION</p>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              breakpoints={{
                450: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }}
              className="mySwiper"
            >
              {employees.map((employee, i) => (
                <SwiperSlide key={i}>
                  <img src={employee.img} alt="" />
                  <p className="name">{employee.name}</p>
                  <p className="position">{employee.postion}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="content mt">
          <h1 className="out-text">05</h1>
          <div className="title">
            <h5>WE CAN BECOME PARTNERS</h5>
          </div>
          <h3 className="h3"> We’re here to help, let us take it from here.</h3>
          <p className="p">
            We know that transparency is non-negotiable and that strong
            communication is the foundation of any great relationship. With the
            knowledge and expertise at Brand & Mortar we are confident that we
            can make an impact on your business and its bottom line.
          </p>
        </div>
        <div className="content mt">
          <h1 className="out-text">06</h1>
          <div className="title">
            <h5>TESTIMONIALS</h5>
          </div>
          <h3 className="h3">Our customers say</h3>
          <div className="employee">
            <div className="nav">
              <div className="flex">
                <div className="custom-prev">
                  <BsArrowLeft />
                </div>
                <div className="custom-next">
                  <BsArrowRight />
                </div>
              </div>
              <p>SLIDER NAVIGATION</p>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={5}
              loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {testimonial.map((test, i) => (
                <SwiperSlide key={i}>
                  <img src={test.img} alt="" className="test" />
                  <p>{test.name}</p>
                  <div className="title">
                    <h5>{test.title}</h5>
                  </div>
                  <p className="desc p">{test.desc}</p>
                  <p className="p">
                    <span className="start">
                      <span className="s">{test.star1}</span>
                      <span className="s">{test.star2}</span>
                      <span className="s">{test.star3}</span>
                      <span className="s">{test.star4}</span>
                      <span className="s">{test.star5}</span>
                      <span>{test.stars}</span>
                    </span>
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mt call">
          <div className="title">
            <h5>CALL TO ACTION</h5>
          </div>
          <div className="desc">
            <h1 className="h1">
              Do you have <span className="outline-text">a project?</span>
            </h1>
            <p className="w">
              Let us help? Bring your project to life with our expertise and
              passion for innovation.
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
};

export default LoaderWrapper(About, "about");
