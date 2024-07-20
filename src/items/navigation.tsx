import { useTranslation } from "react-i18next";

export const Navigation = () => {
    const { t } = useTranslation();

    const navigation = [
        { href: 'https://nkoblianskyi.github.io/cv-portfolio/', label: t('home') },
        { href: '/', label: t('aboutMe') },
        { href: '/', label: t('services') },
        { href: '/', label: t('projects') },
        // { href: '/', label: 'Testimonials' },
        { href: '/', label: t('contact') }
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