import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import {useSelector} from "react-redux";

import FirstPageComponent from './FirstPageComponent/FirstPageComponent'
import SecondPageComponent from './SecondPageComponent/SecondPageComponent'
import ThemeButton from "./ThemeButtonComponent/ThemeButton";
import CompetitionResults from "./CompetitionResults/CompetitionResults"

const routes = {
  root: "/",
  request: "/request",
  competitionResults: "/competitionResults",
}

function App() {
  const themeValue = useSelector(({ theme }) => theme);

  useEffect(() => {
    document.body.className = themeValue
  }, [themeValue])

  return (
    <Router>
      <div className="App">
        <ThemeButton/>
        <Route path={routes.root} exact component={FirstPageComponent} />
        <Route path={routes.request} exact component={SecondPageComponent}  />
        <Route path={routes.competitionResults} exact component={CompetitionResults}  />
      </div>
    </Router>
  )
}

export default App
