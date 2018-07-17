import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import CheckForReview from './forms/CheckForReview';
// import Jumbotron from "./Jumbotron/Jumbotron";
// import Nav from "./Nav/Nav";
// import HomeownerButton from "./buttons/HomeownerButton";
// import LoginButton from "./buttons/LoginButton";
import TitlePage from "../pages/TitlePage";
// import HomeownerCheckPage from "../pages/HomeownerCheckPage";
// import ContractorCheckPage from "../pages/ContractorCheckPage";
// import WriteReview from "./forms/WriteReview";
// import CreateReviewPage from "../pages/CreateReviewPage";


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <CreateReviewPage /> */}
        {/* <WriteReview /> */}
        {/* <ContractorCheckPage /> */}
        {/* <HomeownerCheckPage /> */}
        <TitlePage />
        {/* <Nav /> */}
        {/* <Jumbotron /> */}
        {/* <CheckForReview /> */}
        {/* <HomeownerButton /> */}
        {/* <LoginButton /> */}
      </div>
    );
  }
}

export default App;
