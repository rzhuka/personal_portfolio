import React from 'react';
import './index.css'

export const Footer = () => {
    return ( 
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container-fluid">
        <div className="container">
          <div className="footer-info">
            <h2>Renalda Zhuka</h2>
            <h3>Tirana, Albania</h3>
            <div className="footer-menu">
              <p>zhukarenalda@gmail.com</p>
            </div>
            <div className="footer-social">
              <a href=""><i className="fab fa-twitter"></i></a>
              {/* <!-- <a href=""><i className="fab fa-facebook-f"></i></a> -->
              <!-- <a href=""><i className="fab fa-youtube"></i></a> -->
              <!-- <a href=""><i className="fab fa-instagram"></i></a> --> */}
              <a href=""><i className="fab fa-gitlab"></i></a>
              <a href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>
            &copy; <a href="#">Rea</a>, All Right Reserved | Designed By
            <a href="https://htmlcodex.com">Rea</a>
          </p>
        </div>
      </div>
    </div>
     );
}
 
