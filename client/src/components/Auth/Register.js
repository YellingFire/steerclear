import React, { Component } from 'react';
import axios from 'axios';
import './Auth.css';
import determineEnv from '../../environment/determineEnv';
import determineApiHost from '../../environment/determineAPIHost';
import Footer from '../Nav/Footer'


class Register extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			typeUser: '',
			confirmPassword: ''

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		}, console.log(this.state));
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		axios.post(`${determineApiHost(determineEnv())}/api/user`, {
			username: this.state.username,
			password: this.state.password,
			typeUser: this.state.typeUser
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/review'
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
								<label htmlFor="typeUser"><h3>Choose One:</h3></label>
									<div className="row">    
										<div className="col-12 form-fields">
											<label>
												<input 
													className="checkbox"
													name="typeUser" 
													type="radio" 
													value="Service Provider"
													checked={this.state.typeUser === "Service Provider"}
													onChange={this.handleChange}>
												</input>
												Service Provider
											</label>
											<label>											
												<input
													className="checkbox" 
													name="typeUser" 
													type="radio" 
													value="Homeowner"
													checked={this.state.typeUser === "Homeowner"} 
													onChange={this.handleChange}>
												</input>
												Homeowner
											</label>
										</div>                
                            		</div>
									<div className="row">
										<div className="col-12 form-fields">
																				
										</div>
									</div>
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
				<Footer/>            
            </div>
        )
    }
}

export default Register;