import React, { useState, useEffect } from 'react';

export default function SplitText({ isDarkMode }) {
  // Daftar role kamu yang akan bergantian muncul
  const roles = [
    "Front-End Developer",
    "UI/UX Designer",
    "Data Analyst"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Memulai animasi pudar/hilang
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true); // Memunculkan teks berikutnya
      }, 500); // 500ms adalah waktu animasi pudarnya
      
    }, 3000); // Teks akan berganti setiap 3 detik

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span 
      style={{
        display: 'inline-block',
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        color: isDarkMode ? '#818cf8' : '#4f46e5', // Warna ungu aksen agar stand-out
        fontWeight: '700',
      }}
    >
      {roles[currentIndex]}
    </span>
  );
}