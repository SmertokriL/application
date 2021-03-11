import React, {useState} from 'react'
import group from '../../../../server/group.json'
import axios from 'axios';
import {Link} from 'react-router-dom'
import './CompetitionRegistrationBlock.css'


function CompetitionRegistrationBlock() {
    const [books, setBooks] = useState(null)

    const apiURL = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data)
        console.log(response.data)
    }


    return (
        <footer className="footer">
            <div className="footer__title">
                <h1>Итоги конкурса</h1>
            </div>
            <div className="footer-input-container">
                <div>
                    <select className="event">
                        <option value="" disabled selected>Событие</option>
                        <option value="spring2012">Весна 2012</option>
                        <option value="summer2020">Лето 2020</option>
                    </select>
                </div>

                <div>
                    <select className="Group">
                        <option value="" disabled selected>Группа</option>
                        <option value="firstGroup">Первая группа</option>
                        <option value="secondGroup">Вторая группа</option>
                    </select>
                </div>
            </div>
            <Link to="/competitionResults">
                <button className="footer__button" onClick={fetchData}
                >Открыть
                </button>
            </Link>
        </footer>
    )
}

export default CompetitionRegistrationBlock
