import React from 'react';
import Project from './Project';
import { PROJECTS } from './PROJECTS';

const Showcase = () => {
  return (
    <div className="container projects">
      <h3>Projects:</h3>
      {PROJECTS.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default Showcase;
