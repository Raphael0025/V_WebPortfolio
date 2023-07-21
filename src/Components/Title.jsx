import React, { useEffect, useRef } from 'react';
import 'animate.css';

function Title({title}) {
    const titleRef = useRef(null);
    const intersectionObserverOptions = {
        threshold: 0.2,
    };
    const intersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                titleRef.current.classList.add('animate__lightSpeedInRight');
            } else {
                titleRef.current.classList.remove('animate__lightSpeedInRight');
            }
        });
    };
    useEffect(() => {
        const titleObserver = new IntersectionObserver(intersectionObserverCallback, intersectionObserverOptions);
        titleObserver.observe(titleRef.current);
        return () => {
            titleObserver.disconnect();
        };
    });
    return (
        <h1 ref={titleRef} className='animate__animated fw-bold px-4 py-4 m-0'>{title}</h1>
    )
}

export default Title