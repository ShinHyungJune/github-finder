import React, {Component, Fragment, useEffect, useState} from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

const User = ({user, loading, getUser, match}) => {
	const [state, setState] = useState({username: ""});

	useEffect(() => {
		getUser(match.params.login);
	}, []);

	if(loading)
		return (<Spinner/>);

	return (
		<Fragment>
			<Link to="/">Back To Search</Link>

			<div>
				<img src={state.user.avatar_url} alt=""/>
			</div>
		</Fragment>
	);
}

export default User;