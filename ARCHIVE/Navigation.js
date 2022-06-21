import React from 'react';
import './styles/Navigation.css'

function Navigation({currentPage, handlePageChange}) {	

	return (
		<ul className="Navigation">
			<li>
			<button href='/'
				onClick={() => handlePageChange('About')}
				className={currentPage=="About"?"CurrentPage":"OtherPage"}>About</button>
			</li>
			<li>
			<button href='/portfolio'
				onClick={() => handlePageChange('Portfolio')}
				className={currentPage==="Portfolio"?"CurrentPage":"OtherPage"}>Portfolio</button>
			</li>
			<li>
			<button href='/resume'
				onClick={() => handlePageChange('Resume')}
				className={currentPage==="Resume"?"CurrentPage":"OtherPage"}>Resume</button>
			</li>
			<li>
			<button href='/contact'
				onClick={() => handlePageChange('Contact')}
				className={currentPage==="Contact"?"CurrentPage":"OtherPage"}>Contact</button>
			</li>
		</ul>
  );
}

export default Navigation;
