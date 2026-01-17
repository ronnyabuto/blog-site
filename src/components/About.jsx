import React from 'react';

// About component: Displays the blog logo and "about" text.
// Accepts 'image' (default placeholder) and 'about' text as props.
function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;
