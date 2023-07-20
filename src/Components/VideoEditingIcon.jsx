import React from 'react';
import { FaFilm } from 'react-icons/fa';
import {BsImageFill} from 'react-icons/bs'

const FilmWithImageIcon = () => {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <FaFilm className='film-icon' size={28} />
            <div style={{ position: 'absolute', top: '80%', left: '10%', width: '100%',transform: 'translate(-50%, -50%)', zIndex: 2, }} >
                <BsImageFill size={24} />
            </div>
        </div>
    );
};

export default FilmWithImageIcon;
