
import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import { findByid } from './API';
import {returnPayloadId} from './../Login/AuthStorage'
import {clearAuthToken} from './../Login/AuthStorage'



class GetUser extends Component {
    state = {
        user:{
        email: '',
        first_name: '',
        last_name: '',
        personal_phone: ''
            
        }
    }
    
    async componentDidMount() {
        const user = await this.FindOne();
        // console.log(user)
        // console.log(this.state)
        this.setState({user});
        console.log(this.state)
    }

    FindOne = async () => {
        const payloadId = returnPayloadId()
        console.log("aqui é o objeto "+payloadId)
        try {
            const { data } = await findByid(payloadId);
            // console.log(data.users)
            return data.users;
        } catch (error) {
            console.log('Error', error);
        }
    }
    Logout = ()=>{
        clearAuthToken()
    }


    render() {
        
         const shouwDate = this.state.user
        return (
                <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col">
                </div>
                <div className="col">
                    <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address </label>
                                    <h1 type="email" className="form-control" id="email-user" aria-describedby="emailHelp" >{shouwDate.email}</h1>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampletdEmail1">Firt Name</label>
                                    <h1 type="email" className="form-control" id="" aria-describedby="" >{shouwDate.first_name}</h1>
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <h1 type="email" className="form-control" id="" aria-describedby="" >{shouwDate.last_name}</h1>
                                </div>
                                <div className="form-group">
                                    <label >Personal Phone</label>
                                    <h1 type="email" className="form-control" id="" aria-describedby="" >{shouwDate.personal_phone}</h1>
                                </div>
                                
                                {/* <div className="form-group">
                                    <label htmlFor="exampletdPassword1"> Confirm Password</label>
                                    <td type="password" onChange={this.hanlePasswordConfirmChange} className="form-control" id="exampletdPassword2" placeholder="Password" />
                                </div> */}
                                <Link to="/user/edit" className="btn btn-primary btn-block">Edit User</Link>
                                <Link to="/user/edit_password" className="btn btn-primary btn-block">Edit Password</Link>
                                <Link to="/" onClick={this.Logout()} className="btn btn-primary btn-block">Logout</Link>
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

export default withRouter(GetUser)