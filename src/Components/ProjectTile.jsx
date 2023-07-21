import React, {useEffect, useState, useRef} from 'react'
import 'animate.css'
 
function ProjectTile({img, title, content, url}) {
    const projectRef = useRef(null);

    const intersectionObserverOptions = {
        threshold: 0.2,
    };
    const intersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                projectRef.current.classList.remove('animate__fadeOut');
                projectRef.current.classList.add('animate__fadeIn');
            } else {
                projectRef.current.classList.remove('animate__fadeIn');
                projectRef.current.classList.add('animate__fadeOut');
            }
        });
    };
    useEffect(() => {
        const projectObserver = new IntersectionObserver(intersectionObserverCallback, intersectionObserverOptions);
        projectObserver.observe(projectRef.current);
    
        return () => {
            projectObserver.disconnect();
        };
    });
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return() => window.removeEventListener('resize', handleResize)
    },[])
    return (
        <div ref={projectRef} className={`animate__animated project-container d-flex align-items-center justify-content-center px-${isSmallScreen ? '0' : '4'} pb-5 text-start`}>
            <a href={url}>
                <img src={img} className='rounded-4 proj-img mb-4' alt='project'/>
                <h4 className='proj-head'>{title}</h4>
                <p className='fw-normal proj-desc'>{content}</p>
            </a>
        </div>
    )
}

export default ProjectTile