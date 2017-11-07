import React, { Component } from 'react';
import LoginForm from './LoginForm';
import '../styles/main.css';

class Main extends Component {
  state = {
    togglecomponent: true
  }

  clickedButton() {
    this.setState({ togglecomponent: !this.state.togglecomponent})
    console.log(this.state.togglecomponent);
  }
 render(){
  return(
   <div className="main_content">
    <p>Textcontent</p>

    <button onClick={() => this.clickedButton()} className="btn-login">
      Logga in
    </button>
    {this.state.togglecomponent ?
      null
      :
      <div className="login">
        <LoginForm/>
      </div>
    }
   </div>
  );
 }
}

export default Main;
