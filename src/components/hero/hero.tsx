
export const Hero = () => {

    const socialMedia = [
        {href: '/instagram.com', image:'/favicon.ico', alt: 'icon instagram'},
        {href: '/x.com', image:'/favicon.ico', alt: 'icon c'},
        {href: '/linkedIn.com', image:'/favicon.ico', alt: 'icon linkedIn'},
        {href: '/facebook.com', image:'/favicon.ico', alt: 'icon facebook'},
    ]

    return (
        <div className="hero">
            <div className="hero-text">
                <span className="hero-text-top">Hi , I am</span>
                <h1 className="hero-text-title">Nykyta Koblianskyi</h1>
                <span className="hero-text-specialty">Front-end <span className="hero-text-span">developer</span></span>
                <p className="hero-text-description">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className="hero-btn btn">Hire Me</button>
            </div>
            <div className="hero-right">
                <div className="hero-right-circle">
                    <img 
                    src="/iam.jpg" 
                    alt="I'm"
                    className="hero-right-circle-img"
                    />
                </div>
                <div className="hero-right-social">
                    {socialMedia.map((link, index) => (
                        <div className="hero-right-social-item" key={index}>
                            <a href={link.href} className="hero-right-social-item-link">
                                <img 
                                className="hero-right-social-item-link-icon"
                                src={link.image} 
                                alt={link.alt}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}