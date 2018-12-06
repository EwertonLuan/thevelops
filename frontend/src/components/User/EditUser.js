
import React, { Component } from 'react';
import { findByIdAndUpdate } from './API';
import { withRouter } from 'react-router-dom';
import {returnPayloadId} from './../Login/AuthStorage';
import {remove,findByid} from './API';
import {clearAuthToken} from './../Login/AuthStorage';
import config from "./../../config";



class EditUser extends Component {
	constructor(){
		super();
	
		this.hanleEmailChange = this.hanleEmailChange.bind(this);
		this.hanleEmailChange = this.hanleEmailChange.bind(this);
		this.hanleFirstChange = this.hanleFirstChange.bind(this);
		this.hanleLastChange = this.hanleLastChange.bind(this);
		this.handlePersonalPhoneChange = this.handlePersonalPhoneChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	
		this.state = {
			email: '',
			first_name: '',
			last_name: '',
			personal_phone: ''
		};
	}

	/** Watch the changes in the field input Email*/
	hanleEmailChange(e){
    	this.setState({
    		email: e.target.value
    	});    
	}
	/** Watch the changes in the field input First name*/
	hanleFirstChange(e){
    	this.setState({
    		first_name: e.target.value
		});
		
	}
	/** Watch the changes in the field input Last name*/
	hanleLastChange(e){
    	this.setState({
    		last_name: e.target.value
		});
		
	}
	/** Watch the changes in the field input Personal phone*/
	handlePersonalPhoneChange(e){
    	this.setState({
    		personal_phone: e.target.value
		});
	}
	//Redirect the user for GET user page
	redirectPage() {
    	window.location.href = config.URL_LOCAL+'/user';
	}

    /**Delete user and token */
    DeleteUser = () => {
    	const id = returnPayloadId();
    	clearAuthToken();
    	remove(id);
    }
	
    async componentDidMount() {
    	const user = await this.FindOne();
    	this.setState(user);
    }

    FindOne = async () => {
    	const payloadId = returnPayloadId();
  
    	try {
    		const { data } = await findByid(payloadId);
    		return data.users;
    	} catch (error) {
    		console.log('Error', error);
    	}
    }

	/** Submite the form*/
    handleSubmit = async (e) => {
    	e.preventDefault();
    	const { email, first_name, last_name, personal_phone} = this.state;
        
    	try {
    		if(email === null ||
                first_name === null ||
                last_name === null||
                personal_phone === null){
    			alert("You must fill in all fields");
    			return;
    		}else{
    			const id = returnPayloadId();

    			const update = await findByIdAndUpdate(id ,email, first_name, last_name, personal_phone);				          
    			if(update.data.error){
    				return alert(update.data.error);
    			}
				
    			//Redirect to /user
    			this.redirectPage();
    			return; 
    		}
            
    	} catch (error) {            
    		return error;
    	}
    }

    render() {
        
    	const shouwDate = this.state;
    	return (
    		<div className="row" style={{ paddingTop: '50px' }}>
    			<div className="col">
    			</div>
    			<div className="col">
    				<div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
    					<div className="card-body">
    						<form>
    							<div className="page-header">
    								<h1>Edit User</h1>
    							</div>
    							<div className="form-group">
    								<label>Email address </label>
    								<input required="" type="email" onChange={this.hanleEmailChange} className="form-control" id="email-formulario" aria-describedby="emailHelp" placeholder="Email" value={shouwDate.email}/>
    							</div>
    							<div className="form-group">
    								<label>First Name</label>
    								<input type="text" onChange={this.hanleFirstChange} className="form-control" id="first-name" placeholder="First Name" value={shouwDate.first_name} />
    							</div>
    							<div className="form-group">
    								<label >Last Name</label>
    								<input type="text" onChange={this.hanleLastChange} className="form-control" id="last-name" placeholder="Last name" value={shouwDate.last_name}/>
    							</div>
    							<div className="form-group">
    								<label >Personal Phone</label>
    								<input type="text" onChange={this.handlePersonalPhoneChange} className="form-control" id="personhal-phone" placeholder="Phone ex:(13) 99999-9999" value={shouwDate.personal_phone}/>
    							</div>
    							<button type="submit" onClick={this.handleSubmit} className="btn btn-secondary btn-block">Submit</button>
    							<button type="submit" onClick={this.DeleteUser} className="btn btn-secondary btn-block">Delete User</button>
    							<br />
    						</form>
    					</div>
    				</div>
    			</div>
    			<div className="col"/>
    		</div>                     
              
    	);} 
}

export default withRouter(EditUser);