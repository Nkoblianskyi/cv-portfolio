import React, { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/sample.pdf';
        link.download = 'sample.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    const navigation = [
        { href: '/', label: 'Home' },
        { href: '/', label: 'About Me' },
        { href: '/', label: 'Services' },
        { href: '/', label: 'Projects' },
        { href: '/', label: 'Testimonials' },
        { href: '/', label: 'Contact' }
    ];

    return (
        <header className="header">
            <div className='header-logo'>
                <img
                    src="/cv-portfolio/logo.jpg"
                    alt="logo"
                    className='header-logo-img'
                    />
                <div className="header-slogan">
                    <h1 className="header-logo-title">Nykyta Koblyanskyi</h1>
                    <span className="header-logo-span">Create the future by coding the present!</span>
                </div>
            </div>
            <button className="header-menu-btn btn" onClick={toggleMenu}>
                Menu
            </button>
            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <div className="header-list">
                    {navigation.map((link, index) => (
                        <div className="header-item" key={index}>
                            <a href={link.href}>{link.label}</a>
                        </div>
                    ))}
                </div>
            </nav>
            <button className="header-btn btn" onClick={handleDownload}>Download CV</button>
        </header>
    );
};
