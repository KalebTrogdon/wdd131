export async function loadProjects(containerId, limit = null) {
    const container = document.getElementById(containerId);
    const response = await fetch("projects.json");
    const data = await response.json();
  
    const projects = limit ? data.slice(0, limit) : data;
  
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      container.appendChild(card);
    });
  }
  