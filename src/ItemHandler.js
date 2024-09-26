
import { ListItem } from "./ListItem";

class ItemHandler {

    static getItemFromJson(itemJson) {
        const item = JSON.parse(itemJson)
        return item
    }
    static turnItemToJson(item) {
        const itemJson = JSON.stringify(item)
        return item
    }
}
export {ItemHandler}
