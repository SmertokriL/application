import { CHANGE_EVENTS } from '../types'
export function eventSelect(state = 'false' , action) {
    switch (action.type) {
        case CHANGE_EVENTS :
            return action.payload

        default:
            return state;
    }
}