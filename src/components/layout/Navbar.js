import React, {Component} from 'react';

const Navbar = ({title}) => {


    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
};

Navbar.defaultProps = {
    title: 'Github Finder',
};

export default Navbar;