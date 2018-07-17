import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import Jumbotron from "../components/Jumbotron/Jumbotron";


class LoginPage extends React.Component {
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
                        <LoginForm /> 
                    </div>
                </div>          
            </div>                        
        );
    }  


};
     
    

export default LoginPage;