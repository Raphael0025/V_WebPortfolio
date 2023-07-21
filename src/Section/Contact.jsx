import React, {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import pic1 from '../assets/images/contacts.jpg'
import {BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi'
import { BsInstagram, BsMessenger } from 'react-icons/bs'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const form = useRef();
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const sendEmail = (e) => {
        e.preventDefault();
        const clientEmail = formData.email;
        const templateParams = {
            to_email: 'rpbisla0025@gmail.com', // Replace with your email address
            from_email: clientEmail,
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
        };
        emailjs.send('service_0gh9hj4', 'template_j22od16', templateParams, '7WhHrpm5BgAiRtffK')
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
    };
    return (
        <div id='contact' className='p-5 d-flex justify-content-center align-items-center flex-row'>
            <div className='col-6 img-container-form'>
                <img id='contact-img' src={pic1} alt='contact' className='rounded-4' />
            </div>
            <div className='col-6 rounded-4 p-3'>
                <div className='d-flex flex-column align-items-start text-start p-3 col-8'>
                    <h1 className='contact-header'>Collab with Me!</h1>
                    <figcaption className='fw-normal fs-5'>Reach out to me and let's discuss your project!</figcaption>
                    <div className='d-flex justify-content-center align-items-start gap-4 py-3'>
                        <a href='#4' className='icons p-2 me-3'><BiLogoFacebook size={28} /></a>
                        <a href='#1' className='icons p-2 me-3'><BsMessenger size={28} /></a>
                        <a href='#2' className='icons p-2 me-3'><BsInstagram size={28} /></a>
                        <a href='#3' className='icons p-2 me-3'><BiLogoLinkedin size={28} /></a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='row g-2 p-3'>
                    <div className='col-12'>
                        <input value={formData.name} onChange={handleChange} name='name' placeholder='Full Name' className='w-100 rounded-4 input-fields mb-2 p-3 fs-5 ' type='text'  required/>
                    </div>
                    <div className='col-12'>
                        <input value={formData.email} onChange={handleChange} name='email' placeholder='Email' className='w-100 rounded-4 input-fields mb-2 p-3 fs-5 ' type='email'  required/>
                    </div>
                    <div className='col-12'>
                        <textarea value={formData.message} onChange={handleChange} name='message' placeholder='Message' className='w-100 rounded-4 input-fields mb-3 p-3 fs-5 ' style={{'resize': 'none', minHeight: '250px'}} required ></textarea>
                    </div>
                    <div className='col-12'>
                        <button className='w-100 p-3 rounded-4 fs-5 contact-btn'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact