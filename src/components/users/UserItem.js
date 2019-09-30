import React, {Component} from 'react';

const UserItem = ({user}) => {
	return (
		<div className="card text-center">
			<img src={user.avatar_url} alt=""/>

			<a href={user.html_url}>More</a>
		</div>
	);
};

export default UserItem;
