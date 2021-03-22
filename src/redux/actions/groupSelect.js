import { CHANGE_GROUP } from '../types'
export default function groupSelect(group) {
    return {
        type: CHANGE_GROUP,
        payload: group
    }
}