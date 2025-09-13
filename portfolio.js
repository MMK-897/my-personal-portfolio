import { projects } from "./projects.js";

let projectHTML = "";

projects.forEach((project) => {
  projectHTML += ` 
    <div class="project-outer-container">

          <div class="tech-stack">
            <div class="project">
              <img class="project-image" src="${project.image}" alt="" />
            </div>
            <p class ="project-tech-stack">${project.tech}</p> 
          </div>
          <p class = "project-name">${project.name}</p>
        </div>
 
    `;
});

document.querySelector(".projects-container").innerHTML = projectHTML;
