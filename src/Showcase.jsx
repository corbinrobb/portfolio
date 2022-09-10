import React from 'react';
import Project from './Project';

const PROJECTS = [
  {
    title: 'Secret Family Recipes',
    short: 'App for writing and organizing recipes.',
    long: 'This project was a team effort, I was responsible for creating the CRUD operations and managing the state with Redux. I also helped with the layout and design of the application',
    tech: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    img: '../images/Screen Shot 2020-06-14 at 6.20.16 PM.png',
    link: 'https://secret-family-recipes-1.now.sh/',
    github: 'https://github.com/secret-family-recipe-1/front-end',
  },
  {
    title: 'Secret Family Recipes',
    short:
      "A recreation of Conway's Game of Life, the classic simulation of cellular automaton",
    long: "This is a simple React application that I made on my own. It's evolution is determined by it's initial state of alive and dead cells. With every generation each cell will count how many neighbors it has and by following a simple set of rules it will either survive to the next generation or die.",
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    img: '../images/Screen Shot 2020-08-18 at 9.24.33 AM.png',
    link: 'https://conways-game-of-life-ashen.vercel.app/',
    github: 'https://github.com/corbinrobb/conways-game-of-life',
  },
  {
    title: 'Dev Desk',
    short:
      'App made to create and organize help tickets for Lambda School students and team leads.',
    long: 'The development of this app was a team effort. My individual responsiblities were creating the forms with validation, handling the login/logout functionality and setting up the ticket buttons functionality. I also helped with the layout and design for the application',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    img: '../images/Screen Shot 2020-06-14 at 6.14.17 PM.png',
    link: 'https://dev-desk-queue.now.sh/',
    github: 'https://github.com/bw-dev-desk-queue-3/fe',
  },
];

const Showcase = () => {
  return (
    <div className="container projects">
      <h3>Projects:</h3>
      <Project project={PROJECTS[0]} />
      <Project project={PROJECTS[1]} />
      <Project project={PROJECTS[2]} />
    </div>
  );
};

export default Showcase;
