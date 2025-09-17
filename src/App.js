import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const headerRef = useRef(null);
  const pageContainerRef = useRef(null);

  // Dynamic text color based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const pageContainer = pageContainerRef.current;
      
      if (!header || !pageContainer) return;

      const headerRect = header.getBoundingClientRect();
      const pageContainerRect = pageContainer.getBoundingClientRect();
      
      // Check if header is overlapping with page container
      const isOverlapping = headerRect.bottom > pageContainerRect.top && 
                           headerRect.top < pageContainerRect.bottom;
      
      if (isOverlapping) {
        // Header is over white background
        header.classList.remove('text-over-gradient');
        header.classList.add('text-over-white');
      } else {
        // Header is over gradient background
        header.classList.remove('text-over-white');
        header.classList.add('text-over-gradient');
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentPage]); // Re-run when page changes

  const renderPage = () => {
    try {
      switch (currentPage) {
        case 'projects':
          console.log('Rendering Projects component');
          return <Projects />;
        case 'contact':
          console.log('Rendering Contact component');
          return <Contact />;
        default:
          console.log('Rendering Home component');
          return <Home />;
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      return <div>Error loading page. Please try again.</div>;
    }
  };

  return (
    <div className="App">
      <header ref={headerRef} className="header text-over-gradient">
        <div className="nav-container">
          <a href="#" className="logo">Matthew Flowers</a>
          <nav className="nav-buttons">
            <button 
              onClick={() => { console.log('Clicked Home'); setCurrentPage('home'); }} 
              className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => { console.log('Clicked Projects'); setCurrentPage('projects'); }} 
              className={`nav-button ${currentPage === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => { console.log('Clicked Contact'); setCurrentPage('contact'); }} 
              className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div ref={pageContainerRef} className="page-container fade-in">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
