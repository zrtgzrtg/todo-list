import { ListItem } from "./ListItem"
import { Project } from "./Project"
import { ProjectCreator } from "./ProjectCreator"
import { StorageHandler } from "./StorageHandler"


class FormExtractor {


    static genProjectFromForm(formdata) {
        ProjectCreator.createProjectInStorage(formdata.get("name"))
    }
    static genTodoFromForm(formdata,currentProjectName) {
        const listItem = new ListItem(formdata.get("title"),formdata.get("description"),formdata.get("dueDate"),formdata.get("priority"),formdata.get("notes"))
        const oldProject = StorageHandler.getProjectByName(currentProjectName)

        oldProject.addItem(listItem)
        
        StorageHandler.delProject(currentProjectName)

        ProjectCreator.createProjectInStorage(oldProject.name,...oldProject.getListItems())


    }
}
export {FormExtractor}