
import { ListItem } from "./ListItem";
import { ItemCreator } from "./ItemCreator";
import { StorageHandler } from "./StorageHandler";

class Project {
    constructor(name,...listItems) {
        this.name = name
        this.items = []
        this.nameSet = new Set()
        listItems.forEach(item => this.addItem(item))
    }
    addItem(listItem){
        if(this.itemPresent(listItem.title)) {
             console.log(`This title already Exists in ${this.name}`)
             return
        }
        this.items.push(listItem)
        this.nameSet.add(listItem.name)
    }
    removeItem(listItemTitle) {
        if(!this.itemPresent(listItemTitle)) {
            console.log(`No such item in ${this.name}`)
            return
        }
        const itemIndex = this.items().findIndex(item => item.title===listItemTitle)
        this.items.splice(itemIndex,1)
        this.nameSet.delete(listItemTitle)
    }
    itemPresent(listItemTitle) {
        if(this.nameSet.has(listItemTitle)) {
            return true
        } else {
            return false
        }
    }

}
export {Project}