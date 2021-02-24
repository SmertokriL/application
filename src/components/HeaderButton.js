import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import Clear from './Clear'
export default function HeaderButton() {
  return (
    <Router>
      <Link to="/request">
        <button type="button" className="header__button">
          Подать заявку
        </button>
      </Link>

      <Switch>
        <Route path="/request">
          <Request />
        </Route>
      </Switch>
    </Router>
  )
}

function Request() {
  return <Clear />
}
