import React from 'react';
import Article from './Article';

// ArticleList component: Renders a list of Article components.
// Accepts 'posts' (an array of post objects) as a prop.
function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;
