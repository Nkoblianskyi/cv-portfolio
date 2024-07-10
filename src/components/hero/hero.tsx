import React, { useState, useEffect } from 'react';
import { Modal } from './modal';

export const Hero: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedShowModal = localStorage.getItem('showModal');
        if (storedShowModal) {
            setShowModal(JSON.parse(storedShowModal));
        }
    }, []);

    const openModal = () => {
        setShowModal(true);
        localStorage.setItem('showModal', JSON.stringify(true));
    };

    const socialMedia = [
        { href: 'https://www.instagram.com/', image:'/cv-portfolio/Instagram.jpg', alt: 'icon instagram' },
        { href: 'https://www.x.com', image:'/cv-portfolio/Twitter.jpg', alt: 'icon c' },
        { href: 'https://www.linkedIn.com', image:'/cv-portfolio/LinkedIn.jpg', alt: 'icon linkedIn' },
        { href: 'https://www.facebook.com', image:'/cv-portfolio/facebook.jpg', alt: 'icon facebook' },
    ];

    const closeModal = () => {
        setShowModal(false);
        localStorage.removeItem('showModal');
    };

    return (
        <div className="hero">
            <div className="hero-text">
                <span className="hero-text-top">Hi , I am</span>
                <h1 className="hero-text-title">Nykyta Koblianskyi</h1>
                <div className="hero-wrapp">
                    <p className="hero-text-specialty">Front-end</p>
                    <p className="hero-text-span">developer</p>
                </div>
                <p className="hero-text-description">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className="hero-btn btn" onClick={openModal}>Hire Me</button>
            </div>
            <div className="hero-right">
                <div className="hero-right-circle">
                    <img 
                        src="/cv-portfolio/iam.jpg" 
                        alt="I'm"
                        className="hero-right-circle-img"
                    />
                </div>
                <div className="hero-right-social">
                    {socialMedia.map((link, index) => (
                        <div className="hero-right-social-item" key={index}>
                            <a 
                                href={link.href} 
                                className="hero-right-social-item-link"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img 
                                    className="hero-right-social-item-link-icon"
                                    src={link.image} 
                                    alt={link.alt}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <Modal 
                    closeModal={closeModal} 
                />
            )}
        </div>
    );
};
