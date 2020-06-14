import React from 'react';
import github from '../images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'
import linkedin from '../images/linkedin-3-32.png'

const Home = () => {
  return (
    <>
      <div className="header">
        <div>
          <h2>Corbin Robb</h2>
          <h3>Full Stack Web Developer</h3>
          <div className="links">
            <a target="blank" href="https://github.com/corbinrobb">
              <img src={github} />
            </a>
            <a target="blank" href="https://www.linkedin.com/in/corbin-robb/">
              <img className="LI" src={linkedin} />
            </a>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className="skills container">
        <h3>What I Do</h3>
        <h4>React</h4>
        <h4>JavaScript</h4>
        <h4>HTML</h4>
        <h4>CSS</h4>
        <h4>Node</h4>
        <h4>SQL</h4>
      </div>
    </>
  );
}

export default Home;