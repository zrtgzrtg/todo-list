

import { newProjectBtnForm } from "./htmlForNewButton"
import { newTodoBtnForm } from "./htmlForNewButton"
class GUI {


    static newButtonListeners() {
        const newProjBtn = document.querySelector("#new-project")
        const newTodoBtn = document.querySelector("#new-todo")

        const ProjFormContainer = document.querySelector(".project-form-wrapper")
        const TodoFormContainer = document.querySelector(".todo-form-wrapper")

        GUI.addEventListenerNewBtn(newProjBtn,ProjFormContainer,newProjectBtnForm)
        GUI.addEventListenerNewBtn(newTodoBtn,TodoFormContainer,newTodoBtnForm)
        
    }
    static addEventListenerNewBtn(newBtn, newBtnContainer, htmlForm) {
        console.log(newBtn)
        console.log(newBtnContainer)
        newBtn.addEventListener("click", event => {
            console.log("a")
            newBtnContainer.innerHTML = htmlForm
            console.log(newBtnContainer)
        })
    }

}

export {GUI}