import { Component } from 'react';
import React from 'react';
export default class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='container'>
                <h1> Blogs </h1>
                <p> these are my blogs! </p>
            </div>
        )
    }
}