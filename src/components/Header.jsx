import React from 'react';

// Header component: Displays the blog name.
// Accepts 'name' as a prop.
function Header({ name }) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    );
}

export default Header;
