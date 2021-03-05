import {combineReducers} from "redux";
import {themeReducer} from "./themeReducer";
import {CHANGE_THEME} from "../types";
import { persons } from "./persons"
import  { eventSelect } from "./eventSelect";
    import { groupSelect } from "./groupSelect";

export const rootReducer = combineReducers({
    theme: themeReducer,
    persons: persons,
    eventSelect: eventSelect,
    groupSelect: groupSelect

})




