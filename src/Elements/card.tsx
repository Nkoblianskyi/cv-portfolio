    import React, { useEffect } from "react";
    import Swiper from "swiper";
    import "swiper/swiper-bundle.css";

    interface CardProps {
    cards: { text: string; img: string; href: string; alt: string }[];
    }

    export const ProjectCard: React.FC<CardProps> = ({ cards }) => {
    useEffect(() => {
        const swiper = new Swiper(".swiper-container", {
        slidesPerView: 1, // Display only one slide at a time
        spaceBetween: 0, // No space between slides
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        });

        return () => {
        swiper.destroy();
        };
    }, []); // Ensure useEffect runs only once on component mount

    return (
        <div className="card-container">
        <div className="swiper-container">
            <div className="swiper-wrapper">
            {cards.map((link, index) => (
                <div className="swiper-slide" key={index}>
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
        </div>
    );
    };
