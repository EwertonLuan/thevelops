import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import config from './../../config';
import { login } from '../User/API';

class LoginForm extends Component {

	constructor() {
		super();
   
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
		this.state = {
        
			user: {
				email: undefined,
				password: undefined,
				signUp: {
					success: undefined,
					message: undefined
				},
				logged: false,
				users: undefined,
				error: undefined
            
			}
		};
	}
    //For can find in the React google app
    static displayName = 'ui-LoginForm'
    
    //Route to page /user after login
    reloadPage() {
    	window.location.href= config.URL_LOCAL + "/user";
    }
    /*
    Register Form area
    */

    //Formulario submit
    handleSubmit = async (e) => {
    	e.preventDefault();
		
    	//Dates to Login
    	let dataToSend = {
    			email: this.state.email,
    		password: this.state.password					
    	};
		
    	if(dataToSend.email === undefined || dataToSend.password === undefined){
    		return alert("Required fields Email/Senha");
    	}else{ 
    		const login_auth = await login(dataToSend);
    		if (login_auth.success) {
    			this.setState({
    				logged: true,
    				error: undefined
    			});
    			//Page Reload
    			this.reloadPage();			
    		}else{
    			if(this.state.error === undefined) alert("Email or Password invalid");
    		}
    	}
	}
	
    /**Make the change in the Email State*/
    handleEmailChange(e) {
    	this.setState({
    		email: e.target.value
    	});
	}
	
    /**Make the change in the Password state*/
    handlePasswordChange(e) {
    	this.setState({
    		password: e.target.value
    	});
    }
    
    render() {
    	return (
     		<div className="row" style={{ paddingTop: '50px' }}>
    			<div className="col">
    			</div>
    			<div className="col">
    				<div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
    					<div className="card-body">
    						<form>
    							<div className="page-header">
    								<h1>Login</h1>
    							</div>
    							<div className="form-group">
    								<label >Email address</label>
    								<input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={this.handleEmailChange} className="form-control" id="email-login" placeholder="Enter email" />
    							</div>
    							<div className="form-group">
    								<label >Password</label>
    								<input type="password" required onChange={this.handlePasswordChange} className="form-control" id="password-login" placeholder="Password" />
    							</div>
    							<button  className="btn btn-secondary btn-block" type="submit" onClick={this.handleSubmit}>Login</button>
    							<Link to="/signup" className="btn btn-secondary btn-block" href="/signup" id="signup">Signup</Link>
    						</form>
    					</div>
    				</div>
    			</div>
    			<div className="col"/>
    		</div>
		);
	}
}
export default withRouter(LoginForm);
