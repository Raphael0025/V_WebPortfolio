import React, {useState} from 'react'
import Title from '../Components/Title'
import ServiceButton from '../Components/ServiceButton'
import {BiSolidChevronRightCircle} from 'react-icons/bi'
import { FiPenTool } from 'react-icons/fi';
import { FaCode, FaArtstation } from 'react-icons/fa';
import FilmWithImageIcon from '../Components/VideoEditingIcon';
import service1 from '../assets/images/web design.png'
import service2 from '../assets/images/graphic design.png'
import service3 from '../assets/images/developing.png'
import service4 from '../assets/images/video editing.png'

function scrollToSection() {
    const section = document.getElementById('contact');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function Services() {
    const buttons = [
        {
            id: 1,
            title: 'Web / Mobile Design',
            content: 'Create your next amazing website and application UI/ UX design with me today ',
            icon: <FaArtstation size={32} />,
            image: service1,
        },
        {
            id: 2,
            title: 'Graphic Design',
            content: 'Create your next amazing graphic design with me today using Photoshop and Canva.',
            icon: <FiPenTool className='pen' size={32} />,
            image: service2,
        },
        {
            id: 3,
            title: 'Website Development',
            content: 'Create your next amazing website development with me today using HTML, CSS and JavaScript.',
            icon: <FaCode size={32} />,
            image: service3,
        },
        {
            id: 4,
            title: 'Video Editing',
            content: 'Create your next amazing video content for TikTok, Facebook, or YouTube with me today using Adobe Premiere Pro and Capcut.',
            icon: <FilmWithImageIcon size={24} />,
            image: service4,
        },
    ]
    const [activeButtonTitle, setActiveButtonTitle] = useState('Web / Mobile Design')
    const handleClick = (title) => {
        setActiveButtonTitle((prevTitle) => (prevTitle === title ? 'Web / Mobile Design' : title));
    };
    return (
        <div id='service' className='d-flex flex-column justify-content-center align-items-start p-5 mt-5'>
            <Title title={'My Services'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='col-5 text-start px-4'>
                    <h5 className='service-desc mb-5'>{`Please review all of our services listed below, and when you're ready to proceed, click the "Get Started" button.`}</h5>
                    {buttons.map((button, index) => (
                        <ServiceButton onClick={() => handleClick(button.title)} key={index} title={button.title} content={button.content} icon={button.icon} isActive={activeButtonTitle === button.title}/>
                    ))}
                </div>
                <div className='col-7 d-flex flex-column justify-content-center align-items-end gap-5'>
                    <button className='fs-5 gsBtn rounded-3 px-4 py-3 d-flex align-items-center gap-2' onClick={scrollToSection}>Get Started <BiSolidChevronRightCircle size={20} /> </button>
                    {buttons.map((button, index) => (
                        activeButtonTitle === button.title && (
                            <img key={index} className='service-img rounded-3' src={button.image} alt={button.title}/>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services