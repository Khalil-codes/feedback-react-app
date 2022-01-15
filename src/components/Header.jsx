import React from 'react';

const Header = (props) => {
    const headerStyles = {
        backgroundColor: props.bgColor,
        textAlign: 'center',
    };
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>Feedback App</h2>
            </div>
        </header>
    );
};

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
};

export default Header;
