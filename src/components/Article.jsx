import React from 'react';

// Article component: Displays a single blog post.
// Accepts 'title', 'date', and 'preview' as props.
function Article({ title, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
