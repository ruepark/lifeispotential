import { Component } from 'react';
import React from 'react';
export default class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='container'>
                <h1> Rue Park </h1>
                <p> welcome to my blog! </p>
            </div>
        )
    }
}