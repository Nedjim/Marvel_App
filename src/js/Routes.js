import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GetCharacters from './components/GetCharacters'
import GetDetails from './components/GetDetails'
import Header from './components/header/Header'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={GetCharacters} />
          <Route path="/details/:id" component={GetDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
