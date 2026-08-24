import React from 'react';

const Footer = ({ isDarkMode }) => {
  // Mengambil tahun saat ini secara otomatis
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
      padding: '20px 0',
      borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
    },
    text: {
      color: isDarkMode ? '#94a3b8' : '#64748b',
      fontSize: '0.95rem',
      margin: 0,
    },
    highlight: {
      color: '#6366f1',
      fontWeight: '600',
    },
    subText: {
      color: isDarkMode ? '#475569' : '#94a3b8',
      fontSize: '0.85rem',
      margin: '8px 0 0 0',
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <p style={styles.text}>
          &copy; {currentYear} <span style={styles.highlight}>Renaldi Anicetus Simbolon</span>. All Rights Reserved.
        </p>
        {/* <p style={styles.subText}>
          Built with React & Bootstrap
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;