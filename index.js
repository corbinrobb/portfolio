// gsap.registerPlugin(ScrollTrigger);

// const [
//   homeLink,
//   projectsLink,
//   aboutLink,
//   contactLink,
// ] = document.querySelectorAll("nav a");

// const downArrow = document.querySelector(".down");

// homeLink.addEventListener("click", () => {
//   gsap.to(window, { duration: 1, scrollTo: 0 });
// });

// projectsLink.addEventListener("click", () => {
//   gsap.to(window, { duration: 1, scrollTo: { y: ".projects", offsetY: 70 } });
// });

// aboutLink.addEventListener("click", () => {
//   gsap.to(window, { duration: 1, scrollTo: { y: ".skills", offsetY: 40 } });
// });

// contactLink.addEventListener("click", () => {
//   gsap.to(window, { duration: 1, scrollTo: { y: ".contact", offsetY: 40 } });
// });

// downArrow.addEventListener("click", () => {
//   gsap.to(window, { duration: 1, scrollTo: { y: ".projects", offsetY: 70 } });
// });

// gsap.from(".info", 1, { x: -300, autoAlpha: 0 });
// gsap.from(downArrow, 1, { y: -300, autoAlpha: 0 });

// const projects = document.querySelectorAll(".project");

// gsap.from(projects[0], 1, {
//   scrollTrigger: {
//     trigger: projects[0],
//     start: "top center",
//   },
//   x: -500,
//   autoAlpha: 0,
// });
// gsap.from(projects[1], 1, {
//   scrollTrigger: {
//     trigger: projects[1],
//     start: "top center",
//   },
//   x: 500,
//   autoAlpha: 0,
// });
// gsap.from(projects[2], 1, {
//   scrollTrigger: {
//     trigger: projects[2],
//     start: "top center",
//   },
//   x: -500,
//   autoAlpha: 0,
// });

// gsap.from(".skills", 1, {
//   scrollTrigger: { trigger: ".skills", start: "top center" },
//   x: 500,
//   autoAlpha: 0,
// });

// gsap.from(".about", 1, {
//   scrollTrigger: { trigger: ".about", start: "top bottom" },
//   x: -500,
//   autoAlpha: 0,
// });
