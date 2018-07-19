import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import "./pages.css";
import LoginButton from '../components/buttons/LoginButton';
import HomeownerButton from '../components/buttons/HomeownerButton';
import Footer from "../components/Nav/Footer"
import RegisterButton from "../components/buttons/RegisterButton";
import Row from "../components/Grid/Row";
import Container from "../components/Grid/Container";

class TitlePage extends Component {
  render() {
    return    (
          <Container>
            <Row>
                <Jumbotron />
            </Row>
            <div className="center-component">
              <h1>A homeowner review site</h1>
              <h3>Fighting back one review at a time!</h3>
            </div>
            <Row>
              <div className="col-1"></div>
              <div className="col-10 body-content">
                <h5>Here at Steer Clear, we understand the service industry, we understand that for years we have been beat up, bruised and broken by a one sided review system. Homeowners and customers can go on to endless "Big data" sites and trash your business, destroy your reputation with impunity.</h5>
                <h3 className="h3emph">That ends today!</h3>
                <h5>With Steer Clear, you can take the power back while simultaneously avoid the pitfalls of doing business with a homeowner that you may have Steered Clear of. You can:
                  <ul className="listPadding">
                    <li>Write a review of a home/homeowner in order to warn other contractors</li>
                    <li>Check for a review on a home/homeowner you are in the process of placing a bid</li>
                  </ul></h5>
                  <Row>
                    <div className="col-2"></div>
                    <div className="col-4 center-component">
                      <h3>Contractor Login or Sign Up</h3> 
                        <Link to="/login">                 
                          <LoginButton />
                        </Link>
                        <Link to="/register">
                          <RegisterButton />
                        </Link>                 
                    </div>
                    <div className="col-4 center-component">
                      <h3>Homeowners Start Here</h3>
                      <Link to="/Homeowner">
                        <HomeownerButton />
                      </Link>  
                    </div>
                    <div className="col-2"></div>              
                  </Row>
              </div>
              <div className="col-1"></div>        
            </Row>
            <Footer />       
          </Container>      
        );
    }
}
export default TitlePage;