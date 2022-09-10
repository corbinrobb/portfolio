import React from 'react';

const Project = ({ project }) => {
  const { title, short, long, tech, img, link, github } = project;

  return (
    <div class="project">
      <div class="project-details">
        <div>
          <h4>{title}</h4>
          <p>{short}</p>
          <p>{long}</p>
          <br />
          <h4>
            <strong>Tech Stack:</strong>
          </h4>
          <ul>
            {tech.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
          <br />
        </div>
        <div class="project-links">
          <a target="blank" href={link}>
            Demo
          </a>
          <a target="blank" href={github}>
            Github
          </a>
        </div>
      </div>
      <a target="blank" href={link}>
        <img src={img} alt={title} />
      </a>
    </div>
  );
};

export default Project;
