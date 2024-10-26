import React from 'react';
import PropTypes from "prop-types";

const Header = ({title}) => {
    return (
        <header>
            <h1 style={headingStyles}>{title}</h1>
        </header>
    );
};
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyles = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header;
