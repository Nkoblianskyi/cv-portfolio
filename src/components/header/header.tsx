import React, { useState, useEffect } from 'react';
import { Navigation } from '../../items/navigation';
import { Logo } from '../../items/logo';
import { LanguageSelector } from '../../items/languageSelector';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 375);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV-Koblianskyi.pdf';
        link.download = '/CV-Koblianskyi.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 375);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <Logo />
            <button className="header-menu-btn btn" onClick={toggleMenu}>
                Menu
            </button>
            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <Navigation />
            </nav>
            <div>
                <LanguageSelector />
            </div>
            <button className="header-btn btn" onClick={handleDownload}>
                {isSmallScreen ? 'CV' : 'Download CV'}
            </button>
        </header>
    );
};
