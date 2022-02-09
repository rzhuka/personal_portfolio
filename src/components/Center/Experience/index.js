import React from 'react';
import './index.css';

export const Experience = () => {
    return ( 
        <div className="experience" id="experience">
        <div className="container">
          <header
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>My Resume</p>
            <h2>Working Experience</h2>
          </header>
          <div className="timeline">
            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">01.2018 - 05.2018</div>
                <h2>IT</h2>
                <h4>Albanian Mathematical Association</h4>
                <p>
                  Installing and configuring computer hardware, software, systems,
                  networks, printers, and scanners
                </p>
                <p>Setting up accounts for new users</p>
              </div>
            </div>
            <div
              className="timeline-item right wow slideInRight"
              data-wow-delay="0.1s"
            >
              <div className="timeline-text">
                <div className="timeline-date">01.2018 - 02.2019</div>
                <h2>Software Tester</h2>
                <h4>TestIO</h4>
                <p>
                  Analyzing users stories and/use cases/requirements for validity
                  and feasibility
                </p>
                <p>
                  Execute all levels of testing (view, functionality, and speed)
                </p>
              </div>
            </div>
            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">05.2019 - 08.2019</div>
                <h2>Marketing Manager</h2>
                <h4>Albania Software House</h4>
                <p>
                  Write articles that will attract visitors to the company's
                  website and blog
                </p>
                <p>Build relationships and partnership with industry</p>
                <p>Make presentations for various campaigns</p>
                <p>Contact and support customers</p>
              </div>
            </div>
            <div
              className="timeline-item right wow slideInRight"
              data-wow-delay="0.1s"
            >
              <div className="timeline-text">
                <div className="timeline-date">08.2019 - 11.2019</div>
                <h2>Junior Web Developer</h2>
                <h4>Albania Software House</h4>
                <p>
                  Assisting with all aspects of website and application design for the web development team.
                </p>
                <p>
                  Assisting in the testing process.
              </p>
              <p>
                  Using user feedback to identify and correct problems with a client's website 
              </p>
              </div>
            </div>
            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
              <div className="timeline-text">
                <div className="timeline-date">11.2019 - 07.2021</div>
                <h2>Software Developer</h2>
                <h4>BIT</h4>
                <p>
                  Producing clean, efficient code based on specifications
                </p>
                <p>
                  Integrate software components and third-party programs
              </p>
                <p>
                  Developing, testing, and deploying software and systems
              </p>
              <p>
                  Troubleshoot, debug and upgrade existing software
              </p>
              </div>
            </div>
            <div
              className="timeline-item right wow slideInRight"
              data-wow-delay="0.1s"
            >
              <div className="timeline-text">
                <div className="timeline-date">08.2021 - present</div>
                <h2>Frontend Developer</h2>
                <h4>Móveo Albania Technology</h4>
                <p>Develop new features to enhance the user experience</p>
                <p>Build reusable code and libraries for future use</p>
                <p>Ensure the technical feasibility of UI/UX designs</p>
                <p>Assure that all user input is validated before submitting to back-end</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
