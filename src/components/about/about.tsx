
export const About = () => {
    return (
        <div className="about">
            <div className="about-right">
                <img 
                src="/iam2.jpg" 
                alt="I'm"
                width={520}
                height={520}
                className="about-img-back"
                />
                <div className="about-circle"> </div>
            </div>
            <div className="about-text">
                <span className="about-text-top">Hi , I am</span>
                <h1 className="about-text-title">Nykyta Koblianskyi</h1>
                <span className="about-text-specialty">Front-end <span className="hero-text-span">developer</span></span>
                <p className="about-text-description">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button className="about-btn btn">Hire Me</button>
            </div>            
        </div>
    )
}