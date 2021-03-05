import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
export default function Button() {
  return (
    <Link to="/request">
      <button type="button" className="header__button">
        Подать заявку
      </button>
    </Link>
  )
}
