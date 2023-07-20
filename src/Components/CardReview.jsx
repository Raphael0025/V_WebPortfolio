import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery'
import { FaStar } from 'react-icons/fa';

function CardReview({ id, img, name, review }) {
    const [isTextOverflowing, setIsTextOverflowing] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const componentRef = useRef(null);
    const [charactersCount, setCharactersCount] = useState(400);
    

    let content = expanded ? review.substring(0, charactersCount) : review
    useEffect(()=>{
        setIsTextOverflowing(review.length > charactersCount)
    },[])

    const toggleExpand = () => {
        setExpanded(!expanded);
        const newWidth = expanded ? '850px' : '350px';
        $(componentRef.current).animate({ width: newWidth }, 500);
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
            <div className='review-text fw-normal' style={{ maxHeight: expanded ? '' : '450px', overflow: expanded ? '' : 'hidden' }} >
                {content} {isTextOverflowing ? '...' : ''}
            </div>
            {isTextOverflowing &&( 
                <div className="see-more-container mt-3 m-0 p-0 d-flex w-100 justify-content-end align-items-end">
                    <button onClick={toggleExpand}>{expanded ? 'See more' : 'See less'}</button>
                </div>
            )}
        </div>
    )
}

export default CardReview;
