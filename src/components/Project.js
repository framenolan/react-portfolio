import React, { useState } from 'react';

export default function Project(props) {
    // const [project, setProject] = useState('')
    
    return (
        <div className='Project'>
            <p>{props.name}</p>
            <a href={props.url}>Link to Deployed Project</a>
            <a href={props.repo}>Link to Project Repo</a>
        </div>
    )
}