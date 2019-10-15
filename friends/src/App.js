import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import AddFriend from './components/AddFriend'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/newfriend">Add a friend!</Link>
          </li>
        </ul>
          <Switch>
            <PrivateRoute exact path='/friends' component={FriendsList} />
            <PrivateRoute exact path='/newfriend' component={AddFriend} />
            <Route path='/login' component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App