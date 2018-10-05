
import React, { Component } from 'react';
import { findByIdAndUpdate } from './API';
import { withRouter, Link } from 'react-router-dom';
import {returnPayloadId} from './../Login/AuthStorage'
import {remove} from './API'




class EditUser extends Component {

    
    state = {
        user:{
        email: '',
        first_name: '',
        last_name: '',
        personal_phone: '',
        }
    }
    hanleEmailChange = ({ target }) => {
        const { email, value } = target;
        const { user } =  this.state;
        this.setState( email, () => {
            user.email = value;
        });    
    }
    hanleFirstChange = ({ target }) => {
        const { first_name, value } = target;
        const { user } = this.state;
        this.setState( first_name, () => {
            user.first_name = value;
        });
    }

    hanleLastChange = ({ target }) => {
        const { last_name, value } = target;
        const { user } =   this.state;
        this.setState( last_name, () => {
            user.last_name = value;
        });
    }
    handlePersonalPhoneChange = ({ target }) => {
        const { personal_phone, value } = target;
        const { user } = this.state;
        this.setState(personal_phone, () =>{
            user.personal_phone = value
            
        })
    }
     
    DeleteUser = () => {
        remove(returnPayloadId)
    }

    FindOne = async () => {
        try {
            const { data } = await findByIdAndUpdate();
            // console.log(data.users)
            return data.users;
        } catch (error) {
            console.log('Error', error);
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, first_name, last_name, personal_phone} = this.state.user;
        console.log(this.state.user)
                
        try {
            console.log("entrou no creat do ID")
            const { data } = await findByIdAndUpdate("5bb39d31c4c5ab1d0b019f30",email, first_name, last_name, personal_phone);            
            console(data)
            return data;
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
                                <div className="form-group">
                                    <label>Email address </label>
                                    <input required="" type="email" onChange={this.hanleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" onChange={this.hanleFirstChange} className="form-control" id="Firs-name" placeholder="First Name"  />
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input type="text" onChange={this.hanleLastChange} className="form-control" id="Last-name" placeholder="Last name"  />
                                </div>
                                <div className="form-group">
                                    <label >Personal Phone</label>
                                    <input type="text" onChange={this.handlePersonalPhoneChange} className="form-control" id="PersonhalPhone" placeholder="Personal Phone" />
                                </div>
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Submite</button>
                                <Link type="submit" to="/" onClick={this.DeleteUser} className="btn btn-primary btn-block">Submite</Link>
                                <br />
                                
                            </form>


                        </div>
                    </div>

                </div>
                <div className="col">
                </div>
            </div>

    )}
}

export default withRouter(EditUser)