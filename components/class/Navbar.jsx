import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
      const active = {    
          color:'brown'
        }
        const inactive = {
            color:'black'
          } 
    return (
      <div>
        <nav>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive ? active : inactive  }>Home</NavLink></li>
                <li><NavLink to="/List" style={({isActive}) => isActive ? active : inactive  }>List</NavLink></li>
            </ul> 
        </nav>
      </div>
    );
  }
}

export default Navbar;
