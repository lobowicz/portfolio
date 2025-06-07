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
                        {liveLink && (<a href={liveLink} target="_blank" className="project-icon" title="Website">🔗</a>)}
                        {repoLink && (<a href={repoLink} target="_blank" className="project-icon" title="Repository">🐙</a>)}
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
