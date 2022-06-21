import React from 'react'
import '../styles/About.css'
import avatar from '../../assets/avatar.png'

export default function About() {
    return (
        <section className='About'>
            <h2>About Me</h2>
            <img src={avatar} alt='Professional portrait of Nolan Frame' width='200px' height='200px'/>
            <p className='text1'>Hello, my name is Nolan and I'm a problem solver. For the entirety of my career, the projects I've been most passionate about, most driven by, were the ones where I had to come up with a creative solution to a problem.</p> 
            <p className='text2'>Working at an event agency in Seattle, I realized that problem solving gave a sense of fulfillment that I rarely found in other areas of my work. The solutions that I find myself most proud of were the ones where I learned how to build a process or configure a new piece of technology that made the business more efficient and improved user experience. So when the time came for me to challenge myself with a new pursuit, expanding my technology expertise to include coding just made sense.</p>
            <p className='text3'>Since beginning this new chapter, I have really fallen in love with the process of writing code. The challenge of fighting with a bug is only beat by the satisfaction of everything finally clicking into place and suddenly there's something there that I created, a real solution to a problem. I'm thrilled to have expanded my repertoire and excited to continue to grow in these new skills.</p>
            <p className='text4'>I'm currently seeking employment as a full-stack web developr or a front-end web developer. I'm based in Seattle, WA, but I'm open to remote opportunities. I'm also interested in collaborations for the right project or partners! Feel free to reach out to me at my email, linked below and on the Contact page.</p>
        </section>
    )
}