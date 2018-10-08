
import React, { Component } from 'react';
import { findByIdAndUpdate } from './API';
import { withRouter } from 'react-router-dom';
import {returnPayloadId} from './../Login/AuthStorage'
import {remove} from './API'
import {clearAuthToken} from './../Login/AuthStorage'
import config from "./../../config"



class EditUser extends Component {


    state = {
        user:{
        email: null,
        first_name: null,
        last_name: null,
        personal_phone: null
        }
    }

    /** Watch the changes in the field input Email*/
    hanleEmailChange = ({ target }) => {
        const { email, value } = target;
        const { user } =  this.state;
        this.setState( email, () => {
            user.email = value;
        });    
    }
    /** Watch the changes in the field input First name*/
    hanleFirstChange = ({ target }) => {
        const { first_name, value } = target;
        const { user } = this.state;
        this.setState( first_name, () => {
            user.first_name = value;
        });
    }
    /** Watch the changes in the field input Last name*/
    hanleLastChange = ({ target }) => {
        const { last_name, value } = target;
        const { user } =   this.state;
        this.setState( last_name, () => {
            user.last_name = value;
        });
    }
    /** Watch the changes in the field input Personal phone*/
    handlePersonalPhoneChange = ({ target }) => {
        const { personal_phone, value } = target;
        const { user } = this.state;
        this.setState(personal_phone, () =>{
            user.personal_phone = value
            
        })
    }
    //Redirect the user for GET user page
    redirectPage() {
        window.location.href = config.URL_LOCAL+'/user'
    }

    /**Delete user and token */
    DeleteUser = () => {
        const id = returnPayloadId()
        clearAuthToken()
        remove(id)
    }

    /** Submite the form*/
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, first_name, last_name, personal_phone} = this.state.user;
        
        try {
            if(email === null ||
                first_name === null ||
                last_name === null||
                personal_phone === null){
                    alert("You must fill in all fields")
                    return
            }else{
            const id = returnPayloadId()
            await findByIdAndUpdate(id ,email, first_name, last_name, personal_phone);            
            
            //Redirect to /user
            this.redirectPage()
            
            return 
        }
            
        } catch (error) {            
             return error
        }
    
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
                                    <h1>Edit User</h1>
                                </div>
                                <div className="form-group">
                                    <label>Email address </label>
                                    <input required="" type="email" onChange={this.hanleEmailChange} className="form-control" id="email-formulario" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" onChange={this.hanleFirstChange} className="form-control" id="first-name" placeholder="First Name"  />
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input type="text" onChange={this.hanleLastChange} className="form-control" id="last-name" placeholder="Last name"/>
                                </div>
                                <div className="form-group">
                                    <label >Personal Phone</label>
                                    <input type="text" onChange={this.handlePersonalPhoneChange} className="form-control" id="personhal-phone" placeholder="Personal Phone" />
                                </div>
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-secondary btn-block">Submite</button>
                                <button type="submit" onClick={this.DeleteUser} className="btn btn-secondary btn-block">Delete User</button>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"/>
            </div>                     
              
    )} 
}

export default withRouter(EditUser)