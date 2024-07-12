import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ProjectCard } from '../../elements/card';
import './pagination.scss'

interface Project {
    text: string;
    cards: { text: string; img: string; href: string; alt: string }[];
}

export const Projects: React.FC = () => {
    const projectBtn: Project[] = [
        {
            text: 'Internet Shop', cards: [
                { text: 'AirCalling Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Business Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Ecom Web Page DesignEcom Web Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
            ]
        },
        {
            text: 'Landing Page', cards: [
                { text: 'Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
            ]
        },
        {
            text: 'App application', cards: [
                { text: 'App Design 1', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'App Design 2', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
            ]
        },
        {
            text: 'Blog', cards: [
                { text: 'Blog Post Design 1', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Blog Post Design 2', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
            ]
        },
    ];

    const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setSelectedButtonIndex(index);
    };

    return (
        <div className="projects">
            <h1 className="projects-title">My projects</h1>
            <div className="projects-wrapp">
                <div className="projects-wrapp-btn">
                    {projectBtn.map((link, index) => (
                        <button
                            className="projects-wrapp-btn-item"
                            key={index}
                            onClick={() => handleButtonClick(index)}
                        >
                            {link.text}
                        </button>
                    ))}
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow" //effect: Визначає тип ефекту для слайдера. В даному випадку це "coverflow", що додає 3D ефект слайдам.
                grabCursor={true} // grabCursor: Якщо встановлено в true, курсор миші змінюється на "grabbing
                centeredSlides={true} // centeredSlides: Якщо встановлено в true, слайди будуть центруватися в контейнері.
                slidesPerView={'auto'} //slidesPerView: Визначає кількість слайдів, які відображаються одночасно.
                coverflowEffect={{ 
                    rotate: 50,
                    stretch: 0,
                    depth: 20,
                    modifier: 0.25,
                    slideShadows: true,
                }} // rotate кут повороту . stretch простір між слайдами . depth глибина слайду.
                    // modifier: Множник для масштабування. slideShadows: Якщо встановлено в true, додає тіні
                navigation={false} // Якщо встановлено в true, додає стрілки для навігації між слайдами.
                pagination={{ clickable: true }} // Налаштування пагінації 
                loop={true} // Дозволити зациклювання проектів
                // autoplay={{ delay: 4500, disableOnInteraction: false }} // Автоматичне прокручування
                className="mySwiper"
            >
                {projectBtn[selectedButtonIndex].cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-slide-content">
                            <ProjectCard cards={[card]} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
