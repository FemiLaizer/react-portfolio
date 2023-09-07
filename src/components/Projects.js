import React from 'react'
import ProjectItem from "./ProjectItem"

const Projects = ({ projects }) => {
    return (
        <section class="work section" id="work">
            <h2 class="section-title">Projects</h2>
            <div>
                {projects.map(project => (
                    <ProjectItem key={project.id} {...project} />
                ))}
            </div>
        </section>

    )
}

export default Projects