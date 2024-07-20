
export const Navigation = () => {

    const navigation = [
        { href: 'https://nkoblianskyi.github.io/cv-portfolio/', label: 'Home' },
        { href: '/', label: 'About Me' },
        { href: '/', label: 'Services' },
        { href: '/', label: 'Projects' },
        // { href: '/', label: 'Testimonials' },
        { href: '/', label: 'Contact' }
    ];

    return (
        <div className="header-list">
            {navigation.map((link, index) => (
                <div className="header-item" key={index}>
                    <a href={link.href} className="header-item-link">{link.label}</a>
                </div>
            ))}
        </div>
    )
}