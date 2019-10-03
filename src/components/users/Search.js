import React, {useState} from 'react';
const Search = ({searchUsers, clearUsers}) => {
	let [text, setText] = useState('');

	let onChange = (e) => {
		this.setState({text: e.target.value});
	};

	let onSubmit = (e) => {
		e.preventDefault();

		this.props.searchUsers(this.state.text);

		this.setState({text: ""});
	};

	return (
		<div>
			<form onSubmit={this.onSubmit} className="form">
				<input type="text" name="text" placeholder="type word" value={this.state.text} onChange={this.onChange}/>
				<button>Search</button>
				<button type="button" onClick={clearUsers}>Clear</button>
			</form>
		</div>
	);
};

export default Search;