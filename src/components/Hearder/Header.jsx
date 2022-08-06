import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logoglx.svg';
import './header.css'

Header.propTypes = {
    
};

function Header(props) {
    return (
        <nav>
            <NavLink to={''}>
                <img src={logo} alt="" />
            </NavLink>
        </nav>
    );
}

export default Header;