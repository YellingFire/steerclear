import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckForReview from './forms/CheckForReview';
import Jumbotron from "./Jumbotron/Jumbotron"
// import Nav from "./Nav/Nav"
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class CheckReview extends Component {

  render() {
    return (
      <div className="Check-Review">
        <Jumbotron />
        <CheckForReview />
      </div>
    );
  }
}

export default CheckReview;