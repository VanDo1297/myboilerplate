import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login/login';
function App (){

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
            </Switch>
        </Router>
    )
}

export default App