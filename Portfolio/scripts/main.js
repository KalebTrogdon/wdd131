import { loadProjects } from './projectModule.js';

document.addEventListener("DOMContentLoaded", () => {
  setGreeting();
  loadProjects("project-preview", 3); // load 3 featured projects
});

function setGreeting() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "Hi, I'm Kaleb 👋";

  if (hour < 12) message = "Good morning! I'm Kaleb ☀️";
  else if (hour < 18) message = "Good afternoon! I'm Kaleb ☕";
  else message = "Good evening! I'm Kaleb 🌙";

  greeting.textContent = message;
}
