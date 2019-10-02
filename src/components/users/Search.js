import React, {Component} from 'react';

class Search extends Component {
	state = {
		text: ""
	};

	onChange = (e) => {
		this.setState({text: e.target.value});
	};

	onSubmit = (e) => {
		e.preventDefault();

		this.props.searchUsers(this.state.text);

		this.setState({text: ""});
	};
	render() {
		const {searchUsers, clearUsers} = this.props;

		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input type="text" name="text" placeholder="type word" value={this.state.text} onChange={this.onChange}/>
					<button>Search</button>
					<button type="button" onClick={clearUsers}>Clear</button>
				</form>
			</div>
		);
	}
}

export default Search;