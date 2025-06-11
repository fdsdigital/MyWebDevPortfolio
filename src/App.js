import React, { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
   
       <div>
      <header style={{ backgroundColor: "#333", padding: "10px", color: "#fff" }}>
        <button onClick={() => setCurrentPage('home')} style={{ marginRight: '10px' }}>Home</button>
        <button onClick={() => setCurrentPage('projects')} style={{ marginRight: '10px' }}>Projects</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </header>
      <main style={{ padding: "20px" }}>
        {renderPage()}
      </main>
    </div>
  
   
  );
}

export default App;
