import React, { useEffect } from "react";
import "./index.css";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";

export const Navbar = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      $("#navbar").addClass("nav-sticky");
    } else {
      $("#navbar").removeClass("nav-sticky");
    }
  };
  const handleActiveClass = (e) => {
    // console.log(this.hash)
  };
  //   $(".navbar-nav a").on("click", function (event) {
  //       console.log(this.hash)
  //     if (this.hash !== "") {
  //       event.preventDefault();

  //       $("html, body").animate(
  //         {
  //           scrollTop: $(this.hash).offset().top - 45,
  //         },
  //         1500,
  //         "easeInOutExpo"
  //       );

  //       if ($(this).parents(".navbar-nav").length) {
  //         $(".navbar-nav .active").removeClass("active");
  //         $(this).closest("a").addClass("active");
  //       }
  //     }
  //   });

  return (
    <div className="navbar navbar-expand-lg bg-light navbar-light" id="navbar">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          @REA
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav ml-auto">
            <a href="#home" className="nav-item nav-link active" onClick={(e) => handleActiveClass(e)}>
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#service" className="nav-item nav-link">
              Service
            </a>
            <a href="#experience" className="nav-item nav-link">
              Experience
            </a>
            <a href="#review" className="nav-item nav-link">
              Review
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
            <a href="#blog" className="nav-item nav-link">
              Blog
            </a>
            {/* <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                    <NavLink to="about" className="nav-item nav-link">About</NavLink> */}
            {/* <a href="#service" className="nav-item nav-link">Service</a>
                    <a href="#experience" className="nav-item nav-link">Experience</a>
                    <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                    <a href="#price" className="nav-item nav-link">Price</a>
                    <a href="#review" className="nav-item nav-link">Review</a>
                    <a href="#blog" className="nav-item nav-link">Blog</a>
                    <a href="#contact" className="nav-item nav-link">Contact</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
