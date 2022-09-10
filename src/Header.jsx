import React from 'react';

const Header = () => {
  return (
    <div class="header">
      <div class="info">
        <h2>Corbin Robb</h2>
        <h3>Full Stack Web Developer</h3>
        <div class="links">
          <a target="blank" href="https://github.com/corbinrobb">
            <img
              src="../images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png"
              alt="Github Icon"
            />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/corbinrobb/">
            <img
              class="LI"
              src="../images/linkedin-3-32.png"
              alt="LinkedIn Icon"
            />
          </a>
        </div>
      </div>
      <a class="down">⌄</a>
    </div>
  );
};

export default Header;
