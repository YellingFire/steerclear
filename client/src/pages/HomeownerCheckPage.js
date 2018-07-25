import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import CheckForReview from '../components/forms/CheckForReview';
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Modal from 'react-modal';
import "./pages.css";
import Footer from "../components/Nav/Footer";
import List from "../components/List/List.js";
import ListItem from "../components/List/ListItem";
import API from "../utils/API";
import Col from "../components/Grid/Col";
import Row from "../components/Grid/Row";
import StarRatingComponent from 'react-star-rating-component';
// import LogoutButton from "../components/buttons/LogoutButton";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'hidden'
  }
};


class HomeownerCheckPage extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      loading: false,
      modalIsOpen: false
      
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }   

    openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }


    componentWillUnmount() {
      clearTimeout(this.waitToDismissLoader); // Garbage collection
    }

    searchReviews = (form, event) => {
      event.preventDefault();
      this.openModal();
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

    // logout = () => {
    //   API.logout()
    //   .then(user => {
    //     console.log("logging out in homeownercheck.js: ", user);
    //     sessionStorage.clear();
    //     window.location.reload();

    //   })      
    // }


  render() {
    const {loading} = this.state;
    return (
      <div className="container">
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
            <h5>Using the form below you can check if you or your home have been reviewed. Please keep in mind, these reviews are only used by other contractors or service providers. These reviews are not posted by Steer Clear to any social media sites. Reviews can only be removed by the posting party. Steer Clear does not accept rebuttals of any kind.</h5>
              <Row>
                <div className="col-1"></div>
                <div className="col-10 center-component">
                    <CheckForReview onSubmit={this.searchReviews}/>
                </div>
                <div className="col-1">
                  {/* <button type="button" className="btn btn-outline-dark" onClick={this.logout}>Logout</button> */}
                </div>              
              </Row>
          </div>
          <div className="col-1"></div>        
        </Row>
        <Row>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            // onRequestClose={this.closeModal}
            style={customStyles}
          >
            <Col size="md">
                  <h1 className="center-component">Reviews for this Address:</h1>
                {this.state.reviews.length > 0 && !loading && 
                  <List>
                    {this.state.reviews.map(review => (
                      <ListItem key={review._id}>
                        <Row><em>{review.street}</em></Row>
                        <Row><em>{review.city} {review.state}</em></Row>  
                        <Row><em>{review.review}</em></Row> 
                        <Row><StarRatingComponent 
                                          name="rating" 
                                          starCount={5}
                                          value={review.rating}
                                          editing={false}
                                          renderStarIcon={(index, value) => {
                                              return (
                                              <span>
                                                  <i className={index <= value ? 'fas fa-angry' : 'far fa-angry'} />
                                              </span>
                                              );
                                          }}
                            /></Row>                         
                      </ListItem>
                    ))}
                    <button onClick={this.closeModal}>Close</button>
                  </List>
                }
                {!this.state.reviews.length && !loading &&
                  <h3>No Results to Display</h3> &&
                  <button onClick={this.closeModal}>Close</button>
                  
                }
                
            </Col>
            {loading &&
                  <i className="fas fa-spinner fa-spin spinner"></i>
                }
          </Modal>  
        </Row>
        <Footer />       
      </div>
    );
  }
}
export default HomeownerCheckPage;