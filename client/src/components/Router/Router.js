import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TitlePage from "../../pages/TitlePage";
import HomeownerCheckPage from "../../pages/HomeownerCheckPage";
import ContractorCheckPage from "../../pages/ContractorCheckPage";
import CreateReviewPage from "../../pages/CreateReviewPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ TitlePage } />
            <Route exact path="/Homeowner" component={ HomeownerCheckPage } />
            <Route exact path="/Contractor" component={ ContractorCheckPage } />
            <Route exact path="/Contractor/Review" component={ CreateReviewPage } />
            <Route exact path="/login" component={ LoginPage } />
            <Route exact path="/register" component={ RegisterPage } />
            <Route path="/user" target="_self" />
        </Switch>    
    </BrowserRouter>
);

export default Router;