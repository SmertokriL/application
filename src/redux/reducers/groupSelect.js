import { CHANGE_GROUP } from '../types'
export function groupSelect(state = 'false' , action) {
    switch (action.type) {
        case CHANGE_GROUP :
            return action.payload

        default:
            return state;
    }
}