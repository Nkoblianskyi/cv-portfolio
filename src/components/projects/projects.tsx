import React, { useState } from 'react';
import { ProjectCard } from '../../elements/card';


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
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
            ]
        },
        {
            text: 'App application', cards: [
                { text: 'App Design 1', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'App Design 2', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
            ]
        },
        {
            text: 'Blog', cards: [
                { text: 'Blog Post Design 1', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Blog Post Design 2', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
                { text: 'Yet Another Landing Page Design', img: '/cv-portfolio/logo.jpg', href: '/', alt: 'sdfsd' },
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
                            className={`projects-wrapp-btn-item ${selectedButtonIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => handleButtonClick(index)}
                        >
                            {link.text}
                        </button>
                    ))}
                </div>
            </div>
                {projectBtn[selectedButtonIndex].cards.map((card, index) => (
                        <div className="swiper-slide-content">
                            <ProjectCard cards={[card]} />
                        </div>
                ))}
        </div>
    );
};
