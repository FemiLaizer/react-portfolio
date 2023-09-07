import React from 'react'

const ProjectItem = ({ id, projectName, details, link, category, type, image }) => {
    return (
        <div className="work_container bd-grid">
            <div className="work_img">
                <img className='work_img' src={image} alt={projectName} />
                <div className="work-text">
                    <h2 className="work-title">{projectName}</h2>
                    <span>{details}</span>
                    <a href={link} >{link}</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem