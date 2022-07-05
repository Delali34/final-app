import React, { Component } from 'react';

export class Home extends Component{
    render(){
        return(
            <div>
                <h1>LAS MAGNATAS {this.props.text}</h1>
            </div>
        )
    }
}