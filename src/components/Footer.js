import React from "react";
import './styles/Footer.css'

export default function Footer() {
    return (
        <footer className="Footer">
            <ul>
                <li>
                    <a href="https://github.com/framenolan" target='_blank' rel="noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/framenolan/" target='_blank' rel="noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href="mailto:frame.nolan@gmail.com" target='_blank' rel="noreferrer">Email</a>
                </li>
            </ul>
        </footer>
    )
}