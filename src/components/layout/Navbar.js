import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
	static defaultProps = {
		title: "Github Finder"
	};

	render() {
		return (
			<nav className="navbar bg-primary">
				<h1>
					<i className="fab fa-github" /> {this.props.title}
				</h1>

				<div className="navs">
					<Link to="/" >HOME</Link>
					<Link to="/about">ABOUT</Link>
				</div>
			</nav>
		);
	}
}

export default Navbar;