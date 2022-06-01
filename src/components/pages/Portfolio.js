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
            <Project name="" url="" repo=""/>
            <Project name="" url="" repo=""/>
            <Project name="" url="" repo=""/>
            <Project name="" url="" repo=""/>

        </section>
    )
}