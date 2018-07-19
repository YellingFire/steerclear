import React from "react";
import Register from "../components/Auth/Register";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Row from "../components/Grid/Row";
import Container from "../components/Grid/Container";



class RegisterPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="col-12 title-content">
                        <Jumbotron />
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <Register /> 
                    </div>
                </Row>          
            </Container>                        
        );
    }  


};
     
    

export default RegisterPage;