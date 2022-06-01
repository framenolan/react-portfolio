import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import '../styles/Contact.css'

export default function Contact() {
    const [contactName, setContactName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [visible, setVisible] = useState('hidden')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'contactName') {
            setContactName(inputValue)
        } else if (inputType === 'emailAddress') {
            setEmailAddress(inputValue)
        } else {
            setContactMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(emailAddress)) {
            setVisible('visible')
            setErrorMessage('Email is invalid');
            return;
        }

        setContactName('');
        setEmailAddress('');
        setContactMessage('');
        setVisible('hidden')
    }

    return (
        <section className="Contact">
            <h2>Contact</h2>
            <form className="ContactForm">
                <label for="contactName">Name</label>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                />
                <label for="emailAddress">Email</label>
                <input
                    value={emailAddress}
                    name="emailAddress"
                    onChange={handleInputChange}
                    type="text"
                />
                <span className={visible} id="validationError">Please enter a valid email</span>
                <label for="contactMessage">Message</label>
                <textarea
                    value={contactMessage}
                    name="contactMessage"
                    onChange={handleInputChange}
                    rows="6"
                    cols="50"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </section>
    )
}