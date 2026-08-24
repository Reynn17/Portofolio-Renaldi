import React from 'react';
import Particles from './Particles';
import SplitText from './SplitText';
import { Send, Download } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = ({ isDarkMode }) => {
  const styles = {
    section: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden', 
      fontFamily: "'Inter', 'Segoe UI', sans-serif", 
      paddingTop: '100px', 
      paddingBottom: '10px',
    },
    animatedBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0, 
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 10, 
    },
    // --- STYLES BARU UNTUK BADGE "OPEN TO WORK" ---
    badgeWrap: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 18px',
      borderRadius: '50px',
      backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : '#f0f9ff',
      border: isDarkMode ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid #bae6fd',
      marginBottom: '1.5rem',
    },
    badgeDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6', 
      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)', // Efek 'halo' memudar di sekitar titik
    },
    badgeText: {
      color: '#3b82f6',
      fontSize: '0.8rem',
      fontWeight: '700',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      margin: 0,
    },
    // -----------------------------------------------
    greeting: {
      color: '#6366f1', 
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    name: {
      color: isDarkMode ? '#f8fafc' : '#1e293b', 
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    roles: {
      color: isDarkMode ? '#cbd5e1' : '#64748b', 
      fontSize: '1.1rem', 
      fontWeight: '500',
      marginBottom: '1.5rem',
      maxWidth: '500px', 
      lineHeight: '1.6',
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'row', 
      flexWrap: 'wrap',     
      gap: '1rem',
      marginTop: '1rem',
    },
    btnPrimary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px', 
      backgroundColor: '#2c74d8', 
      color: '#ffffff',
      padding: '12px 28px',
      borderRadius: '50px', 
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.4)', 
      textDecoration: 'none',
      transition: 'transform 0.2s ease', 
    },
    btnSecondary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      backgroundColor: 'transparent',
      color: isDarkMode ? '#f8fafc' : '#1e293b', 
      padding: '12px 28px',
      borderRadius: '50px',
      border: isDarkMode ? '2px solid #334155' : '2px solid #cbd5e1', 
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
    },
    socialWrapper: {
      marginTop: '2.5rem', // Memberi jarak yang cukup dari tombol CTA
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem', // Jarak antara teks dan ikon
    },
    socialText: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: isDarkMode ? '#64748b' : '#94a3b8', // Warna abu-abu pudar agar tidak mendistraksi
      textTransform: 'uppercase',
      letterSpacing: '1px',
      margin: 0,
    },
    socialGroup: {
      display: 'flex',
      gap: '1.5rem',
    },
    socialIcon: {
      color: isDarkMode ? '#2c74d8' : '#2c74d8', 
      transition: 'color 0.3s ease, transform 0.2s ease',
      cursor: 'pointer',
      boxShadow: '0 1px 14px 0 rgba(76, 72, 143, 0.4)',
    },
    imageContainer: {
      position: 'relative', 
      zIndex: 10,           
      width: '350px',
      height: '350px',
      borderRadius: '20%',
      overflow: 'hidden',
      border: '5px solid rgba(91, 33, 182, 0.1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.animatedBackground}>
        <Particles/>
      </div>
  
      <div className="container" style={styles.contentWrapper}>
        <div className="row align-items-center" style={{ minHeight: '80vh' }}>
          
          <div className="col-md-6 mt-5 mt-md-0 order-2 order-md-1 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
            
            {/* --- BADGE DIPINDAH KE SINI (Paling Atas) --- */}
            <div style={styles.badgeWrap}>
              <div style={styles.badgeDot}></div>
              {/* Teks di bawah ini bisa kamu ganti jadi "INSINYUR PERANGKAT LUNAK & ML/AI" jika mau */}
              <p style={styles.badgeText}>Open To Work</p>
            </div>
            
            <p style={styles.greeting}>Hello, i'm</p>
            <h1 style={styles.name}>Renaldi Anicetus Simbolon</h1>
            
            <p style={styles.roles}>
              I am a <SplitText isDarkMode={isDarkMode} />
            </p>
            
            <div style={styles.buttonGroup}>
              <a href="https://www.linkedin.com/in/renaldias" target="_blank" style={styles.btnPrimary}>
                {/* <Send size={18} /> */}
                <span>Hire Me</span>
              </a>
              
              <a 
                href="#projects" 
                style={styles.btnSecondary}
              >
                {/* <Download size={18} /> */}
                <span>View Portfolio</span>
              </a>
            </div>

            <div style={styles.socialWrapper} className="align-items-center align-items-md-start w-100">
              <p style={styles.socialText}>Let's connect</p>
              
              <div style={styles.socialGroup}>
                <a href="https://www.linkedin.com/in/renaldias" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/reynn17" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                  <FaGithub size={24} />
                </a>
                <a href="https://instagram.com/renaldismbln" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

          </div>

          <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0 order-1 order-md-2">
            <div style={styles.imageContainer}>
              <img 
                src="../src/assets/renaldi.jpg" 
                alt="Foto Profil Renaldi" 
                style={styles.profileImage} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;