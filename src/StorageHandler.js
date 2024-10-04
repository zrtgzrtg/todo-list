
import { ListItem } from "./ListItem"
import { Project } from "./Project"

class StorageHandler {

    static setProject(project) {
        if(this.projectIsPresent(project.name)) {
            throw Error("Item already Present. Try different title")
        }
        let projectJson = ItemHandler.turnItemToJson(project)
        localStorage.setItem(project.name,projectJson)
    }
    static delProject(projectName) {
        localStorage.removeItem(projectName)
    }
    static getProjectByName(projectName) {
        if(this.projectIsPresent(projectName)) {
            let projectJson = localStorage.getItem(projectName)
            let projectObject =  ItemHandler.getItemFromJson(projectJson)
            
            const project = this.getProjectFromProjectObject(projectObject)
            
            return project
        }
    }
    static projectIsPresent(projectName) {
        if(localStorage.getItem(projectName)===null) {
            return false
        }
        return true
    }
    static removeAll() {
        localStorage.clear()
    }
    
    static getAllProjects() { 
        let allProjectsArr = []
        for(let i = 0; i<localStorage.length;i++) {
            const key = localStorage.key(i)
            allProjectsArr.push(localStorage.getItem(key))
        }
        allProjectsArr = allProjectsArr.map(item => {
            let retItem = ItemHandler.getItemFromJson(item)
            return retItem
        })
        return allProjectsArr
    }
    static getProjectFromProjectObject(projectObject) {
        console.log(projectObject)
        console.log(projectObject.items[0])
        const listItem = new ListItem(projectObject.items[0].title,projectObject.items[0].description,projectObject.items[0].dueDate,projectObject.items[0].priority,projectObject.items[0].notes)
        console.log(listItem)
        const project = new Project(projectObject.name,listItem)
        return project
    }
    

   
}
class ItemHandler {

    static getItemFromJson(itemJson) {
        const item = JSON.parse(itemJson)
        return item
    }
    static turnItemToJson(item) {
        const itemJson = JSON.stringify(item)
        return itemJson
    }
}
export {StorageHandler}