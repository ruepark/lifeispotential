import NavBar from './Elements/Navbar.jsx';
import { Component } from 'react';
import React from 'react';
import { withRouter } from 'react-router';

class App extends Component {
	render() {
		return (
			<div id='reactRoot'>
                <NavBar />
                <h1>hello</h1>
                <div id='page-content'>
                    {React.cloneElement(this.props.children, {})}
                </div>
            </div>
			
		)
	}
}

export default withRouter(App);
