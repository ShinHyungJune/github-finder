import React, {Component, Fragment, useState, useEffect} from 'react';
import About from './components/pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import GithubState from './context/github/GithubState';
import axios from 'axios';

const App = () => {
	let [state, setState] = useState({
		users: [],
		user: {},
		loading: true
	});

	let accessParameter = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

	let getUser = (username) => {
		setState({...state, loading: true});

		axios.get(`https://api.github.com/users/${username}?${accessParameter}`)
			.then((response) => {
				setState({...state, loading: false});

				setState({...state, user: response.data});
			});
	};

	let getAllUsers = () => {
		setState({...state, loading: true});

		axios.get(`https://api.github.com/users?${accessParameter}`)
			.then((response) => {
				setState({...state, loading: false});

				setState({...state, users: response.data});
			});
	};

	let clearUsers = () => {
		setState({...state, users: []});
	};

	useEffect(() => {
		getAllUsers();
	}, []);


	return (
		<GithubState>
			<Router>
				<div className='App'>
					<Navbar title="Github Finder"/>
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<Fragment>
									<Search clearUsers={clearUsers} />
									<Users loading={state.loading} users={state.users} />
								</Fragment>
							)}
						/>

						<Route exact path="/about" component={About} />
						<Route exact path="/user/:login" render={props => (
							<User {...props} loading={state.loading} getUser={getUser} user={state.user} />
						)}/>
					</Switch>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
