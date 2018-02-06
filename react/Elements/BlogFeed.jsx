import { Component } from 'react';
import React from 'react';
import Blog from './Blog.jsx';

export default class BlogFeed extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='blog-feed'>
                { this.props.blogs.map((blog, key) => { return <Blog blog={blog} key={key} />})}
            </div>
        )
    }
}