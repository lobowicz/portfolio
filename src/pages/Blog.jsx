import React from 'react';
import blogPosts from '../data/blogPosts';      // array of all the blog posts
import BlogCard from '../components/BlogCard';  // card for the individual posts
import './Blog.css';    // styles for the page

export default function Blog() {
    return (
        <main className="blog-container">
            <h2 className="blog-heading">Blog</h2>
            <div className="blog-grid">
                {blogPosts.map((post) => (<BlogCard key={post.id} post={post} />))}
            </div>
        </main>
    );
}
