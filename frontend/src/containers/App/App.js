import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {isLoggedIn} from './../../components/Login/AuthStorage'
import NewUser from '../../components/User/NewUser';
import Login from './../../components/Login/Login'
import GetUSer from './../../components/User/GetUser'
import EditUser from './../../components/User/EditUser'
import EditPassword from './../../components/User/EditPassword'
// import 'bootstrap/dist/css/bootstrap.css';
import NotFound from '../../components/NotFound/NotFound'

class App extends Component {
  
  render() {
    return (

      <div className="App">

        <Router>
          <div>
            <Route exact path="/"render={ () => (isLoggedIn() ? <Redirect to="/user" /> : <Login/> ) }/>
            <Route exact path="/signup" component={NewUser}></Route>
            <Route exact path="/user" render={ () => (!isLoggedIn() ? <Redirect to="/" /> : <GetUSer/> ) }/>
            <Route exact path="/user/edit" render={ () => ( !isLoggedIn() ? <Redirect to="/" /> : <EditUser/> ) }/>
            <Route exact path="/user/edit_password" render={ () => ( !isLoggedIn() ? <Redirect to="/" />:<EditPassword/> )}/>
            <Route path="*" component={NotFound} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
