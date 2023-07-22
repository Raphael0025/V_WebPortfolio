import React, {useState, useEffect} from 'react'
import logo from '../assets/images/JV Logo.png'

function NavBar() {
    const [activeNavItem, setActiveNavItem] = useState('home');
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const handleNavItemClick = (section) => {
        setActiveNavItem(section);
    };
    return (
        <nav className='navbar fixed-top navbar-expand-lg py-0 bg-body-tertiary z-1'>
            <div className='container-fluid'>
                <a className='navbar-brand ' href='#home'><img src={logo} alt='logo' /></a>
                <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id="navbarText">
                    <ul className='navbar-nav '>
                        <li className={`nav-item`}><a onClick={() => handleNavItemClick('home')} className={`nav-link fw-medium ${activeNavItem === 'home' ? 'active' : ''} `} href='#home'>Home</a></li>
                        <li className={`nav-item`}><a onClick={() => handleNavItemClick('service')} className={`nav-link fw-medium ${activeNavItem === 'service' ? 'active' : ''} `} href='#service'>Services</a></li>
                        <li className={`nav-item`}><a onClick={() => handleNavItemClick('project')} className={`nav-link fw-medium ${activeNavItem === 'project' ? 'active' : ''} `} href='#project'>Projects</a></li>
                        <li className={`nav-item`}><a onClick={() => handleNavItemClick('feedback')} className={`nav-link fw-medium ${activeNavItem === 'feedback' ? 'active' : ''} `} href='#feedback'>Feedbacks</a></li>
                        <li className={`nav-item`}><a onClick={() => handleNavItemClick('contact')} className={`nav-link fw-medium ${activeNavItem === 'contact' ? 'active' : ''} `} href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar