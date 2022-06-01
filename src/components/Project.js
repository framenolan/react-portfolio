import React, { useState } from 'react';
import './styles/Project.css'
import github from '../assets/GitHub.png'
import wgithub from '../assets/GitHubWhite.png'
import play from '../assets/DeployedApp.png'
import wplay from '../assets/DeployedAppWhite.png'

export default function Project(props) {
    // const [project, setProject] = useState('')
    
    return (
        <div className='Project'>
            <p className='ProjectName'>{props.name}</p>
            <a href={props.url} className='DeployedLink' target="_blank"><img src={wplay} height="32px" width="32px"></img></a>
            <a href={props.repo} className='RepoLink' target="_blank"><img src={wgithub} height="32px"></img></a>
        </div>
    )
}