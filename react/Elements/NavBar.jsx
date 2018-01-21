import { Component } from 'react';
import React from 'react';
import { IndexLink, Link, withRouter } from 'react-router';

class NavBar extends Component {

    render(){
        var currentUserItem = this.props.currentUser === undefined ? null : (
            <li>
                <Link to={'/users/'+this.props.currentUser}>{this.props.currentUser}</Link>
            </li>
        );
        var logoutItem = this.props.currentUser === undefined ? null : (
            <li>
                <a onClick={this.props.logout}>Log Out</a>
            </li>
        );
        return (
            <nav id='main-navbar'>
                <div className='container'>
                    <div className='navbar-header'>
                        <IndexLink to='/'>life is potential</IndexLink>
                    </div>
                    <ul className='my-navbar'>
                        <li>
                            <Link to='/'>Blogs</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default withRouter(NavBar);