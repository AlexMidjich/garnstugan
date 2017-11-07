import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import './styles/navbar.css';
import Main from './components/Main';
import Shop from './components/Shop';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render(
  <div className="content">
    <Header/>
    <Router>
      <div className="nav_content">
        <ul>
         <li><NavLink exact activeClassName='activeNow' to='/'>Home</NavLink></li>
         <li><NavLink activeClassName='activeNow' to='/shop' >Shop</NavLink></li>
        </ul>


        <Route exact path='/' component={Main}/>
        <Route path='/shop' component={Shop} history={history}/>

      </div>
    </Router>
  </div>
  , document.getElementById('root'));
