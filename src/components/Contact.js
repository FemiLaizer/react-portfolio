import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact_container bd-grid">
                <form action="" className="contact_form">
                    <input type="text" placeholder="Name" className="contact_input" />
                    <input type="mail" placeholder="Email" className="contact_input" />
                    <textarea name=" " id="" cols="0" rows="10" className="contact_input"></textarea>

                    <input type="button" value="Submit" className="contact_button button" />
                </form>
            </div>
        </section>
    )
}

export default Contact