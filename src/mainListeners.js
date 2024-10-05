
import { GUI } from "./GUI"
import { Project } from "./Project"
import { ProjectCreator } from "./ProjectCreator"

class mainListeners {
    static currentProject = "default"

    static addProjectListener() {
        const projectContainer = document.querySelector(".project-container")

        projectContainer.addEventListener("click", event=> {
            if(event.target.tagName !== "BUTTON") {
                return
            }
            mainListeners.renderProjectByClick(event.target.textContent)
            this.currentProject = event.target.id
        })
    }
    static renderProjectByClick(projectName) {
        GUI.removeAllTodosVisually()
        GUI.renderAllTodos(projectName)
    }
    static addDeleteTodoListener() {
        const todoContainer = document.querySelector(".todo-container")

        todoContainer.addEventListener("click", event=> {
            if(event.target.tagName!=="BUTTON") {
                return
            }
            console.log(event.target.id)
            ProjectCreator.deleteListItemFromProject(this.currentProject,event.target.id)
            this.renderProjectByClick(this.currentProject)
        })
    }
}
export {mainListeners}