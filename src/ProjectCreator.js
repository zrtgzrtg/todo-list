
import { GUI } from "./GUI";
import { Project } from "./Project";
import { StorageHandler } from "./StorageHandler";

class ProjectCreator {


    static createProjectInStorage(name,...listItems) {
        const project = new Project(name)
        listItems.forEach(item=>project.addItem(item))
        StorageHandler.setProject(project)
    }
    static deleteListItemFromProject(projectName,listItemName) {
        const project = StorageHandler.getProjectByName(projectName)
        const listItemIndex = project.items.findIndex(listItem=>listItem.title === listItemName)
        project.items.splice(listItemIndex,1)
        StorageHandler.delProject(projectName)
        StorageHandler.setProject(project)
    }
    static deleteProject(projectName) {
        StorageHandler.delProject(projectName)
        
    }
    static isProjectPresent(projectName) {
        return StorageHandler.projectIsPresent(projectName)
    }
}
export {ProjectCreator}