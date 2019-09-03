import React, {Component} from 'react';
import User from './User';
import Spinner from '../common/Spinner';
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner />
    }

    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users;