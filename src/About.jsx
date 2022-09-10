import React from 'react';

const About = () => {
  return (
    <section class="about container">
      <h3>About</h3>
      <div>
        <div class="about-photo">
          <img class="portrait" src="images/portrait.jpeg" alt="selfie of me" />
          <div class="links">
            <a target="blank" href="https://github.com/corbinrobb">
              <img
                src="../images/GitHub-Mark/PNG/GitHub-Mark-32px.png"
                alt="Github Icon"
              />
            </a>
            <a target="blank" href="https://www.linkedin.com/in/corbinrobb/">
              <img
                class="LI"
                src="../images/LI-In-Bug.png"
                alt="LinkedIn Icon"
              />
            </a>
          </div>
        </div>
        <div class="about-details">
          <div class="titles">
            <h3>Corbin Robb</h3>
            <h4>Denver, CO</h4>
          </div>
          <p>
            Determined and passionate Web Developer that enjoys creating
            applications using clean and efficient code. <br />
            <br />
            Has worked many years in customer facing and leadership roles and
            uses that experience to effectively communicate technical and
            creative ideas among both team members and clients. <br />
            <br />
            Enthusiastic about looking at projects from all angles and seeing
            the big picture of where they can go and enjoys helping them get
            there.
          </p>
          <p class="contact-links">
            <a
              class="contact"
              target="blank"
              href="mailto: corbinrobb@gmail.com"
            >
              Email
            </a>
            <a
              class="contact"
              target="blank"
              href="https://www.linkedin.com/in/corbinrobb/"
            >
              LinkedIn
            </a>
            <a class="contact" target="blank" href="images/Resume.pdf">
              Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
