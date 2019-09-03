import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({alert}) => {
    return (
        <div className="alert">
            {alert.msg}
        </div>
    );
};

export default Alert;