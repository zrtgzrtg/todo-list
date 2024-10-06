
import { ListItem } from "./ListItem";
import "./style.css"
import { StorageHandler } from "./StorageHandler";
import  { ItemCreator } from "./ItemCreator"
import { Project } from "./Project";
import { projectGui } from "./projectGUI";
import { GUI } from "./GUI";
import { mainListeners } from "./mainListeners";

localStorage.clear()
GUI.init()
mainListeners.addProjectListener()
mainListeners.addDeleteTodoListener()
GUI.clickDefaultProject()
mainListeners.addListenerForms()

