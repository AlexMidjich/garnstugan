import React, { Component } from 'react';
import '../styles/navbar.css';

class Navbar extends Component {
 render(){
  return(
   <div className="nav_content">
    <ul>
     <li>Nav 1</li>
     <li>Nav 2</li>
     <li>Nav 3</li>
    </ul>
   </div>
  );
 }
}

export default Navbar;
