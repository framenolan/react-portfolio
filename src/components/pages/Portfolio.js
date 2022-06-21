import React from "react";
import Project from "../Project";
import '../styles/Portfolio.css'
import Wheres from '../../assets/Wheres-The-Beer.png'
import Star from '../../assets/Star-Arcade.png'
import BuddyGram from '../../assets/BuddyGram.png'
import Weather from '../../assets/Weather-Dashboard.png'
import Team from '../../assets/Team-Profile-Generator.png'
import Workday from '../../assets/Workday-Scheduler.png'


export default function Portfolio() {
    return (
        <section className="Portfolio">
            <h2>Portfolio</h2>
            <Project name="Where's the Beer?" image={Wheres} url="https://framenolan.github.io/wheres-the-beer/" repo="https://github.com/framenolan/wheres-the-beer"/>
            <Project name="Star Arcade" image={Star} url="https://kooler-games.herokuapp.com/" repo="https://github.com/kayjinyi/cool-game/"/>
            <Project name="Buddygram" image={BuddyGram} url="https://safe-mesa-41776.herokuapp.com/login" repo="https://github.com/framenolan/buddygram"/>
            {/* <Project name="E-Commerce Backend" url="https://enigmatic-tor-94718.herokuapp.com/" repo="https://github.com/framenolan/ecommerce-backend"/> */}
            <Project name="Weather Dashboard" image={Weather} url="https://framenolan.github.io/weather-dashboard/" repo="https://github.com/framenolan/weather-dashboard"/>
            <Project name="Team Profile Generator" image={Team} url="https://github.com/framenolan/team-profile-generator" repo="https://github.com/framenolan/team-profile-generator"/>
            <Project name="Workday Scheduler" image={Workday} url="https://framenolan.github.io/workday-scheduler/" repo="https://github.com/framenolan/workday-scheduler"/>
        </section>
    )
}