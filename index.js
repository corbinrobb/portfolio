gsap.registerPlugin(ScrollTrigger);

const [homeLink, projectsLink] = document.querySelectorAll('nav a');

homeLink.addEventListener('click', () => {
  gsap.to(window, {duration: 1, scrollTo: 0});
})

projectsLink.addEventListener('click', () => {
  gsap.to(window, {duration: 1, scrollTo: "#projects"})
})


gsap.from('.info', 1, {x: -300, autoAlpha: 0})

const projects = document.querySelectorAll('.project');

gsap.from('.projects', 2, {scrollTrigger: '.projects', autoAlpha: 0});
gsap.from(projects[0], 1, {scrollTrigger: projects[0], x: -500, autoAlpha: 0});
gsap.from(projects[1], 1, {scrollTrigger: projects[1], x: 500, autoAlpha: 0});

gsap.from('.skills', 1, {scrollTrigger: '.skills', x: -500, autoAlpha: 0})

gsap.from('.about', 1, {scrollTrigger: '.about', x: 500, autoAlpha: 0})