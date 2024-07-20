import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language">
            <button className="language-btn" onClick={() => changeLanguage('en')}>EN</button>
            <button className="language-btn" onClick={() => changeLanguage('uk')}>UA</button>
            <button className="language-btn" onClick={() => changeLanguage('pl')}>PL</button>
        </div>
    );
};
