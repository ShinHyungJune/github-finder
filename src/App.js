import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component{
	state = {
		users: [],
		loading: false
	};

	componentDidMount() {
		this.setState({loading:true});

		axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
			.then((response) => {
				this.setState({users: response.data});

				this.setState({loading: false});
			});
	}

	render() {
		return (
			<div className='App'>
				<Navbar title="Github Finder"/>

				<Users loading={this.state.loading} users={this.state.users} />
			</div>
		);
	}
}

export default App;
