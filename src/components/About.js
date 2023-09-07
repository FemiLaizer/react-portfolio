import React from 'react'

const About = ({ image, name }) => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>

            <div className="about_container bd-grid">
                <div className="about_img">
                    <img src={image} alt={name} />
                </div>

                <div>
                    <h2 className="about_subtitle">I'm Femi Laizer</h2>
                    <p className="about_text">A Frontend Developer, I have ability to identify operational challenges and
                        the methods to
                        solving
                        them. I have a customer-focused approach to work, and strong drive to see work through to
                        completion.
                        To give you best customer service. I had my training with @Zero-to-Mastery Academy
                        Feel free to checkout my work at the project section
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About