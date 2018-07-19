import React from "react";
import "./forms.css";
// import API from "../../utils/API";

class CheckForReview extends React.Component {

    state = {
        street: '',
        city: '',
        state: '',
        zip: ''
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleClearForm(event) {
        event.preventDefault();
        this.setState({
          street: '',
          city: '',
          state: '',
          zip: ''
        });
      };

    onSubmit = (event) => {
        this.props.onSubmit(this.state, event);
        this.handleClearForm(event);
    }

    render() {
        return (
            <div className="display-container">               
                <div className="row">
                    <div className="col- form-container">
                        <h5 className="form-title">Use this form to check for a review</h5>
                        <form className="address-form" onSubmit={(event) => this.onSubmit(event)}>
                            <input className="street-address address-inputs"
                                   value={this.state.street}
                                   onChange={this.handleInputChange} 
                                   name="street" 
                                   type="text" 
                                   placeholder="Street Address" 
                                   width="80%"/>
                            <input className="address-inputs" 
                                   value={this.state.city}
                                   onChange={this.handleInputChange}
                                   name="city" 
                                   type="text" 
                                   placeholder="City"/>
                            <input className="address-inputs" 
                                   value={this.state.state}
                                   onChange={this.handleInputChange}
                                   name="state" 
                                   type="text" 
                                   placeholder="State"/>
                            <input className="address-inputs" 
                                   value={this.state.zip}
                                   onChange={this.handleInputChange}
                                   name="zip" 
                                   type="text" 
                                   placeholder="Zip Code" />
                            {/* <button className="btn btn-sm btn-outline-dark" 
                                            type="submit"
                                            onClick={this.handleSubmit}>Check Address
                            </button>         */}
                            <button className="btn btn-sm btn-outline-dark" type="submit">Check Address</button>
                        </form>                    
                    </div>                
                </div>
                             
            </div>
             

        );
    }

}

export default CheckForReview;