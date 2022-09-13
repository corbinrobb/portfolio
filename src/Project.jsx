import React, { useState } from 'react';

const Project = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const { title, short, long, tech, img, link, github } = project;

  return (
    <div
      onClick={() => setShowDetails((oldState) => !oldState)}
      className="project"
      // style={showDetails ? { width: '75%', height: '750px' } : null}
    >
      {showDetails && (
        <div className="project-details">
          <div>
            <h4>{title}</h4>
            <em>
              <p>{short}</p>
            </em>
            <p>{long}</p>
            <br />
            <span>
              <strong>Tech Stack:</strong>
            </span>
            <ul>
              {tech.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
            <br />
          </div>
          <div className="project-links">
            <a target="blank" href={link}>
              Demo
            </a>
            <a target="blank" href={github}>
              Github
            </a>
          </div>
        </div>
      )}
      <a>
        <img src={img} alt={title} />
      </a>
    </div>
  );
};

export default Project;
