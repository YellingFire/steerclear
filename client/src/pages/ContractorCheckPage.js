import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckForReview from '../components/forms/CheckForReview';
import Jumbotron from "../components/Jumbotron/Jumbotron";
// import Nav from "../components/Nav/Nav";
import "./pages.css";
import Footer from "../components/Nav/Footer";
import WriteReview from '../components/forms/WriteReview';

class ContractorCheckPage extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
            <Jumbotron />
        </div>
        <div className="center-component">
          <h1>A homeowner review site</h1>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 body-content">
            <h5>Steer Clear is a review site that is used by contractors and service industry providers. It is a way for contractors to warn other contractors and service industry providers about bad experiences with homeowners or clients on a particular project.</h5>
            <h5>Using the form below you can check if you or your home have been reviewed. Please keep in mind, these reviews are only used by other contractors or service providers. These reviews are not posted by Steer Clear to any social media sites. Reviews can only be removed by the posting party. Steer Clear does not accept rebuttals of any kind.</h5>
              <div className="row">
                {/* <div className="col-1"></div> */}
                <div className="col- center-component">
                    <CheckForReview />
                </div>                
                {/* <div className="col-1"></div>               */}
              </div>
              <div className="row">
                <div className="col- center-component">
                    <WriteReview />
                </div>
              </div>
          </div>
          {/* <div className="col-1"></div>         */}
        </div>
        <Footer />       
      </div>
    );
  }
}
export default ContractorCheckPage;