

import { newProjectBtnForm } from "./htmlForNewButton"
import { newTodoBtnForm } from "./htmlForNewButton"
class GUI {


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
        
    }
    static addEventListenerNewBtn(newBtn, newBtnContainer, htmlForm, modal, overlay) {
        newBtn.addEventListener("click", event => {
            console.log("a")
            newBtnContainer.innerHTML = htmlForm
            modal.classList.add("active")
            overlay.classList.add("active")
            console.log(newBtnContainer)
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

}

export {GUI}