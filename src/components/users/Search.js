import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = ({clearUsers}) => {
	const githubContext = useContext(GithubContext);

	let [state, setState] = useState({text: ""});

	let onChange = (e) => {
		setState({...state, text: e.target.value});
	};

	let onSubmit = (e) => {
		e.preventDefault();

		githubContext.searchUsers(state.text);

		setState({...state, text: ""});
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input type="text" name="text" placeholder="type word" value={state.text} onChange={onChange}/>
				<button>Search</button>
				<button type="button" onClick={clearUsers}>Clear</button>
			</form>
		</div>
	);
};

export default Search;