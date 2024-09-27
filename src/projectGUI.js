
import { Project } from "./Project";
import { StorageHandler } from "./StorageHandler";

class projectGui {
    static allProjectArr = StorageHandler.getAllProjects()
    
    static displayProject() {
        const containerProjects = document.querySelector(".projects")
        this.allProjectArr.forEach(project => {
            const projectDiv = document.createElement("div")
            projectDiv.textContent = project.name
            containerProjects.appendChild(projectDiv)
        });
    }
}
export {projectGui}