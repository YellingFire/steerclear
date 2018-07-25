import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Row from "../Grid/Row";
import Container from "../Grid/Container";
import { Link } from "react-router-dom";
import RegisterButton from '../buttons/RegisterButton';
import Footer from '../Nav/Footer';
import API from '../../utils/API'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        // console.log('handleSubmit')
        // console.log(this.state);

            API.login({
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                // console.log('login response: ')
                console.log("This is the login response: ", response);
                if (response.status === 200) {
                  sessionStorage.setItem('userId', response.data._id);
                  sessionStorage.setItem('typeUser', response.data.typeUser);
                  sessionStorage.setItem('username', response.data.username);
                  console.log("Here is the sessionStorage", sessionStorage.getItem('username'));
                  this.props.history.push('/review');
                // response.redirect('/review');
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        return (
            <Container>
                <h4 className="form-title">Login</h4>
                <form className="SignupForm">
                    <div className="row form-all">
                        <div className="col-12">
                            <Row>
                                <div className="col-12 form-fields">                           
                                    <label htmlFor="username"><h3>Username:</h3></label>         
                                </div>
                            </Row>
                            <Row>
                                <div className="col-12 form-fields">
                                    <input className="form-input" type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>          
                                </div>
                            </Row>
                            <Row>    
                                <div className="col-12 form-fields">
                                    <label htmlFor="password"><h3>Password:</h3></label>
                                </div>                
                            </Row>
                            <Row>    
                                <div className="col-12 form-fields">
                                    <input className="form-input" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                </div>                
                            </Row>			
                            <Row>
                                <div className="col-12 form-fields">
                                    <button className="btn btn-outline-dark" onClick={this.handleSubmit} type="submit">Login</button>
                                </div>
                            </Row>
                            <Row>
                                <div className="col-12 center-component">
                                    Don't have an account? 
                                </div>
                            </Row>
                            <Row>
                                <div className="col-12 center-component">
                                    <Link to="/register">
                                        <RegisterButton/>
                                    </Link>
                                </div>    
                            </Row>                        
                        </div>            
                    </div>                 					
                </form> 
                <Footer />           
            </Container>
            
        )
    }
}

export default withRouter(LoginForm);