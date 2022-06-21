import React, { useState } from 'react';
import About from '../src/components/pages/About';
import Portfolio from '../src/components/pages/Portfolio';
import Resume from '../src/components/pages/Resume';
import Contact from '../src/components/pages/Contact';

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
