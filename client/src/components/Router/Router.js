import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TitlePage from "../../pages/TitlePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import Spec from '../Auth/Spec';
import ProtectedRoute from './ProtectedRoute';

class Router extends Component {
    

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ TitlePage } />
                    <ProtectedRoute exact path="/review" redirectUrl="/login" component={ Spec } />
                    <Route exact path="/login" component={ LoginPage } />
                    <Route exact path="/logout" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/user" target="_self" />
                </Switch>    
            </BrowserRouter>
        );
    }
}

export default Router;