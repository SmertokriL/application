import React from 'react'
import logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import {themeReducer} from "../../store/reducer";
import {changeTheme} from "../../store/actions/actions";
import thunk from 'redux-thunk'
import './ThemeButton.css'


export default function ThemeButton() {

    const store = createStore(themeReducer, applyMiddleware(thunk, logger))

    store.subscribe(() => {
            const state = store.getState()
            document.body.className = (state.value)

        }
    )

    store.dispatch({type:'INIT'})

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
