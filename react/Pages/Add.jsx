import { Component } from 'react';
import React from 'react';
export default class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='container'>
                <h1> Admin ONLY </h1>
                <p> add a new blog here </p>
            </div>
        )
    }
}