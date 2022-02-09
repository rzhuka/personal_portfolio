import React from 'react';
import "./index.css"
import AboutImg from "../../../assests/img/code.jpg";
import $ from 'jquery';
import { Progress } from 'react-sweet-progress';


export const About = () => {

// TO DO
//   $('.skills').waypoint(function () {
//     $('.progress .progress-bar').each(function () {
//         $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
// }, {offset: '80%'});

    return ( 
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={AboutImg} alt="Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header text-left">
                  <p>A BIT MORE ABOUT ME</p>
                  <h2>3 Years Experience</h2>
                </div>
                <div className="about-text">
                  <p>
                    On my prior projects, the most commonly used technologies
                    were:
                  </p>
                </div>
                <div className="skills">
                  <div className="skill-name">
                    <p>HTML</p>
                    <p></p>
                  </div>
                  <Progress percent={69}/>
                  {/* <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div> */}
                  <div className="skill-name">
                    <p>CSS</p>
                    <p>95%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>Bootstrap</p>
                    <p>90%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>JavaScript</p>
                    <p>90%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>TypeScript</p>
                    <p>85%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>JQyery</p>
                    <p>90%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>Ajax</p>
                    <p>80%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>Angular</p>
                    <p>50%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>React</p>
                    <p>99%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="99"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="skill-name">
                    <p>NodeJs</p>
                    <p>70%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
