

import { newProjectBtnForm } from "./htmlForNewButton"
import { newTodoBtnForm } from "./htmlForNewButton"
import { StorageHandler } from "./StorageHandler"
import { projectGui } from "./projectGUI"
import { ListItem } from "./ListItem"
import { Project } from "./Project"
class GUI {
    static currentProject 


    static init() {
    const exampleItem = new ListItem("title", "this is a description",new Date(),"high","these are some notes")
    const exampleItem2 = new ListItem("title2", "this is a description",new Date(),"high","these are some notes")
    
    let defaultProject = new Project("default",exampleItem)
    let currentProject2 = new Project("default2",exampleItem2)

    StorageHandler.setProject(defaultProject)
    StorageHandler.setProject(currentProject2)
    projectGui.displayProject()
    GUI.newButtonListeners()
    this.currentProject = defaultProject
    }

    static newButtonListeners() {
        const newProjBtn = document.querySelector("#new-project")
        const newTodoBtn = document.querySelector("#new-todo")

        const ProjFormContainer = document.querySelector(".modal1-body")
        const TodoFormContainer = document.querySelector(".modal2-body")


        const modal1 = document.querySelector(".modal1")
        const modal2 = document.querySelector(".modal2")
        const modalArr = [modal1, modal2]

        const overlay = document.querySelector("#overlay")

        const closeButtons = Array.from(document.querySelectorAll(".close-button"))


        GUI.addEventListenerNewBtn(newProjBtn,ProjFormContainer,newProjectBtnForm, modal1,overlay)
        GUI.addEventListenerNewBtn(newTodoBtn,TodoFormContainer,newTodoBtnForm, modal2,overlay)
        GUI.addCloseButtonForm(closeButtons,modalArr,overlay)
        GUI.addSubmitButtonForm(modalArr,closeButtons)
        
    }
    static addEventListenerNewBtn(newBtn, newBtnContainer, htmlForm, modal, overlay) {
        newBtn.addEventListener("click", event => {
            newBtnContainer.innerHTML = htmlForm
            modal.classList.add("active")
            overlay.classList.add("active")
        })
    }
    static addCloseButtonForm(closeButtonArr, modalArr, overlay) {
        closeButtonArr.forEach(element => {
            element.addEventListener("click", elem => {
                modalArr.forEach(elem => elem.classList.remove("active"))
                overlay.classList.remove("active")
            })
        });
    }
    static addSubmitButtonForm(modalArr,closeButtonArr) {
        modalArr.forEach(item => {
            item.addEventListener("submit", event=> {
                event.preventDefault()
                const formData = new FormData(event.target)
                closeButtonArr.forEach(element => {
                    element.click()
                });
                console.log(formData) 
                //placeholder for calling the storage function
            })
        })
    }
    static render1Todo(listItem) {
        const todoContainer = document.querySelector(".todo-container")
        const remButton = document.createElement("button")
        const remButtonContainer = document.createElement("div")
        remButtonContainer.setAttribute("class", "rem-button-container")
        remButton.setAttribute("class", "rem-button")
        remButton.textContent = "Delete Todo"
        remButtonContainer.appendChild(remButton)
        const itemContainer = document.createElement("div")
        itemContainer.setAttribute("class","todo-item")

        listItem.getPropArray().forEach(property => {
            const propertyDiv = document.createElement("div")
            const [key,value] = Object.entries(property)[0]
            if(key === "dueDate") {
                propertyDiv.textContent = "Due: " + value

            } else if(key === "priority") {
                propertyDiv.textContent = "Priority: " + value
            } else {
            propertyDiv.textContent = value
            }
            propertyDiv.setAttribute("class",key)
            itemContainer.appendChild(propertyDiv)
        })
        itemContainer.appendChild(remButtonContainer)
        //need to apply event Listener to remButton
        todoContainer.appendChild(itemContainer)
    }
    static renderAllTodos(currentProjectTitle) {
        const currentProject = StorageHandler.getProjectByName(currentProjectTitle)
        console.log(currentProject)
        const listItemsArr = currentProject.getListItems()
        listItemsArr.forEach(item=>{
            this.render1Todo(item)
        })
        
    }
}

export {GUI}