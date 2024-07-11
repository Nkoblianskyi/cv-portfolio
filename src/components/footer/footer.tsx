import { Logo } from "../../Elements/logo";
import { Navigation } from "../../Elements/navigation";
import { Social } from "../../Elements/social";

export const Footer = () => {

    return (
        <div className='footer'>
                <Logo />
                <nav className='footer-nav'>
                    <Navigation />
                </nav>
                <div className="footer-social">
                    <Social />
                </div>
                <div className='footer-bottom'>
                    <p className='footer-bottom-text'> © 2024 <span className='footer-bottom-text-span'>NykytaKoblianskyi</span> All Rights Reserved , Inc.</p>
                </div>
        </div>
    )
}