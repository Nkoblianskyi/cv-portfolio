

export const Header = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/sample.pdf';
        link.download = 'sample.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navigation = [
        { href: '/', label: 'Home' },
        { href: '/', label: 'About Me' },
        { href: '/', label: 'Services' },
        { href: '/', label: 'Projects' },
        { href: '/', label: 'Testimonials' },
        { href: '/', label: 'Contact' }
    ]
    return (
        <header className="header">
            <div className='header-logo'>
                <img
                    src="/public/logo.jpg"
                    alt="logo"
                    className='header-logo-img'
                    width={80}
                    height={60} />
                <div className="header-slogan">
                    <h1 className="header-logo-title">Nykyta Koblyanskyi</h1>
                    <span className="header-logo-span">Create the future by coding the present!</span>
                </div>
            </div>
            <nav className="header-nav">
                <ul className="header-list">
                    {navigation.map((link, index) => (
                        <li className="header-item" key={index}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="header-btn btn" onClick={handleDownload}>Download CV</button>
        </header>
    )
}