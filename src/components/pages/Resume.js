import React from "react";
import '../styles/Resume.css'
import pdf from '../../assets/resume.pdf'


export default function Resume() {
    return (
        <section className="Resume">
            <h2>Resume</h2>
            <a href={pdf} target='_blank' rel="noreferrer">Click here for a downloadable pdf of my resume.</a>
            <div className="ResumeContent">
                <h3>Summary</h3>
                <p>Full-stack Web Developer driven by creative problem solving, improving user experience, and process improvement. Combining newly acquired coding skill with 10 years of experience as a project lead in business operations and a Bachelor’s degree in Business Administration through the Business Leadership Program. Thrive in a deadline-driven environment, and excel at learning new concepts quickly.</p>
                <h3>Technical Skills</h3>
                <ul>
                    <li><u>Front-End:</u> HTML, CSS, JavaScript, React, jQuery, Bootstrap</li>
                    <li><u>Back-End:</u> Express, Node, RESTful APIs, MySQL, MongoDB, GraphQL, JSON</li>
                    <li><u>Utility:</u> Git, Heroku, Google Suite, Microsoft Office Suite</li>
                </ul>
                <h3>Non-Technical Skills</h3>
                <ul>
                    <li>Salesforce System Administration</li>
                    <li>Public Speaking</li>
                    <li>Strong Written and Verbal Communication</li>
                    <li>GDPR Compliance and Data Privacy</li>
                </ul>
                <h3>Work Experience</h3>
                    <div className="WorkExperience">
                        <p className="left">SHW</p>
                        <p className="right">August 2021 - March 2022</p>
                        <p className="left">Director, Event Technology & Chief Privacy Officer</p>
                        <p className="right">Seattle, WA</p>
                        <ul>
                            <li>Oversaw Video Production line of business, producing livestream and pre-recorded events that included continuing education for dentists, multi-day customer conferences, and training. Events occurred across multiple time zones and languages.</li>
                            <li>Configured NetSuite ERP as a financial operations platform by gathering requirements from cross-functional teams and directing implementation. Established both company-wide and individual contributor business processes for the new enterprise platform.</li>
                            <li>Wrote, implemented, and enforced compliance policies that met GDPR standards.</li>
                        </ul>
                    </div>
                    <div className="WorkExperience">
                        <p className="left">SHW</p>
                        <p className="right">January 2017 - July 2021</p>
                        <p className="left">Business Operations Manager</p>
                        <p className="right">Seattle, WA</p>
                        <ul>
                            <li>As Head of the IT Department managed the annual IT budget, reported to senior management and negotiated IT support and SaaS vendor contracts.</li>
                            <li>Wrote and implemented standardized Operating Manual for event planning, including standard operating procedures and 15 templates.</li>
                            <li>Optimized training and onboarding for new event managers.</li>
                            <li>Redesigned budget template in Excel, reducing human errors that saved up to $70k annually.</li>
                        </ul>
                    </div>
                    <div className="WorkExperience">
                        <p className="left">SHW</p>
                        <p className="right">September 2014 - January 2017</p>
                        <p className="left">Project Manager & Salesforce Administrator</p>
                        <p className="right">Seattle, WA</p>
                        <ul>
                            <li>Transitioned company from end-of-life SQL server to new custom-built Salesforce instance.</li>
                            <li>Reduced expense report processing time by 60% with a custom-built, cloud-enabled process in Salesforce, providing real-time data that was more accurate and accessible.</li>
                            <li>Built shift app automating time tracking and expenses for on-call staff, saved Payroll 10hrs per month</li>
                            <li>Led rebranding efforts under new CEO including a new company website on Squarespace and tasked to source a new logo design.</li>
                        </ul>
                    </div>
                    <div className="WorkExperience">
                        <p className="left">SHW</p>
                        <p className="right">May 2012 - September 2014</p>
                        <p className="left">Registration and Guest Services Coordinator</p>
                        <p className="right">Seattle, WA</p>
                        <ul>
                            <li>Constructed event registration websites to collect attendee data and processed data for reports.</li>
                            <li>Provided high quality customer service to clients, attendees, and partners.</li>
                            <li>Maintained data integrity and privacy compliance while providing clients, vendors, and internal teams with necessary reports for successful event production.</li>
                        </ul>
                    </div>
            </div>
        </section>
    )
}