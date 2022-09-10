import React, { useState } from 'react';

const NavBar = () => {
  return (
    <nav>
      <p>Corbin Robb</p>
      <a>Home</a>
      <a>Projects</a>
      <a>About</a>
      <a>Contact</a>
      <a target="blank" href="images/Resume.pdf">
        Resume
      </a>
    </nav>
  );
};

export default NavBar;
