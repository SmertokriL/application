import React from 'react'
import logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import {themeReducer} from "../../../redux/reducers/themeReducer"
import {changeTheme} from "../../../redux/actions/actions";
import thunk from 'redux-thunk'
import './ThemeButton.css'
import { connect } from 'react-redux'
import { store } from '../../../index'

 export default function ThemeButton() {

    const handleClick = (click) => {
        const newTheme = document.body.classList.contains('light')
            ? 'dark' : 'light'
        store.dispatch(changeTheme(newTheme))
    }


    return (<div className="button-container">
            <button id='btn' onClick={handleClick}>Сменить тему</button>
        </div>


    )
}


