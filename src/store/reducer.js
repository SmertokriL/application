import {CHANGE_THEME} from "./types";
const initialThemeState = {
    value: 'light'
}

export function themeReducer(state = initialThemeState, action) {
    switch(action.type) {
        case CHANGE_THEME: return {...state, value: action.payload};
        default: return state;
    }
}