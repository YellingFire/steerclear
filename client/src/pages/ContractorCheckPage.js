import React, { Component } from 'react';
import CheckForReview from '../components/forms/CheckForReview';
import Jumbotron from "../components/Jumbotron/Jumbotron";
import "./pages.css";
import Footer from "../components/Nav/Footer";
import API from "../utils/API";
import Col from "../components/Grid/Col";
import Row from "../components/Grid/Row";
import List from "../components/List/List.js";
import ListItem from "../components/List/ListItem";
import Container from "../components/Grid/Container";

class ContractorCheckPage extends Component {
      state = {
        reviews: [],
        loading: false
    };


    componentWillUnmount() {
      clearTimeout(this.waitToDismissLoader); // Garbage collection
    }

    searchReviews = (form, event) => {
      event.preventDefault();
      this.setState({loading: true});
      API.searchByAddress(form) 
        .then(res => {
          console.log(res.data)
          this.setState( {reviews: res.data}, () => {
            this.waitToDismissLoader = setTimeout(() => {
              this.setState({ loading: false });
            }, 1000);
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({ loading: false }, () => {
            this.waitToDismissLoader = setTimeout(() => {
              this.setState({ loading: false });
            }, 1000);
          });
        });
    }

  render() {
    const {loading} = this.state;
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
            <h5>Steer Clear is a review site that is used by contractors and service industry providers. It is a way for contractors to warn other contractors and service industry providers about bad experiences with homeowners or clients on a particular project.</h5>
            <h5>Using the form below you can check if you or your home have been reviewed. Please keep in mind, these reviews are only used by other contractors or service providers. These reviews are not posted by Steer Clear to any social media sites. Reviews can only be removed by the posting party. Steer Clear does not accept rebuttals of any kind.</h5>
              <Row>
                {/* <div className="col-1"></div> */}
                <div className="col- center-component">
                    <CheckForReview onSubmit={this.searchReviews}/>
                </div>                
                {/* <div className="col-1"></div>               */}
              </Row>
              <Row>
                <Col size="md">
                      <h1 className="center-component">Reviews for this Address:</h1>
                    {this.state.reviews.length > 0 && !loading && 
                      <List>

                        {this.state.reviews.map(review => (
                          <ListItem key={review._id}>
                            <Row><em>{review.street}</em></Row>
                            <Row><em>{review.city} {review.state}</em></Row>  
                            <Row><em>{review.review}</em></Row>                    
                          </ListItem>
                        ))}
                      </List>
                    }
                    {!this.state.reviews.length && !loading &&
                      <h3>No Results to Display</h3>
                    }
                    {loading &&
                      <i className="fas fa-spinner fa-spin"></i>
                    }
                </Col>
              </Row>
              {/* <div className="row">
                <div className="col- center-component">
                    <WriteReview />
                </div>
              </div> */}
          </div>
          {/* <div className="col-1"></div>         */}
        </Row>
        <Footer />       
      </Container>
    );
  }
}
export default ContractorCheckPage;