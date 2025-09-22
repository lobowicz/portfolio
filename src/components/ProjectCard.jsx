import React, { useState } from 'react';
import './ProjectCard.css';

/**
 * Behaviour:
 * - by default, card just displays title, description, links, etc.
 * - on hover, card opens downwards to reveal the project's gif 
 */

function ProjectCard({ project }) {
    const [isHover, setIsHover] = useState(false);
    const { title, date, description, gif, repoLink, liveLink } = project;

    return (
        <div className="project-card" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className="project-info">
                <div className="project-header">
                    <h3 className="project-title">{title}</h3>
                    <div className="project-icons">
                        {liveLink && (<a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-icon" title="Website"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        </a>)}
                        {repoLink && (<a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-icon" title="Repository"> 
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                        </a>)}
                    </div>
                </div>

                <p className="project-date">{date}</p>
                <p className="project-desc">{description}</p>
            </div>

            {isHover && (
                <div className="project-gif">
                    <img src={gif} alt={`${title} demo`}/>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;
