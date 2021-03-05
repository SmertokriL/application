import React, {useEffect, useState} from 'react'
import './CompetitionResults.css'
import {connect, useDispatch, useSelector} from 'react-redux'
import {personsFetchData} from "../../../redux/actions/persons";
import {springFirst, springSecond, summerFirst, summerSecond} from "../../../utils/constants";
import './CompetitionResults.css'

// const [result, setResult] = useState([]);

// 1. Почитать о том, как доставать данные из стора (useSelector(callback, equalityFn?))
// 2. Вынести все типы в константы
// 3. Как диспатчить экшены в функциональных компонентах? (хук useDispatch) Как в классовых компонентах (пропсы в mapDispatchToProps)

export default function CompetitionResults() {
    const dispatch = useDispatch()
    const persons = useSelector(({ persons}) => persons)
    const eventState = useSelector(({ eventSelect }) => eventSelect)
    const groupState = useSelector(({ groupSelect }) => groupSelect)



        return (
            <div className='resultPage'>
                <ol className= 'list'>
                    {persons.map((person, index) => (
                        <li  key = {index}>
                            <div className= 'container'>
                            <div className= 'name'>{person.name}</div>
                            <div className= 'score1'>{person.scores[0]}</div>
                            <div className= 'score2'>{person.scores[1]}</div>
                            <div className= 'score3'>{person.scores[2]}</div>
                             <div className= 'finalScore3'>{person.final_score}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }

