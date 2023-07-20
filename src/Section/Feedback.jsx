import React, {useEffect, useState } from 'react'
import Title from '../Components/Title'
import Slider from 'react-slick';
import CardReview from '../Components/CardReview'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Components/slider-styles.css'
import pic1 from '../assets/clients/Rp pic.png'
import pic2 from '../assets/clients/Rona pic.png'
import pic3 from '../assets/clients/David pic.png'
import pic4 from '../assets/clients/Erjohn.png'
import pic5 from '../assets/clients/Jhenell.png'

function Feedback() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setSlideIndex(0);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSlideIndex(next),
    };
    const slides = [
        {
            id: 1,
            imge: pic1,
            name: 'Raphael Isla',
            review: "I am thrilled to provide a glowing feedback and testimony for the exceptional service and finished design project delivered by my designer. It is without a doubt that she is an outstanding professional with a remarkable talent for design. Throughout the entire process, my designer exhibited a level of expertise and creativity that exceeded my expectations. She carefully listened to my requirements and vision, ensuring that every aspect of the project was perfectly aligned with my preferences. Her attention to detail and ability to translate my ideas into visually stunning designs truly amazed me. Moreover, the overall experience of working with my designer was highly enjoyable. Her friendly and approachable nature made the collaboration a pleasure, and her ability to understand and incorporate my feedback effortlessly elevated the project to new heights. I truly appreciated her professionalism, enthusiasm, and genuine passion for her craft. I wholeheartedly recommend my designer to anyone in need of top-notch design services. Her exceptional talent, attention to detail, and dedication to client satisfaction make her an invaluable asset. Without a doubt, she is a standout professional who consistently delivers outstanding designs that are sure to leave a lasting impression.",
        },
        {
            id: 2,
            imge: pic2,
            name: "Rona Fame Lanaria",
            review: "The design is impressive, and I am extremely satisfied with the output. The ideas came from me, starting with sketches, and they were semi-built upon. I'm glad I found Jeselle as the designer because she quickly understood the intended flow of the program. Thank you, and I look forward to future projects/ collaborations!",
        },
        {
            id: 3,
            imge: pic3,
            name: 'David Yun',
            review: "The UI and UX design looks great. The combination of visually appealing design elements and well-organized functionality enhances the overall user experience, making it a delightful and user-friendly interface to interact with. Lastly, I'm able to run it and see the functions. Thank you!",
        },
        {
            id: 4,
            imge: pic4,
            name: 'Erjohn Agustin',
            review: "The design is extremely well-structured, and we're not compromising on quality, and we're not being scrimped on because if it were someone else, it might have been even more expensive, rushed, or poorly designed. That's why finding someone to do the design for us is a big help. Thank you so much!",
        },
        {
            id: 5,
            imge: pic5,
            name: 'Jhenelle Deserie',
            review: "You have the natural ability to hand out presentation material in a very organized way. Your designs are frequently captivating and gorgeous to look at. Thank you!",
        },
    ]
    return (
        <div id='feedback' className='d-flex flex-column align-items-start justify-content-center p-5 mt-5'>
            <Title title={'Feedback'}/>
            <h5 className='mb-5 ps-4 service-desc w-50 text-start'>{`Take a look at these impressive testimonials from my satisfied clients who were highly impressed with the services I provided!`}</h5>
            <div className='container px-5'>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className='d-flex justify-content-center '>
                            <CardReview id={slide.id} name={slide.name} review={slide.review} img={slide.imge} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default Feedback