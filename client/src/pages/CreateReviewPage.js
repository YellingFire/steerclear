import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Nav from "../components/Nav/Nav"
import "./pages.css";
import Footer from "../components/Nav/Footer"
import WriteReview from '../components/forms/WriteReview';
import Row from "../components/Grid/Row";
import Container from "../components/Grid/Container";

class CreateReviewPage extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Jumbotron />
            </Row>
            <div className="center-component">
            <h1>A homeowner review site</h1>
            </div>
            <Row>
                <div className="col-1"></div>
                <div className="col-10 body-content">
                    <h5>Steer Clear is a review site that is used by contractors and service industry providers. It is a way for contractors to alert other contractors and service industry providers about experiences, good and bad with homeowners or clients on a particular project.</h5>
                </div>
                <div className="col-1"></div>
            </Row>    
            <Row>
                {/* <div className="col-1"></div> */}
                <div className="col- center-component">
                    <WriteReview />
                </div>
                {/* <div className="col-1"></div>               */}
            </Row>       
            <Footer />
            <Nav />       
      </Container>
);

  }
}  

export default CreateReviewPage;