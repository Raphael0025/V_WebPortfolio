import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery'
import { FaStar } from 'react-icons/fa';

function CardReview({ id, img, name, review }) {
    const [isTextOverflowing, setIsTextOverflowing] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const componentRef = useRef(null);
    const [charactersCount, setCharactersCount] = useState(320);
    

    let content = expanded ? review.substring(0, charactersCount) : review
    useEffect(()=>{
        setIsTextOverflowing(review.length > charactersCount)
    },[review, charactersCount])

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth-400 < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return() => window.removeEventListener('resize', handleResize)
    },[])

    const toggleExpand = () => {
        setExpanded(!expanded);
        if(isSmallScreen){
            const newWidth = expanded ? '380px' : '380px'
            const newHeight = expanded ? '650px' : '530px'
            const newFontSize = expanded ? '0.6rem' : '0.8rem'
            $(componentRef.current).animate({ width: newWidth, minHeight: newHeight, fontSize: newFontSize, }, 500);
        } else {
            const newWidth = expanded ? '850px' : '350px';
            $(componentRef.current).animate({ width: newWidth }, 500);
        }
    };
    return (
        <div id={id} ref={componentRef} className={`bg-light rounded-3 slide d-flex flex-column align-items-start text-start p-2 py-4 mx-4 my-2`} style={{ position: expanded ? 'relative' : 'absolute', zIndex: expanded ? 1 : 3, overflow: expanded ? '' : 'hidden' }}>
            <div className='d-flex flex-row gap-3 pb-3'>
                <img src={img} className='feed-img' alt={name} />
                <div className='d-flex flex-column justify-content-start align-items-start'>
                    <h4 className='fw-bold '>{name}</h4>
                    <div>
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} color="gold" />
                        ))}
                    </div>
                </div>
            </div>
            <div className='review-text fw-normal ' style={{ maxHeight: expanded ? '' : '450px', overflow: expanded ? '' : 'hidden' }} >
                {content} {isTextOverflowing  && (<span onClick={toggleExpand}>{expanded ? '...See more' : '...See less'}</span>)}
            </div>
        </div>
    )
}

export default CardReview;
