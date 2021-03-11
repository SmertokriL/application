import FirstPageComponent from './pages/FirstPageComponent/FirstPageComponent'
import SecondPageComponent from './pages/SecondPageComponent/SecondPageComponent'
import ThemeButton from "./ThemeButtonComponent/ThemeButton";
import CompetitionResults from "./pages/CompetitionResults/CompetitionResults"
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeButton/>
        <Route path="/" exact component={FirstPageComponent} />
        <Route path="/request" exact component={SecondPageComponent}  />
        <Route path="/competitionResults" exact component={CompetitionResults}  />
      </div>
    </Router>
  )
}

export default App
