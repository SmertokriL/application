import FirstPageComponent from './components/pages/FirstPageComponent/FirstPageComponent'
import SecondPageComponent from './components/pages/SecondPageComponent/SecondPageComponent'
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
        <Route path="/" exact component={FirstPageComponent} />
        <Route path="/request" exact component={SecondPageComponent} />
      </div>
    </Router>
  )
}

export default App
