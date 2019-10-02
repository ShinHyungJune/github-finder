import React, {Component, Fragment} from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

class User extends Component {
	state = {
		username: ""
	};

	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	render() {
		const {avatar_url} = this.props.user;
		const {loading} = this.props.loading;

		if(loading)
			return (<Spinner/>);

		return (
			<Fragment>
				<Link to="/">Back To Search</Link>

				<div>
					<img src={avatar_url} alt=""/>
				</div>
			</Fragment>
		);
	}
}

export default User;