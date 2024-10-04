
import { ListItem } from "./ListItem";
import "./style.css"
import { StorageHandler } from "./StorageHandler";
import  { ItemCreator } from "./ItemCreator"
import { Project } from "./Project";
import { projectGui } from "./projectGUI";
import { GUI } from "./GUI";

localStorage.clear()
GUI.init()

GUI.renderAllTodos("default")
GUI.renderAllTodos("default")
GUI.renderAllTodos("default")
GUI.renderAllTodos("default")
GUI.renderAllTodos("default")