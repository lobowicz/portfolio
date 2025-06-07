import React from 'react';
import './BlogCard.css';

/**
 * Props: post { id, title, date, snippet, link }
 * Behaviour: renders card with title, date, snippet
 * Similar to ProjectCard, except no hover GIF 
 */

export default function BlogCard({ post }) {
    const { title, date, snippet, link } = post;

    return (
        <div className="blog-card">
            <div className="blog-card-header">
                <h3 className="blog-title">{title}</h3>
                <a href={link} target='_blank' className="blog-link-icon" title="Read article">🔗</a>
            </div>
            <p className="blog-date">{date}</p>
            <p className="blog-snippet">{snippet}</p>
        </div>
    );
}
