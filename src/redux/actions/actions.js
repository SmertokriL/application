import {CHANGE_THEME} from "../types";
import axios from 'axios';
import { apiURL } from '../../utils/constants'

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }

}

