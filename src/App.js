import React, {Component, Fragment} from 'react';
import About from './components/pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';

class App extends Component{
	state = {
		users: [],
		user: {},
		loading: true,
		accessParameter: `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	};

	searchUsers = (text) => {
		this.setState({loading: true});

		if(text === "")
			return this.getAllUsers();

		axios.get(`https://api.github.com/search/users?q=${text}&${this.state.accessParameter}`)
			.then((response) => {
				this.setState({loading: false, users: response.data.items});
			});
	};

	getUser = (username) => {
		this.setState({loading: true});

		axios.get(`https://api.github.com/users/${username}?${this.state.accessParameter}`)
			.then((response) => {
				this.setState({loading: false, user: response.data});
			});
	};

	getAllUsers = () => {
		this.setState({loading:true});

		axios.get(`https://api.github.com/users?${this.state.accessParameter}`)
			.then((response) => {
				this.setState({users: response.data});

				this.setState({loading: false});
			});
	};

	clearUsers = () => {
		this.setState({users: []});
	};

	componentDidMount() {
		this.getAllUsers();
	}

	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar title="Github Finder"/>
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<Fragment>
									<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
									<Users loading={this.state.loading} users={this.state.users} />
								</Fragment>
							)}
						/>

						<Route exact path="/about" component={About} />
						<Route exact path="/user/:login" render={props => (
							<User {...props} loading={this.state.loading} getUser={this.getUser} user={this.state.user} />
						)}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
