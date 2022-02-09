import React from "react";
import HeroImg from "../../../assests/img/img.png";
import "./hero.css";
import $ from "jquery";
import Typed from "react-typed";
export const Hero = () => {
  const TyperText = () => {

      let typed_strings = 'Web Designer, Web Developer, Front End Developer, Software Developer';
      return (
        <Typed
          strings={typed_strings.split(", ")}
          typeSpeed={100}
          backSpeed={20}
          smartBackspace={false}
          loop={true}
        ></Typed>
      );
  
  };

  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className="hero-content">
              <div className="hero-text">
                <p>I'm</p>
                <h1>Renalda Zhuka</h1>
                
                <div className="typed-text">
                <h2> <TyperText/></h2>
               
                </div>
              </div>
              <div className="hero-btn">
                <a className="btn" href="">
                  Hire Me
                </a>
                <a className="btn" href="">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-none d-md-block">
            <div className="hero-image">
              <img src={HeroImg} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
