import { render, screen } from '@testing-library/react';
import App from './App';
import blogData from './data/blog';

test('renders the correct blog name from props', () => {
    render(<App />);
    const headerElement = screen.getByText(blogData.name);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe('H1');
});

test('renders the about text', () => {
    render(<App />);
    const aboutElement = screen.getByText(blogData.about);
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement.tagName).toBe('P');
});

test('renders articles', () => {
    render(<App />);
    // Check if at least one article title is present
    const articleTitle = screen.getByText(blogData.posts[0].title);
    expect(articleTitle).toBeInTheDocument();
});
