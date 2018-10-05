import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


// import Header from './../../components/Header/Header';
// import UserList from './../../components/User/UserList';
import {isLoggedIn} from './../../components/Login/AuthStorage'
import NewUser from '../../components/User/NewUser';
import Login from './../../components/Login/Login'
import GetUSer from './../../components/User/GetUser'
import EditUser from './../../components/User/EditUser'
import EditPassword from './../../components/User/EditPassword'


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
// Login page - /x
// Signup page - /signup x
// Get User page - /user/:id x
// Edit User page - /user/:id/edit
// Edit Password page - /user/:id/edit_password
      <div className="App">
        {/* <Header /> */}
        <Router>
          <div>
            
            {/* <Route exact path="/users" component={UserList}></Route> */}
            <Route exact path="/"component={Login}/>
            <Route exact path="/signup" component={NewUser}></Route>
            <Route exact path="/user" render={ () => (!isLoggedIn() ? <Redirect to="/" /> : <GetUSer/> ) }/>
            <Route exact path="/user/edit" render={ () => ( !isLoggedIn() ? <Redirect to="/" /> : <EditUser/> ) }/>
            <Route exact path="/user/edit_password" render={ () => ( !isLoggedIn() ? <Redirect to="/" />:<EditPassword/> )}/>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
