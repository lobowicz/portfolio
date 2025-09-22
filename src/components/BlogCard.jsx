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
                <a href={link} target='_blank' rel="noopener noreferrer" className="blog-link-icon" title="Read article">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </a>
            </div>
            <p className="blog-date">{date}</p>
            <p className="blog-snippet">{snippet}</p>
        </div>
    );
}
