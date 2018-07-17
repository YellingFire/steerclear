import React from "react";
import Register from "../components/Auth/Register";
import Jumbotron from "../components/Jumbotron/Jumbotron";



class RegisterPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 title-content">
                        <Jumbotron />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Register /> 
                    </div>
                </div>          
            </div>                        
        );
    }  


};
     
    

export default RegisterPage;