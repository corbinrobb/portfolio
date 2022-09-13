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
            Resourceful Web Developer that uses his passion and knowledge to
            build sleek, responsive web applications and solve complex problems.
          </p>
          <p>
            Well-versed in JavaScript, React, Node.js and SQL. Familiar with
            TypeScript, TailwindCSS, and Python.
          </p>
          <p>
            Enjoys drinking coffee, writing code, and occasionally working out.
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
