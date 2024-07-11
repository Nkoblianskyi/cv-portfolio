import React from "react";

interface CardProps {
    cards: { text: string; img: string; href: string; alt: string }[];
}

export const Card: React.FC<CardProps> = ({ cards }) => {
    return (
        <div className="card">
            <div className="card-wrapp">
                {cards.map((link, index) => (
                    <div
                        className="card-item"
                        key={index}
                    >
                        <a href={link.href} className="card-item-link">
                            <div className="card-item-container">
                                <img
                                    className="card-item-container-img"
                                    src={link.img}
                                    alt={link.alt}
                                />
                            </div>
                            <div className="card-item-text">
                                <p className="card-item-text-item">{link.text}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
