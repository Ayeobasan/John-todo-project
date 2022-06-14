import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Navbar from './Navbar';


export class welcome extends Component {
  render() {
    return (

      <div>
        <div>
          <Navbar />
        </div>
        <h1>welcome to our shopping list......</h1>
        {/*  <Link to="/list" ><button>Enter</button></Link> */}
      </div>
    )
  }
}

export default welcome;
