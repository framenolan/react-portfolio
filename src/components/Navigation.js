import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css'

function Navigation() {	

	return (
		<ul className="Navigation">
			<li>
				<a href='/' to="/">About</a>
			</li>
			<li>
				<a href='/portfolio' to="/portfolio">Portfolio</a>
			</li>
			<li>
				<a href='/resume' to="/resume">Resume</a>
			</li>
			<li>
				<a href='/contact' to="/contact">Contact</a>
			</li>
		</ul>
  );
}

export default Navigation;
