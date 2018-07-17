import React from "react";
import "./forms.css";
import API from "../../utils/API";

class WriteReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            street: "",
            city: "",
            state: "",
            zip: "",
            review: "",
            date: "",
            cityOfOperation: ""
            // typeContractor: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    }
    // componentDidMount() {
    //     this.loadReviews();
    // }

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

    // handleInputChange(event) {
    //     this.setState({
    //         street: event.target.value,
    //         review: event.target.value,
    //         cityOfOperation: event.target.value
        
    //     })
    // }

    handleReviewSubmit = event => {
        event.preventDefault();
        API.saveReview({
            street: this.state.street,
            city: this.state.city,
            state: this.state.state, 
            zip: this.state.zip,
            review: this.state.review,
            cityOfOperation: this.state.cityOfOperation

        })

    }

    render() {
        return (
            <div className="container form-container">
                <form className="display-container">
                    <div className="row">
                        <div className="col-">
                        {/* Review Title */}
                        <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <h5 className="form-title">Review Info</h5>
                                    <p className="form-title">This info will be used to identify the review. Any reviews with derogotory, bad language, inappropriate content will be flagged and removed. It is best practice and helpful to other contractors to stick to the facts.</p>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        {/* Review Info */}
                            <div className="row">
                                <div className="col- address-form">
                                            {/* Street */}
                                    <input className="street-address address-inputs" 
                                           onChange={this.handleInputChange}
                                           defaultValue={ this.state.street }
                                           name="street"  
                                           placeholder="Street Address" 
                                           width="80%"/>
                                           {/* city */}
                                    <input className="address-inputs" 
                                           onChange={this.handleInputChange}  
                                           name="city"                                             
                                           placeholder="City"/>
                                           {/* state */}
                                    <input className="address-inputs" 
                                           onChange={this.handleInputChange} 
                                           name="state"  
                                           placeholder="State"/>
                                           {/* zip code */}
                                    <input className="address-inputs" 
                                           onChange={this.handleInputChange}  
                                           name="zip"                                             
                                           placeholder="Zip Code" />  

                                    <div className="review">
                                        <textarea
                                                  onChange={this.handleInputChange}  
                                                  name="review" 
                                                  placeholder="Write Review" 
                                                  rows="5" 
                                                  cols="50" />
                                    </div>
                                </div>                        
                            </div>
                            {/* Contractor Title */}
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <h5 className="form-title">Contractor Info</h5>
                                    <p className="form-title">This info will be used to identify the review. We do not share contractor/service provider information with anyone.</p>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            {/* Contractor Info */}
                            <div className="row">
                                <div className="col- contractor-info-form">
                                <input className="contractor-inputs"
                                       value={this.state.cityOfOperation} 
                                       onChange={this.handleInputChange}
                                       name="cityOfOperation"                                        
                                       placeholder="City of Operation" 
                                       width="100%"/>
                                {/* <select className="contractor-inputs" 
                                        name="typeContractor" 
                                        placeholder="Choose One"
                                        onChange={this.handleInputChange}>
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="General Contractor">General Contractor</option>
                                    <option value="Sub-Contractor">Sub-Contractor</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Plumber">Plumber</option>                                    
                                    <option value="Landscaper">Landscaper</option>
                                    <option value="HVAC Technician">HVAC Technician</option>                                       
                                </select>  */}
                                    
                                    <button className="btn btn-sm btn-outline-dark" 
                                            type="submit"
                                            disabled={!(this.state.StreetAddress || this.state.City || this.state.State || this.state.review)}
                                            onClick={this.handleReviewSubmit}>Submit Review
                                            </button>                                                               
                                </div>                        
                            </div>
                        
                        </div>
                        

                    </div>                    
                </form>             
            </div>
             

        );
    }

}

export default WriteReview;