import React, { Component } from 'react';
import './myStyles.css';

export class WelcomeComponents extends Component {
    render() { 
      return (
        <div>
          <h3>BE THE BEST {this.props.place} VERSION OF YOURSELF</h3>
          <p><h4> {this.props.contact} </h4></p>

          <p><h4> {this.props.website} </h4></p>
          
        </div>
      );
    }
  }
   
  
//   export default WelcomeComponents;