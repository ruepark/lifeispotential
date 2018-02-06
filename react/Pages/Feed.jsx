import { Component } from 'react';
import React from 'react';
import BlogFeed from '../Elements/BlogFeed.jsx';

export default class Feed extends Component {
    constructor(props){
        super(props);
        this.defaultProps = {
            blogs : []
        }
    }

    componentWillMount(){
        var request = this.props.services.getAllBlogs();
        this.props.updateBlogs(request);
    }

    render(){
        return (
            <div className='container'>
                <h1> Blogs </h1>
                <p> these are my blogs! </p>
                <BlogFeed blogs={this.props.blogs} />
            </div>
        )
    }
}