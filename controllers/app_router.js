import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import App from './App'
import Forum from './Components/Forum'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact compenent={App} />
                <Route path="/Forum" component={Forum} />
            </Switch>
        </Router>
    )
}

export default AppRouter