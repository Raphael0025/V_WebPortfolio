import React from 'react'
import ProjectTile from '../Components/ProjectTile'
import Title from '../Components/Title'

import proj1 from '../assets/projects/ParkLine.png'
import proj2 from '../assets/projects/nutrition system.png'
import proj3 from '../assets/projects/garbage system.png'
import proj4 from '../assets/projects/pc system.png'
import proj5 from '../assets/projects/modiform.png'
import proj6 from '../assets/projects/aqua system.png'

function Projects() {
    const projects = [
        {
            id: 1,
            img: proj1,
            title: 'Park Line App',
            content: 'A mobile app that will allow users to locate and desired parking spot via a location map, etc.',
            url: '',
        },
        {
            id: 2,
            img: proj2,
            title: 'Nutrition Tracking App',
            content: 'A mobile app for monitoring and recording dietary intake, helping users track calories, nutrients, and reach health goals.',
            url: '',
        },
        {
            id: 3,
            img: proj3,
            title: 'Garbage Monitoring System',
            content: 'A system that uses a technology-based solution for tracking, providing real-time data on garbage levels, collection schedules, and managing waste disposal in real-time.',
            url: '',
        },
        {
            id: 4,
            img: proj4,
            title: 'Comp Lab Management System',
            content: 'A system in a school computer lab is software that manages and regulates the use of computers within the lab for educational purposes.',
            url: '',
        },
        {
            id: 5,
            img: proj5,
            title: 'Modiform App',
            content: 'A web application that allows students to reserve their uniforms in an orderly and convenient way.',
            url: '',
        },
        {
            id: 6,
            img: proj6,
            title: 'Aqua Management System',
            content: 'A software solution that automates operations for Agua Bautista Water Refilling Station, optimizing its inventory, water meter tracking, equipment maintenance, and customer transactions.',
            url: '',
        }
    ]
    return (
        <div id='project' className='d-flex flex-column align-items-start justify-content-center mt-5 p-5'>
            <Title title={'My Projects'}/>
            <div className='d-flex flex-wrap justify-content-between align-items-start flex-row m-0 p-0'>
                {projects.map((project, index) => (
                    <ProjectTile key={index} img={project.img} title={project.title} content={project.content} url={project.url} />
                ))}
            </div>
        </div>
    )
}

export default Projects