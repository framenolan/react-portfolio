import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navigation from './Navigation';

export default function PageContainer() {
	const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

	const handlePageChange = (page) => {
    setCurrentPage(page)
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}
