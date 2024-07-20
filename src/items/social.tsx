
export const Social = () => {
    const socialMedia = [
        { href: 'https://www.instagram.com/accounts/onetap/?next=%2F', image: `${process.env.PUBLIC_URL}/Instagram.jpg`, alt: 'icon instagram' },
        { href: 'https://www.x.com', image: `${process.env.PUBLIC_URL}/Twitter.jpg`, alt: 'icon c' },
        { href: 'https://www.linkedIn.com', image: `${process.env.PUBLIC_URL}/LinkedIn.jpg`, alt: 'icon linkedIn' },
        { href: 'https://www.facebook.com', image: `${process.env.PUBLIC_URL}/facebook.jpg`, alt: 'icon facebook' },
    ];
    return (
        <div className="social">
            {socialMedia.map((link, index) => (
                <div className="social-item" key={index}>
                    <a
                        href={link.href}
                        className="social-item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social-item-link-icon"
                            src={link.image}
                            alt={link.alt}
                        />
                    </a>
                </div>
            ))}
        </div>
    )
}