import { Component } from 'react';
import React from 'react';
import blogServices from '../../services/blogServices';

export default class Blog extends Component {
    constructor(props){
        super(props);
    }

    render(){

        var blog = this.props.blog;

        return (
            <div className='blog'>
                <div className='panel panel-default'>
                    <div className='panel-body'>
                        <p><strong>{blog.title}</strong></p>
                        <p>{'tldr: '+blog.tldr}</p>
                        <p>{ blog.content }</p>
                    </div>
                </div>
            </div>
        )
    }
}