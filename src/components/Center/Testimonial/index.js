import React from "react";
import "./index.css";
import Test1 from '../../../assests/img/testimonial-1.jpg'
import Test2 from '../../../assests/img/testimonial-2.jpg'
import Test3 from '../../../assests/img/testimonial-3.jpg'

export const Testimonial = () => {

// TO DO
// $(".testimonials-carousel").owlCarousel({
//     center: true,
//     autoplay: true,
//     dots: true,
//     loop: true,
//     responsive: {
//         0:{
//             items:1
//         }
//     }
// });
    
  return (
    <div className="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
      <div className="container">
        <div className="testimonial-icon">
          <i className="fa fa-quote-left"></i>
        </div>
        <div className="owl-carousel testimonials-carousel">
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={Test1} alt="Image" />
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={Test2} alt="Image" />
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={Test3} alt="Image" />
            </div>
            <div className="testimonial-text">
              <p>
                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum
                dolor sit amet consec adipis elit.
              </p>
              <h3>Customer Name</h3>
              <h4>Profession</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
