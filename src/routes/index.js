/*********** Routes for applications **************/
import React from 'react';

import Home from '../components/home';
import NotFound from '../components/notfound';
import LoginForm from '../components/LoginForm';
import { BrowserRouter as Router,Route,Switch  } from "react-router-dom";

const Routers = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route  path="/" component={LoginForm} />
            <Route path="*" component={NotFound} />
      </Switch>
      </Router>

    );
};

export default Routers;