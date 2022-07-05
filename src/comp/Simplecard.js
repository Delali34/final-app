import React, { Component } from 'react';
import { Home } from "./Home";
import { WelcomeComponents } from './WelcomeComponent';
import { Image } from "./Image";
import './myStyles.css';

export class SimpleCard extends Component {
    render() { 
      return (
        <div className='container'>
          {/* <div className='img'> */}
            <Image src={require("./picture.jpg")} alt="a flower" className="image"/>
            {/* </div> */}
            
          
        <div className='info'>
        <Home text=""/>
         <WelcomeComponents place="" website="www.myleadershipfarm.org"/>
        </div>

            
        </div>
      );
    }
  }
   