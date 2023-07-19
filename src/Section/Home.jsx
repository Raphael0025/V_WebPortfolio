import React from 'react'
import pic from '../assets/images/profile pic.jpg'

function Home() {
    return (
        <div className='d-flex justify-content-center align-items-center h-100 px-5'>
            <div className='col-6 text-start ps-5'>
                <h5>Hello!</h5>
                <h1 className='fw-bold mt-5'>I'm Jeselle, a Mobile and Web UI/UX Designer specializing in creating engaging digital experiences.</h1>
                <p className='fw-light fs-6 pe-5'>I have a passion for combining aesthetics and usability to design intuitive and visually appealing interfaces. With a user-centered approach, I strive to deliver seamless and meaningful interactions. I'm excited to share my portfolio and collaborate on innovative design projects. Let's create something amazing together!</p>
                <div className='d-flex justify-content-between align-items-start w-50 mt-5'>
                    <button className='jv-btn px-4 py-2 rounded-3 fs-5 fw-medium'>About Me</button>
                    <button className='jv-btn px-4 py-2 rounded-3 fs-5 fw-medium'>Projects</button>
                </div>
            </div>
            <div className='col-6 d-flex justify-content-center align-items-center'>
                <div className='shape position-absolute z-1n' />
                <div className='img-container z-2 rounded-4'>
                    <img alt='myself' width="450" height="350" className='profile rounded-4' src={pic}/>
                </div>
            </div>
        </div>
    )
}

export default Home