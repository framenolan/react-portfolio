import React from 'react';
import './styles/Project.css'
import wgithub from '../assets/GitHubWhite.png'
import wplay from '../assets/DeployedAppWhite.png'

export default function Project(props) {

    return (
        <div className='Project'>
            <div className='ProjectContainer'>
                <div className='ProjectHeader'>
                    <p className='ProjectName'>{props.name}</p>
                    <ul>
                        <a href={props.repo} className='RepoLink' target="_blank" rel="noreferrer"><img src={wgithub} height="32px" alt='icon to open repo'></img></a>
                        <a href={props.url} className='DeployedLink' target="_blank" rel="noreferrer"><img src={wplay} height="32px" width="32px" alt='icon to open deployed app'></img></a>
                    </ul>
                </div>
                <div className='Background' style={{ backgroundImage: `url(${props.image})` }}>
                </div>
            </div>
            <div className='DescriptionContainer'>
                <p className='ProjectDescription'>{props.description}</p>
            </div>
        </div>
    )
}