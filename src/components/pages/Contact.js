import React, { useState } from "react";
// import validator from 'validator';

export default function Contact() {
    
    // const [emailError, setEmailError] = useState('');
    // const validateEmail = (e) => {
    //     let email = e.target.value

    //     if (validator.isEmail(email)) {
    //         setEmailError('Valid')
    //     } else {
    //         setEmailError('Please enter a valid email address')
    //     }
    // }
    
    return (
        <section className="Contact">
            <h2>Contact</h2>
            <form className="ContactForm">
                <input
                    // value={contactName}
                    name="contactName"
                    // onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    // value={emailAddress}
                    name="emailAddress"
                    // onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <input
                    // value={contactName}
                    name="contactName"
                    // onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                
            </form>
        </section>
    )
}