import { Component } from 'react';
import React from 'react';
import blogServices from '../../services/blogServices';

export default class Add extends Component {
    constructor(props){
        super(props);
        this.updateBlogText = this.updateBlogText.bind(this);
        this.submitBlog = this.submitBlog.bind(this);
        this.state = {
            blogText : ''
        }
    };

    updateBlogText(event){
        this.setState({
            blogText : event.target.value
        });
    }

    submitBlog(){
        // Call the submitBlog service
        blogServices.createBlog("", "", this.state.blogText)
          .then((resp) => {
            this.setState({blogText : ''})
            this.props.addBlog(resp.content);
          });

    }


    render(){
        return (
            <div className='container'>
                <h1> Admin ONLY </h1>
                <div>
                    <input type='text' className='form-control' placeholder="Blah blah blah"
                           value={this.state.blogText} onChange={this.updateBlogText} />
                    <span>
                        <button type='button' className='btn btn-default' onClick={this.submitBlog}>
                            Submit
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}