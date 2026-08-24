import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pastikan semua komponen di-import dengan benar
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact';
// import SeeMore from './components/SeeMore';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Atau state bawaan aslimu

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div style={{ 
        backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease'
      }}>
        
        {/* Header tetap di luar Routes agar selalu muncul di semua halaman */}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          {/* HALAMAN UTAMA (Beranda) */}
          <Route path="/" element={
            <>
              <Home isDarkMode={isDarkMode} />
              <About isDarkMode={isDarkMode} />
              <Skills isDarkMode={isDarkMode} />
              <Projects isDarkMode={isDarkMode} />
              {/* <Contact isDarkMode={isDarkMode} /> */}
            </>
          } />
</Routes>
          {/* HALAMAN SEE MORE */}
          {/* <Route path="/seemore" element={<SeeMore isDarkMode={isDarkMode} />} /> */}
        

        <Footer isDarkMode={isDarkMode} />

      </div>
    </Router>
  );
}

export default App;