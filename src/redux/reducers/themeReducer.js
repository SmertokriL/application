import {CHANGE_THEME} from "../types";
const initialThemeState = 'light'

export function themeReducer(state = initialThemeState, action) {
    switch(action.type) {
        case CHANGE_THEME:
            return action.payload;
        default:
            return state;
    }
}


