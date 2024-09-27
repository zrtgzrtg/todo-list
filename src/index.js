
import { ListItem } from "./ListItem";
import "./style.css"
import { StorageHandler } from "./StorageHandler";
import  { ItemCreator } from "./ItemCreator"
import { Project } from "./Project";
import { projectGui } from "./projectGUI";

const exampleItem = new ListItem("title", "this is a description",new Date(),"high","these are some notes")
const exampleItem2 = new ListItem("title2", "this is a description",new Date(),"high","these are some notes")

let currentProject = new Project("default",exampleItem)
let currentProject2 = new Project("default2",exampleItem2)

localStorage.clear()
StorageHandler.setProject(currentProject)
StorageHandler.setProject(currentProject2)
projectGui.displayProject()

