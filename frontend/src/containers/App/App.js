import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './../../components/Home/Home';
// import Header from './../../components/Header/Header';
import UserList from './../../components/User/UserList';
import NewUser from '../../components/User/NewUser';
import Login from './../../components/Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Router>
          <div>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/users" component={UserList}></Route>
            <Route path="/signup" component={NewUser}></Route>
            <Route exact path="/"component={Login}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
