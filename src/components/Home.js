import React, { useState } from 'react';
import './Home.css'

const Home = ({ name, image, job, info }) => {

    const [showMore, setshowMore] = useState(false);

    return (
        <section className="section home-container">
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="info-container">
                <h1>Hi! I'm {name}</h1>
                <h2>{job}</h2>
                <p>
                    {
                        showMore ? info : `${info.substring(0, 300)}...`
                    }
                    <button className="info-button" onClick={() => setshowMore(!showMore)}>
                        {
                            showMore ? "Show Less" : `Show More`
                        }
                    </button>
                </p>
                <div className="buttons-container">
                    <a
                        href="your-cv-download-link.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-button"
                    >
                        Download CV
                    </a>
                    <a href="/contact" className="home-button">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
