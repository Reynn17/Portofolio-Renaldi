import React from 'react';
import { MonitorSmartphone, Database, Wrench, HeartHandshake} from 'lucide-react';
import Particles from './Particles';

const Skills = ({ isDarkMode }) => {
  // Data keahlian dikelompokkan dalam array agar kodenya bersih dan mudah ditambah/dikurangi
  const skillCategories = [
    {
      title: 'Front-End Development',
      icon: <MonitorSmartphone size={28} color="#6366f1" />,
    //   description: 'Membangun antarmuka web yang responsif, interaktif, dan berpusat pada kenyamanan pengguna (UI/UX).',
      techs: ['React.js', 'Vite', 'Bootstrap', 'Tailwind', 'PHP', 'JavaScript', 'HTML5 / CSS3', 'UI/UX Design']
    },
    {
      title: 'Machine Learning & AI',
      icon: <Database size={28} color="#6366f1" />,
    //   description: 'Pemodelan data prediktif dan time-series forecasting untuk optimalisasi operasional di dunia nyata.',
      techs: ['Python', 'Pandas / NumPy', 'Scikit-Learn', 'Matplotlib', 'Statsmodels', 'Flask', 'Streamlit']
    },
    {
      title: 'Database and Tools',
      icon: <Wrench size={28} color="#6366f1" />,
    //   description: 'Perangkat dan lingkungan pengembangan yang saya gunakan untuk menjaga kode tetap rapi dan terukur.',
      techs: ['MySQL', 'PHPMyAdmin', 'Git', 'GitHub', 'VS Code', 'Figma', 'Canva', 'Microsoft Office']
    },
    {
      title: 'Interpersonal Skills',
      icon: < HeartHandshake size={28} color="#6366f1" />,
      techs: ['Problem Solving', 'Critical Thinking', 'Communication', 'Teamwork', 'Cross-functional', 'Collaboration', 'Technical Communication', 'Adaptability','Resilience.']
    }
  ];

  const styles = {
    section: {
      position: 'relative', 
      overflow: 'hidden',   
      padding: '100px 0 100px 0', 
      backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
      transition: 'background-color 0.3s ease',
      minHeight: '100vh',
    },
    // --- PERBAIKAN UTAMA DI SINI ---
    animatedBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',  // Memaksa partikel melebar 100%
      height: '100%', // Memaksa partikel memanjang 100%
      zIndex: 0, 
      pointerEvents: 'none', // Mencegah partikel menghalangi klik pada elemen di bawahnya
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 10, 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    // ---------------------------------
    selectedWork: {
      color: '#3b82f6',
      fontSize: '0.85rem',
      fontWeight: '700',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '0.5rem',
    },
    title: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontWeight: '800',
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    subtitle: {
      color: isDarkMode ? '#94a3b8' : '#64748b',
      fontSize: '1rem',
      maxWidth: '600px',
      marginBottom: '3rem',
    },
    card: {
      position: 'relative',
      zIndex: 20, // Diperkuat agar kartu pasti di atas partikel
      backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(8px)', // EFEK KACA: Partikel di belakang kartu akan terlihat sedikit blur
      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      padding: '30px',
      borderRadius: '20px',
      height: '100%',
      boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '1rem',
    },
    cardTitle: {
      color: isDarkMode ? '#f8fafc' : '#1e293b',
      fontWeight: '700',
      fontSize: '1.25rem',
      margin: 0,
    },
    description: {
      color: isDarkMode ? '#94a3b8' : '#64748b',
      fontSize: '0.9rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
    },
    techContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    },
    techBadge: {
      backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.1)' : '#eff6ff',
      color: isDarkMode ? '#cbd5e1' : '#3b82f6',
      border: isDarkMode ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid #bfdbfe',
      padding: '6px 14px',
      borderRadius: '50px',
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
    }
  };

  return (
    <section id="skills" style={styles.section}>
    <div style={styles.animatedBackground}>
        <Particles />
      </div>
      <div className="container">
        
       <div className="text-start">
          {/* <p style={styles.selectedWork}>SELECTED WORK</p> */}
          <h2 style={styles.title}>Technical Skills</h2>
          <p style={styles.subtitle}>
            Highlighting my core technical stack in front-end development, UI/UX design, and machine learning technologies.
          </p>
        </div>

        {/* MENGGUNAKAN GRID BOOTSTRAP UNTUK KARTU KEAHLIAN */}
        <div className="row g-4"> 
          {skillCategories.map((category, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div style={styles.card} className="skill-card">
                
                {/* Judul & Ikon Kategori */}
                <div style={styles.cardHeader}>
                  {category.icon}
                  <h3 style={styles.cardTitle}>{category.title}</h3>
                </div>
                
                {/* Deskripsi Singkat */}
                <p style={styles.description}>{category.description}</p>
                
                {/* Lencana (Badges) Teknologi */}
                <div style={styles.techContainer}>
                  {category.techs.map((tech, idx) => (
                    <span key={idx} style={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;