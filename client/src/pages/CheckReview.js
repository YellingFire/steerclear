import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckForReview from './forms/CheckForReview';
import Jumbotron from "./Jumbotron/Jumbotron"
import Nav from "./Nav/Nav"

class CheckReview extends Component {
  render() {
    return (
      <div className="Check-Review">

        {/* <Nav /> */}
        <Jumbotron />
        <CheckForReview />
      </div>
    );
  }
}

export default CheckReview;