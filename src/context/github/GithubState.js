import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

const GithubState = (props) => {
	let accessParameter = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

	const initialState = {
		users: [],
		user: {},
		loading: false
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// Search Users
	const searchUsers = (text) => {
		setLoading();

		if(text === "")
			return alert("please type something");

		axios.get(`https://api.github.com/search/users?q=${text}&${accessParameter}`)
			.then((response) => {
				dispatch({
					type: "SEARCH_USERS",
					payload: response.data.items
				});
			});
	};

	// Get User

	// Get Repos

	// Clear Users

	// Set Loading
	const setLoading = () => {
		dispatch({type: "SET_LOADING"})
	};

	return <GithubContext.Provider
		value={{
			users: state.users,
			user: state.user,
			loading: state.loading
		}}>

		{props.children}

		</GithubContext.Provider>
};

export default GithubState;