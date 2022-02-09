import React from 'react';
import './index.css'

export const Services = () => {
    return ( 
        <div className="service" id="service">
        <div className="container">
          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>What I do</p>
            <h2>Fantastic Quality Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <div className="service-text">
                  <h3>Web Design</h3>
                  <p>
                    I'll design a website for you that expresses the vision of
                    your company's goal, looks fantastic to visitors, and enhances
                    your online presence in the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fas fa-tablet-alt"></i>
                </div>
                <div className="service-text">
                  <h3>Responsive Design</h3>
                  <p>
                    Responsive design makes your site mobile-friendly, looks great
                    on both large and small screens, and increases the amount of
                    time visitors spend on it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fa fa-laptop"></i>
                </div>
                <div className="service-text">
                  <h3>Web Development</h3>
                  <p>
                    Your website will be developed using the most up-to-date
                    software technology, ensuring that it is efficient, safe, and
                    fast for your visitors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fa fa-laptop-code"></i>
                </div>
                <div className="service-text">
                  <h3>Software Development</h3>
                  <p>
                    Dedicated to providing a wide range of feature-enabled
                    software solutions in order to develop the best software to my
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
