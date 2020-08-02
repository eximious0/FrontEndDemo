import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import CustProfile from './CustProfile';
import Login from './Login';
import NoPageFound from './NoPageFound';

export default function MyRouter(){
    return <Router>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/custProfile/:custId" component={CustProfile}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/product">
                <Redirect to="/login"></Redirect>
            </Route>
            <Route path="/*" component={NoPageFound}></Route>
        </Switch>
    </Router>
}