import React from "react";
import '../styles/Resume.css'
import pdf from '../../assets/resume.pdf'


export default function Resume() {
    return (
        <section className="Resume">
            <h2>Resume</h2>
            <a href={pdf} target='_blank' rel="noreferrer">Click here for my pdf</a>
        </section>
    )
}