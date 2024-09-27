
import { ListItem } from "./ListItem";
import { StorageHandler } from "./StorageHandler";

class ItemCreator {
    titleSet = new Set()
    static createItem(title,description,dueDate,priority,notes) {
        let item = new ListItem(title,description,dueDate,priority,notes)
        StorageHandler.setItem(item)
    }
}
export {ItemCreator}