import React, {useState, useEffect} from 'react'
import { store } from '../../../index'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom'
import './CompetitionRegistrationBlock.css'
import CompetitionResults from "../CompetitionResults/CompetitionResults";
import {springFirst, springSecond, summerFirst, summerSecond} from "../../../utils/constants";
import {fetchParticipants} from "../../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {personsFetchData} from "../../../redux/actions/persons";
import eventSelect from "../../../redux/actions/eventSelect";
import groupSelect from "../../../redux/actions/groupSelect"



function CompetitionRegistrationBlock() {
    let history = useHistory();
    const eventState = useSelector(({ eventSelect }) => eventSelect)
    const groupState = useSelector(({ groupSelect }) => groupSelect)
    const dispatch = useDispatch()


    if(eventState === "spring2012") {
        if(groupState === "firstGroup") {
            dispatch(personsFetchData(springFirst))
        } else if (groupState === "secondGroup") {
            dispatch(personsFetchData(springSecond))
        }
    } else if (eventState === "summer2020")  {
        if(groupState === "firstGroup") {
            dispatch(personsFetchData(summerFirst))
        } else if (groupState === "secondGroup") {
            dispatch(personsFetchData(summerSecond))
        }
    }


   function handleClick() {
        if (eventState != 'false' && groupState != 'false') {
        history.push("/competitionResults") }
        else {
            alert('Выберите событие и группу!')
        }

   }
   function eventChange(e) {
        store.dispatch(eventSelect(e.target.value))
   }

    function groupChange(e) {
        store.dispatch(groupSelect(e.target.value))
    }




    return (
        <footer className="footer">
            <div className="footer__title">
                <h1>Итоги конкурса</h1>
            </div>

            <div className="footer-input-container">
                <select className="eventSelect" value={eventState} onChange={eventChange}>
                    <option value="false" disabled>Событие</option>
                    <option value="spring2012">Весна 2012</option>
                    <option value="summer2020">Лето 2020</option>
                </select>

                <select className="groupSelect" value={groupState} onChange={groupChange}>
                    <option value="false" disabled>Группа</option>
                    <option value="firstGroup">Первая группа</option>
                    <option value="secondGroup">Вторая группа</option>
                </select>

            </div>
                <button className="footer__button" onClick = {handleClick}
                >Открыть
                </button>


        </footer>
    )
}

export default CompetitionRegistrationBlock
