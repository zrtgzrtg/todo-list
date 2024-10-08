
import { FormExtractor } from "./formExtractor"
import { GUI } from "./GUI"
import { Project } from "./Project"
import { ProjectCreator } from "./ProjectCreator"
import { projectGui } from "./projectGUI"

class mainListeners {
    static currentProject = "default"

    static addProjectListener() {
        const projectContainer = document.querySelector(".project-container")
        const currentProjectDiv = document.querySelector(".current-project")

        projectContainer.addEventListener("click", event=> {
            if(event.target.tagName !== "BUTTON") {
                return
            }
            mainListeners.renderProjectByClick(event.target.textContent)
            currentProjectDiv.textContent = `${event.target.id}`


            
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
    static addListenerForms() {
        const container = document.querySelector(".container")

        container.addEventListener("submit", event=> {
            event.preventDefault()
            const formData = new FormData(event.target)

            if(event.target.id === "todo-form") {
                //function for todo-form
                FormExtractor.genTodoFromForm(formData,this.currentProject)
                mainListeners.renderProjectByClick(this.currentProject)
            } else if(event.target.id === "project-form") {
                //function for project form
                FormExtractor.genProjectFromForm(formData)
                setTimeout(() => {
                    GUI.renderAllProjects()
                }, 100)
            }
            
            })
    }
    static addRemoveProjectListener() {
        const removeProjectButton = document.querySelector(".delete-project")

        removeProjectButton.addEventListener("click", event => {
            console.log("outer run")
            if(event.target.classList.contains("delete-project")){
                if(this.currentProject === "default") {
                    console.log("Cant delete default!!!")
                    return
                }
                console.log("run")
                ProjectCreator.deleteProject(this.currentProject)
                GUI.renderAllProjects()
                GUI.clickDefaultProject()
            }
        })

    }
    
}
export {mainListeners}