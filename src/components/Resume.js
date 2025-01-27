import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="left-section">
        <div className="profile-photo">
          <img src="https://i.pinimg.com/736x/67/28/eb/6728ebffa5cbcb6e05ec5403b8e4e835.jpg" alt="Profile" />
        </div>
        <h2>Jonathan Patterson</h2>
        <h3>Senior Graphic Designer</h3>

        <div className="contact-info">
          <h4>Contact</h4>
         <p> <i className="fas fa-phone-alt"></i>: +123-456-7890</p>
          <p><i className="fas fa-envelope"></i>: hello@reallygreatsite.com</p>
          <p><i className="fas fa-link"></i>: www.reallygreatsite.com</p>
        </div>

        <div className="education">
          <h4>Education</h4>
          <p>
            <strong>Bachelor of Design</strong>
            <br />
            Warrieur University | 2014 - 2017
          </p>
          <p>
            <strong>Bachelor of Design</strong>
            <br />
            Warrieur University | 2014 - 2017
          </p>
          <p>
            <strong>Bachelor of Design</strong>
            <br />
            Warrieur University | 2014 - 2017
          </p>
        </div>

        <div className="skills">
          <h4>Skills</h4>
          <ul>
            <li>Management Skills</li>
            <li>Creativity</li>
            <li>Digital Marketing</li>
            <li>Negotiation</li>
          </ul>
        </div>

        <div className="languages">
          <h4>Languages</h4>
          <ul>
            <li>English</li>
            <li>German</li>
            <li>Spanish</li>
          </ul>
        </div>
      </div>

      <div className="right-section">
        <div className="profile-info">
          <h3>Profile Info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="experience">
          <h3>Experience</h3>
          <div>
            <h4>Senior Graphic Designer</h4>
            <p>Studio Showcase | 2020 - 2023</p>
            <ul>
              <li>Designed graphic assets for marketing campaigns.</li>
              <li>Led a team of junior designers.</li>
            </ul>
          </div>
          <div>
            <h4>Graphic Designer</h4>
            <p>Inhouse Company | 2018 - 2020</p>
            <ul>
              <li>Collaborated with marketing and product teams.</li>
            </ul>
          </div>
          <div>
            <h4>Senior Graphic Designer</h4>
            <p>Studio Showcase | 2016 - 2018</p>
            <ul>
              <li>Designed graphic assets for marketing campaigns.</li>
              <li>Led a team of junior designers.</li>
            </ul>
          </div>
        </div>

        <div className="projects">
          <h3>Projects</h3>
          <div>
            <h4>Portfolio Website</h4>
            <div className="project-links">
              <a
                href="https://github.com/username/project1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://liveproject1.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> Live
              </a>
            </div>
            <ul>
              <li>Designed and developed a responsive personal portfolio.</li>
              <li>Integrated contact form and blog system.</li>
            </ul>
          </div>
          <div>
            <h4>Project 2</h4>
            <div className="project-links">
              <a
                href="https://github.com/username/project2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://liveproject2.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> Live
              </a>
            </div>
            <ul>
              <li>Developed a blog website with integrated comment system.</li>
              <li>Used React and Node.js for frontend and backend.</li>
            </ul>
          </div>
          <div>
            <h4>Project 3</h4>
            <div className="project-links">
              <a
                href="https://github.com/username/project3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://liveproject3.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> Live
              </a>
            </div>
            <ul>
              <li>Built an e-commerce website with product management.</li>
              <li>Integrated payment gateway and admin panel.</li>
            </ul>
          </div>
        </div>


        <div className="achievements">
          <h3>Achievements</h3>
          <ul>
            <li>Reduced production cost by 20% in Studio Showcase.</li>
            <li>Managed projects worth over $10M.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
