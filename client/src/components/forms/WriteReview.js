import React from "react";
import "./forms.css";
import API from "../../utils/API";
import Row from "../Grid/Row";
import StarRatingComponent from 'react-star-rating-component';

class WriteReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            revAuthor: sessionStorage.getItem('userId'),
            street: "",
            city: "",
            state: "",
            zip: "",
            review: "",
            rating: "",
            date: "",
            cityOfOperation: "",
            typeContractor: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

    handleClearForm(event) {
        event.preventDefault();
        this.setState({
            street: "",
            city: "",
            state: "",
            zip: "",
            date: "",
            cityOfOperation: "",
            typeContractor: ""
        });
      };

    loadReviews = () => {
        API.getAll()
          .then(res =>
            this.setState()
        )
          .catch(err => console.log(err));
    }

    deleteReview = addressId => {
        API.deleteReview(addressId)
          .then(res => this.loadReviews())
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
    };

    validateInputs = () => {
        if (this.state.typeContractor === 'Choose Here') {
            console.log("errored on typeContractor");
            return false;
        }
        
        if (!this.state.zip.length) {
            console.log("errored on zip");
            return false;
        } 
        
        if (!this.state.street) {
            console.log("errored on street");
            return false;
        } 
        
        if (!this.state.city) {
            console.log("errored on city");
            return false;
        } 

        if (!this.state.state) {
            console.log("errored on state");
            return false;
        }

        if (!this.state.cityOfOperation) {
            console.log("errored on cityOfOperation");
            return false;
        }    
        if (!this.state.review) {
            console.log("errored on reiview");
            return false;
        }    

        return true;
    }

    handleReviewSubmit = event => {
        // const revAuthor = sessionStorage.getItem('userId');
        event.preventDefault();
        if (this.validateInputs()) {
            API.saveReview({
                revAuthor: sessionStorage.getItem('userId'),
                street: this.state.street,
                city: this.state.city,
                state: this.state.state, 
                zip: this.state.zip,
                review: this.state.review,
                rating: this.state.rating,
                cityOfOperation: this.state.cityOfOperation,
                typeContractor: this.state.typeContractor

            })
            this.handleClearForm(event);
        } 
        else {
            alert('Please ensure all fields have been completed.')
        }

    }

    render() {
        const { rating } = this.state.rating;

        return (
            <div className="display-container">
                <Row>
                    <div className="col- form-container">
                        <form className="address-form">                               
                                {/* Review Title */}
                            <Row>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <h5 className="form-title">Review Info</h5>
                                    <p className="form-title">This info will be used to identify the review. Any reviews with derogotory, bad language, inappropriate content will be flagged and removed. It is best practice and helpful to other contractors to stick to the facts.</p>
                                </div>
                                <div className="col-1"></div>
                            </Row>
                                {/* Review Info */}
                            <Row>
                                <div className="col- address-form">
                                            {/* Street */}
                                    <input className="street-address address-inputs" 
                                        onChange={this.handleInputChange}
                                        value={this.state.street}
                                        name="street"  
                                        placeholder="Street Address" 
                                        width="80%"/>
                                        {/* city */}
                                    <input className="address-inputs" 
                                        value={this.state.city}
                                        onChange={this.handleInputChange}  
                                        name="city"                                             
                                        placeholder="City"/>
                                        {/* state */}
                                    <input className="address-inputs" 
                                        value={this.state.state}
                                        onChange={this.handleInputChange} 
                                        name="state"  
                                        placeholder="State"/>
                                        {/* zip code */}
                                    <input className="address-inputs" 
                                        value={this.state.zip}
                                        onChange={this.handleInputChange}  
                                        name="zip"                                             
                                        placeholder="Zip Code" />  
                                        {/* review */}
                                    <div className="review">
                                        <textarea                                        
                                            value={this.state.review}
                                            onChange={this.handleInputChange}  
                                            name="review" 
                                            placeholder="Write Review" 
                                            rows="5" 
                                            cols="50" />
                                    </div>                                                                        
                                </div>                        
                            </Row>
                            {/* Rating */}
                            <Row>
                                <div className="address-form">
                                    <div className="col-4">
                                        <div className="rating-stars">
                                            <StarRatingComponent 
                                                name="rating" 
                                                starCount={5}
                                                value={rating}
                                                onStarClick={this.onStarClick.bind(this)}
                                                renderStarIcon={(index, value) => {
                                                    return (
                                                    <span>
                                                        <i className={index <= value ? 'fas fa-angry' : 'far fa-angry'} />
                                                    </span>
                                                    );
                                                }}
                                                />
                                        </div>                                
                                    </div>
                                    <div className="col-8"><h5 className="rating-explain">One face represents, "Proceed with Caution" Five faces represent, "Steer Clear"</h5>
                                    </div>                                
                                </div>                               
                            </Row>
                                    {/* Contractor Title */}
                            <Row>
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <h5 className="form-title">Contractor Info</h5>
                                    <p className="form-title">This info will be used to identify the review. We do not share contractor/service provider information with anyone.</p>
                                </div>
                                <div className="col-1"></div>
                            
                                    {/* Contractor Info */}
                            
                                <div className="col- contractor-info-form ">
                                    <input className="contractor-inputs"
                                        value={this.state.cityOfOperation} 
                                        onChange={this.handleInputChange}
                                        name="cityOfOperation"                                        
                                        placeholder="City of Operation" 
                                        width="100%"/>
                                    <select className="contractor-inputs" 
                                            name="typeContractor" 
                                            placeholder="Choose One"
                                            onChange={this.handleInputChange}
                                            selected={ this.state.typeContractor }>
                                        <option value="General Contractor">General Contractor</option>
                                        <option value="Sub-Contractor">Sub-Contractor</option>
                                        <option value="Electrician">Electrician</option>
                                        <option value="Plumber">Plumber</option>                                    
                                        <option value="Landscaper">Landscaper</option>
                                        <option value="HVAC Technician">HVAC Technician</option>                                       
                                    </select> 
                                        
                                    <button className="btn btn-sm btn-outline-dark" 
                                            type="submit"
                                            onClick={this.handleReviewSubmit}>Submit Review
                                    </button>                                                               
                                </div>                        
                            </Row>                                                                       
                        </form>
                    </div>
                </Row>              
            </div>
             

        );
    }

}

export default WriteReview;