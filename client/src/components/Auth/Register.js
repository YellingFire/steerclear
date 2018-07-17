import React, { Component } from 'react';
import axios from 'axios';
import './Auth.css';
import determineEnv from '../../environment/determineEnv';
import determineApiHost from '../../environment/determineAPIHost';


class Register extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		
		console.log(
		`${determineApiHost(determineEnv())}/api/user`
		);
		//request to server to add a new username/password
		axios.post(`${determineApiHost(determineEnv())}/api/user`, {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


    render() {
        return (
            <div className="container">
                <h4 className="form-title">Register</h4>
                <form className="SignupForm">
                    <div className="row form-all">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 form-fields">                           
                                    <label htmlFor="username"><h3>Username:</h3></label>         
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 form-fields">
                                    <input className="form-input" type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>          
                                </div>
                            </div>
                            <div className="row">    
                                <div className="col-12 form-fields">
                                    <label htmlFor="password"><h3>Password:</h3></label>
                                </div>                
                            </div>
                            <div className="row">    
                                <div className="col-12 form-fields">
                                    <input className="form-input" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                </div>                
                            </div>			
                            <div className="row">
                                <div className="col-12 form-fields">
                                    <button className="btn btn-outline-dark" onClick={this.handleSubmit} type="submit">Register</button>
                                </div>
                            </div>                    
                        </div>            
                    </div>                 					
                </form>            
            </div>
        )
    }
}

export default Register;