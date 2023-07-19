import React from 'react'

function ProjectTile({img, title, content, url}) {
    return (
        <div className='project-container d-flex align-items-center justify-content-center px-4 pb-5 text-start'>
            <a href={url}>
                <img src={img} className='rounded-4 proj-img mb-4' alt='project'/>
                <h4 className='proj-head'>{title}</h4>
                <p className='fw-normal proj-desc'>{content}</p>
            </a>
        </div>
    )
}

export default ProjectTile