import React from "react";
import "./forms.css";
import API from "../../utils/API";

class CheckForReview extends React.Component {

    render() {
        return (
            <div className="display-container">               
                <div className="row">
                    <div className="col- form-container">
                        <h5 className="form-title">Use this form to check for a review</h5>
                        <form className="address-form">
                            <input className="street-address address-inputs" name="Street Address" type="text" placeholder="Street Address" width="80%"/>
                            <input className="address-inputs" name="City" type="text" placeholder="City"/>
                            <input className="address-inputs" name="State" type="text" placeholder="State"/>
                            <input className="address-inputs" name="Zip Code" type="text" placeholder="Zip Code" />
                            <button className="btn btn-sm btn-outline-dark" type="submit">Check Address</button>
                        </form>                    
                    </div>                
                </div>
                             
            </div>
             

        );
    }

}

export default CheckForReview;