import React, {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import pic1 from '../assets/images/contacts.jpg'
import {BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi'
import { BsInstagram, BsMessenger } from 'react-icons/bs'
import 'animate.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const form = useRef();
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const contactFormRef = useRef(null);

    const intersectionObserverOptions = {
        threshold: 0.2,
    };
    const intersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                    contactFormRef.current.classList.remove('animate__fadeOut');
                    contactFormRef.current.classList.add('animate__fadeIn');
            } else {
                    contactFormRef.current.classList.remove('animate__fadeIn');
                    contactFormRef.current.classList.add('animate__fadeOut');
            }
        });
    };
    useEffect(() => {
        // Create Intersection Observer for Contact Form
        const contactFormObserver = new IntersectionObserver(intersectionObserverCallback, intersectionObserverOptions);
        contactFormObserver.observe(contactFormRef.current);
    
        return () => {
            contactFormObserver.disconnect();
        };
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const sendEmail = (e) => {
        e.preventDefault();
        const clientEmail = formData.email;
        const templateParams = {
            to_email: 'isengvictoria19@gmail.com', // Replace with your email address
            from_email: clientEmail,
            name: formData.name,
            message: formData.message,
        };
        emailjs.send('service_qgm5zev', 'template_svb8r3m', templateParams, 'czBrrkwuIpofrNnSS')
            .then((result) => {
                setToastMessage('Message Sent Successfully to Developer!');
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000); // Hide the toast after 1 second
            }).catch((error) => {
                console.log(error.text)
                setToastMessage('Message Delivery Failed. Please try again.');
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 3000); // Hide the toast after 1 second
            })
        e.target.reset()
    }
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth-400 < 576);
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return() => window.removeEventListener('resize', handleResize)
    },[])
    return (
        <div id='contact' ref={contactFormRef} className={`animate__animated p-1 d-flex justify-content-center align-items-center flex-${isSmallScreen ? 'column-reverse' : 'row'}`}>
            <div className={`col-${isSmallScreen ? '12 d-none' : '6'} img-container-form z-1n p-0`}>
                <img id='contact-img' style={{width: isSmallScreen ? '100%' : '560px', height: '100%'}} src={pic1} alt='contact' className='rounded-4' />
            </div>
            <div className={`col-${isSmallScreen ? '12' : '6'} contact_form rounded-4 ${isSmallScreen ? 'p-2 my-5' : 'p-3' } `}>
                <div className='d-flex flex-column align-items-start text-start p-3 col-8'>
                    <h1 className='contact-header' >Collab with Me!</h1>
                    <figcaption className='fw-normal fs-5'>Reach out to me and let's discuss your project!</figcaption>
                    <div className='d-flex justify-content-center align-items-start gap-4 py-3'>
                        <a href='https://www.facebook.com/jeselle.victoria.1' className='icons p-2 me-3'><BiLogoFacebook size={28} /></a>
                        <a href='https://m.me/jeselle.victoria.1' className='icons p-2 me-3'><BsMessenger size={28} /></a>
                        <a href='https://www.instagram.com/jsllrs_iseng/' className='icons p-2 me-3'><BsInstagram size={28} /></a>
                        <a href='https://www.linkedin.com/in/iseng-victoria-974780284/' className='icons p-2 me-3'><BiLogoLinkedin size={28} /></a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='row g-2 p-3'>
                    <div className='col-12'>
                        <input value={formData.name} onChange={handleChange} id='name' name='name' placeholder='Full Name' className='w-100 rounded-4 input-fields mb-2 p-3 fs-5 ' type='text'  required/>
                    </div>
                    <div className='col-12'>
                        <input value={formData.email} onChange={handleChange} id='email' name='email' placeholder='Email' className='w-100 rounded-4 input-fields mb-2 p-3 fs-5 ' type='email'  required/>
                    </div>
                    <div className='col-12'>
                        <textarea value={formData.message} onChange={handleChange} name='message' placeholder='Message' className='w-100 rounded-4 input-fields mb-3 p-3 fs-5 ' style={{'resize': 'none', minHeight: '250px'}} required ></textarea>
                    </div>
                    <div className='col-12'>
                        <button type='submit' className='w-100 p-3 rounded-4 fs-5 contact-btn'>Send Message</button>
                    </div>
                </form>
            </div>
            {showToast && (
            <div className="toast show fw-medium animate_drop" role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'fixed', top: '5%', zIndex:'9999', 'background-color': 'var(--darker-gray)', color: 'var(--white)' }} >
                <div className="toast-body">{toastMessage}</div>
            </div>
            )}
        </div>
    )
}

export default Contact