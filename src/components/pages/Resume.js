import React from "react";
import '../styles/Resume.css'
import pdf from '../../assets/resume.pdf'


export default function Resume() {
    return (
        <section className="Resume">
            <h2>Resume</h2>
            <a href={pdf} target='_blank' rel="noreferrer">Click here for my pdf</a>
            <h3>Front End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
            </ul>
            <h3>Back End Proficiencies</h3>
            <ul>
                <li>Routing</li>
                <li>Node</li>
                <li>Express</li>
                <li>Databases: MySQL, Mongo, GraphQL</li>
            </ul>
        </section>
    )
}