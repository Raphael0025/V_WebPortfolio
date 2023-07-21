import React, {useEffect, useState} from 'react'

function ServiceButton({icon, title, content, isActive, onClick }) {
    const [color, setColor] = useState('black')

    useEffect(() => {
        setColor(isActive ? 'white' : 'black')
    }, [isActive])

    return (
        <button onClick={onClick} className={`service-button ${isActive ? 'activeBtn' : ''} w-100 rounded-3 mb-3 p-3 flex-column text-start`} >
            <div className='d-flex'>
                <div color={color}>{icon}</div>
                <h4 className='m-0 px-3' color={color}>{title}</h4>
            </div>
            <div className={`mt-3 ${isActive ? '' : 'd-none'}`} color={color}>{content}</div>
        </button>
    )
}

export default ServiceButton