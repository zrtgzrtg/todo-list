
class ListItem {
    constructor(title,description,dueDate,priority,notes) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.propArray = this.fillPropArry()
        this.propObject = {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            notes: this.notes
        }
    }
    getPropArray() {
        return this.propArray
    }
    getPropObject(){
        return this.propObject
    }
    fillPropArry() {
        let propArrayTemp = []
        propArrayTemp[0] = {title: this.title}
        propArrayTemp[1] = {  description: this.description}
        propArrayTemp[2] = {dueDate: this.dueDate}
        propArrayTemp[3] = {priority: this.priority}
        propArrayTemp[4] = {notes: this.notes}
        return propArrayTemp
    }

}
 export { ListItem }