
import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import {returnPayloadId} from './../Login/AuthStorage'
import {updatePassword} from './API'




class EditUser extends Component {

    
    state = {
        user:{
        password:'',
        password_old:'',
        password_confirm:''

        }
    }

    hanlePasswordChange = ({ target }) => {
        const { password_old, value } = target;
        const { user } =   this.state;
        
        this.setState(password_old, () => {
            user.password_old = value;
        });
        
    }

    hanlePasswordChangeNew = ({ target }) => {
        const { password, value } = target;
        const { user } =   this.state;
        
        this.setState(password, () => {
            user.password = value;
        });
        
    }

    hanlePasswordConfirmChange = ({ target }) => {
        const { password_confirm, value } = target;
        const { user } =   this.state;
        
        this.setState(password_confirm, () => {
            user.password_confirm = value;
        });
    }



    
    handleSubmit = async (e) => {
        e.preventDefault();
        const { password } = this.state.user;
        
        
                
        try {
            const payloadId = returnPayloadId()
            console.log("entrou no creat do ID")
            const { data } = await updatePassword(payloadId,password);
            console.log("foi oque ele mandou"+data)            
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
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={this.hanlePasswordChange} className="form-control" id="password" placeholder="Old Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">New Password</label>
                                    <input type="password" onChange={this.hanlePasswordChangeNew} className="form-control" id="password-new" placeholder="New Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"> Confirm Password</label>
                                    <input type="password" onChange={this.hanlePasswordConfirmChange} className="form-control" id="password-confirm" placeholder="Confirnm Password"/>
                                </div>
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Submite</button>
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