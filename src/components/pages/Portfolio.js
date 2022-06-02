import React from "react";
import Project from "../Project";
import '../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <section className="Portfolio">
            <h2>Portfolio</h2>
            <Project name="Buddygram" url="https://safe-mesa-41776.herokuapp.com/login" repo="https://github.com/framenolan/buddygram"/>
            <Project name="Where's the Beer?" url="https://framenolan.github.io/wheres-the-beer/" repo="https://github.com/framenolan/wheres-the-beer"/>
            {/* <Project name="WIP: Arcade Game" url="" repo="https://github.com/kayjinyi/cool-game/"/> */}
            <Project name="E-Commerce Backend" url="https://enigmatic-tor-94718.herokuapp.com/" repo="https://github.com/framenolan/ecommerce-backend"/>
            <Project name="Weather Dashboard" url="https://framenolan.github.io/weather-dashboard/" repo="https://github.com/framenolan/weather-dashboard"/>
            <Project name="Team Profile Generator" url="" repo="https://github.com/framenolan/team-profile-generator"/>
            <Project name="Workday Scheduler" url="https://framenolan.github.io/workday-scheduler/" repo="https://github.com/framenolan/workday-scheduler"/>
        </section>
    )
}