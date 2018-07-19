import React, { Component } from 'react';
import axios from 'axios';
import Row from "../Grid/Row";
import Container from "../Grid/Container";

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
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
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
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
                        </div>            
                    </div>                 					
                </form>            
            </Container>
        )
    }
}

export default LoginForm;