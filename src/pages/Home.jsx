import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Behaviour: name, role, projects, blog, contact 
 * Contact is a direct link to the form; proj+blog is react router link 
 */
export default function Home() {
    return (
        <main className="home-container">
            <div className="home-content">
                <h1 className="home-title">Joseph Akwasi Lobowicz</h1>
                <p className="home-subtitle">Math, Computer Science, and Data Science @ University of Richmond</p>
                
                <nav className="home-nav">
                    <Link to="/projects" className="home-link">Projects</Link>
                    <Link to="/blog" className="home-link">Blog</Link>
                    <a href="https://forms.gle/UTFEyBGtkLZu5FCVA" className="home-link">Contact</a>
                </nav>
            </div>
            
            <div className="social-icons">
                <a href="mailto:josephakwasilobowicz@gmail.com" className="social-link" aria-label="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                </a>
                <a href="https://github.com/lobowicz" className="social-link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" className="social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                </a>
                <a href="https://instagram.com/joseph_lobowicz" className="social-link" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                </a>
            </div>
        </main>
    );
}