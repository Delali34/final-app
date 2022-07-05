import React, { Component } from 'react';
import { Home } from "./Home";
import { FirstThings } from './FirstThings';
import { Image } from "./Image";
import './myStyles.css';

export class MyCard extends Component {
    render() { 
      return (
        <div className='container'>
          {/* <div className='img'> */}
            <Image src={require("./picture.jpg")} alt="a picture" className="image"/>
            {/* </div> */}
            
          
        <div className='info'>
        <Home text=""/>
         <FirstThings place="" website="www.myleadershipfarm.org"/>
        </div>

            
        </div>
      );
    }
  }
   