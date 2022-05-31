import React from 'react'
import '../styles/About.css'
import portrait from '../../assets/portrait.jpg'
import avatar from '../../assets/avatar.png'

export default function About() {
    return (
        <section className='About'>
            <h2>About Me</h2>
            <img src={avatar} alt='Professional portrait of Nolan Frame' width='200px' height='200px'/>
            <p className='text1'>Hello, my name is Nolan and I'm a problem solver. For the entirety of my career, the projects I've been most passionate about, most driven by, were the ones where I had to come up with a creative solution to a problem.</p> 
            <p className='text2'>Working at an event agency in Seattle, I realized that problem solving gave a rush of satisfaction that I rarely found in other areas of my work. The solutions that I find myself most proud of were the ones where I learned how to configure a new piece of technology and build a process that made the lives of my colleagues easier. So when the time came for me to challenge myself with a new pursuit, expanding my technology expertise to include coding just made sense.</p>
            <p className='text3'>Since beginning this new chapter, I have really fallen in love with the process of writing code. The frustration of fighting with a bug is only beat by the rush of everything finally clicking into place, and suddenly there's something there, something real that the world can see, and it's something I created. I'm thrilled to have added this to my skills, and I'm excited to use this new skill to fix some problems.</p>
        </section>
    )
}