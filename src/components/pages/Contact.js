import React from "react";
import '../styles/Contact.css'

export default function Contact() {
    
    return (
        <section className="Contact">
            <h2>Contact</h2>
            <p className="EmailText">Please feel free to contact me by email at <a href={"mailto:frame.nolan@gmail.com"} id="emailContact" >frame.nolan@gmail.com</a>.</p>
            <div className="CardContainer">
                <div className='ContactCard'>
                    <a href='mailto:frame.nolan@gmail.com?subject=Portfolio Inquiry' target="_blank" rel="noreferrer">Email Me</a>
                </div>
                <div className='ContactCard'>
                    <a href='https://www.linkedin.com/in/framenolan/' target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className='ContactCard'>
                    <a href='https://github.com/framenolan' target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </section>
    )
};