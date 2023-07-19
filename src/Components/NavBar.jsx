import React from 'react'
import logo from '../assets/images/JV Logo.png'

function NavBar() {
    const handleClick = (itm) => {
        scrollToSection(itm);
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className='navbar fixed-top navbar-expand-md p-0 justify-content-center'>
            <div className='p-0 m-0 container'>
                <a className='navbar-brand ' href='#home'><img src={logo} alt='logo' /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id="navbarText">
                    <ul className='navbar-nav '>
                        <li className='nav-item'><a className='nav-link active fw-medium' href='#home'>Home</a></li>
                        <li className='nav-item'><a className='nav-link fw-medium' href='#service'>Services</a></li>
                        <li className='nav-item'><a className='nav-link fw-medium' href='#project'>Projects</a></li>
                        <li className='nav-item'><a className='nav-link fw-medium' href='#feedback'>Feedbacks</a></li>
                        <li className='nav-item'><a className='nav-link fw-medium' href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar