import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import Navbar from './Navbar';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
       <Header/>
       <Navbar/>
       <Main/>
      </div>
    );
  }
}

export default App;
