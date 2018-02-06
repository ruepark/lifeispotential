import NavBar from './Elements/Navbar.jsx';
import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router';
import blogServices from '../services/blogServices';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			blogs : []
		};
		this.fetchAllBlogs = this.fetchAllBlogs.bind(this);
		this.updateBlogs = this.updateBlogs.bind(this);
		this.addBlog = this.addBlog.bind(this);
	}

	fetchAllBlogs(){
		blogServices.getAllBlogs().then((resp) => {
          this.setState((prevState) => {
            prevState.blogs = resp.content.blogs;
            return prevState;
          });
        });
	}

	updateBlogs(request){
        request.then((response) => {
            this.setState({
                blogs : response.content.blogs
            })
        }).catch((err) => {
            alert("There was an error updating blogs: ", err);
        })
    }

    addBlog(blog){
      this.setState((prevState) => {
        prevState.blogs.unshift(blog);
        return prevState;
      });
    }



	render() {
		return (
			<div id='reactRoot'>
                <NavBar />
                <h1>hello</h1>
                <div id='page-content'>
                    {React.cloneElement(this.props.children, {
                    	services : blogServices,
                    	blogs : this.state.blogs,
                    	fetchAllBlogs : this.fetchAllBlogs,
                    	addBlog: this.addBlog,
                    	updateBlogs: this.updateBlogs,
                    })}
                </div>
            </div>
			
		)
	}
}

export default withRouter(App);
