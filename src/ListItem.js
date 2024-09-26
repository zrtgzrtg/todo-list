
class ListItem {
    constructor(title,description,dueDate,priority,notes) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.propArry = [this.title,this.description,this.dueDate,this.priority,this.notes]
    }

}
 export { ListItem }