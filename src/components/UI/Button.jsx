import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ children, type, mode, isDisabled }) => {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${mode}`}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    isDisabled: false,
    type: 'button',
    mode: 'primary',
};

Button.propTypes = {
    type: PropTypes.string,
    mode: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
