import { CHANGE_EVENTS } from '../types'
export default function eventSelect(events) {
    return {
        type: CHANGE_EVENTS,
        payload: events
    }
}