
import { Project } from "./Project";
import { StorageHandler } from "./StorageHandler";

class projectGui {
    static allProjectArr = StorageHandler.getAllProjects()
    
    static displayProject() {
        const containerProjects = document.querySelector(".project-container")
        this.allProjectArr.forEach(project => {
            const projectDiv = document.createElement("button")
            projectDiv.textContent = project.name
            projectDiv.setAttribute("id", project.name)
            containerProjects.appendChild(projectDiv)
        });
    }
    static addListenerProject() {

    }
}
export {projectGui}