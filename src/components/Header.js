import React, {useState} from "react";
import './styles/Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const [currentPage, setCurrentPage] = useState('');
    
    const handlePageChange = (page) => {
        setCurrentPage(page)
      };

    return (
        <nav className="Header">
            <h1>Nolan Frame</h1>
            <div className="NavLinks">
            <Link to='/' onClick={() => handlePageChange('About')} className={currentPage==="About"?"CurrentPage":"OtherPage"}>About</Link>
            <Link to='/portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage==="Portfolio"?"CurrentPage":"OtherPage"}>Portfolio</Link>
            <Link to='/resume' onClick={() => handlePageChange('Resume')} className={currentPage==="Resume"?"CurrentPage":"OtherPage"}>Resume</Link>
            <Link to='/contact' onClick={() => handlePageChange('Contact')} className={currentPage==="Contact"?"CurrentPage":"OtherPage"}>Contact</Link>
            </div>
        </nav>
    )
}

export default Header;