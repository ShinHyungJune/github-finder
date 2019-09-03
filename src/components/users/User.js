import React, {Component} from 'react';

const User = ({user}) => {
    const {login, avatar_url, html_url} = user;

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img"/>
            <p>{login}</p>

            <a href={html_url} className="link">More</a>
        </div>

    );
};

export default User;