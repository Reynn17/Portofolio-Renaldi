import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Particles from './Particles';
import teripangImg from '../assets/Landing Page TeripangTembeling.webp';
import porto from '../assets/portorenaldi.webp';
import simag from '../assets/simag.webp';
import sipeti from '../assets/SiPETI.webp';
import forest from '../assets/forest3d.webp';
import passenger from '../assets/passenger.webp';

const SeeMore = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
          id: 1,
          category: 'LANDING PAGE',
          title: 'Teripang Tembeling | Bintan Punye',
          description: 'Development of an informative Single-Page Application (SPA) for branding local products. Features a clean component-based architecture, intuitive navigation, and a fully responsive layout.',
          techStack: ['HTML', 'CSS', 'JavaScripst', 'Tailwind', 'Boostrap'],
          link: '#', // Ganti dengan link GitHub/Demo nanti
          image: teripangImg, // Foto placeholder sementara
        },
        {
          id: 2,
          category: 'AI/ML',
          title: ' Forecasting Domestic Passenger ',
          description: 'A Study on Passenger Volume Forecasting at Sri Bintan Pura Port by Comparing the SARIMAX and XGBoost Time Series Models for Operational Logistics Optimization.',
          techStack: ['Python', 'Google Colab', 'Numpy', 'Pandas', 'Flask'],
          link: '#',
          image: passenger,
        },
        {
          id: 3,
          category: 'WEB',
          title: "Renaldi's Portfolio",
          description: 'The development of an interactive and responsive portfolio website is designed to highlight expertise in front-end development and data science, as well as skills and past projects..',
          techStack: ['React', 'Vite', 'Bootstrap', 'Tailwind', 'HTML'],
          link: '#',
          image: porto,
        },
        {
          id: 4,
          category: 'WEB',
          title: "Sistem Informasi Manajemen Gudang (SIMAG)",
          description: 'A web-based warehouse management platform designed with an intuitive user interface (UI) and informative dashboards. This system makes it easier for administrators to manage inventory and minimizes errors caused by manual record-keeping.',
          techStack: ['PHP', 'CSS', 'Bootstrap', 'Tailwind', 'MySQL'],
          link: '#',
          image: simag,
        },
        {
          id: 5,
          category: 'WEB',
          title: "Sistem Pengajuan Cuti (SiPeTi),",
          description: 'A web-based warehouse management platform designed with an intuitive user interface (UI) and informative dashboards. This system makes it easier for administrators to manage inventory and minimizes errors caused by manual record-keeping.',
          techStack: ['PHP', 'CSS', 'Bootstrap', 'Tailwind', 'MySQL'],
          link: '#',
          image: sipeti,
        },
        {
          id: 6,
          category: '3D',
          title: "3D Camp in Forest",
          description: 'An exploration of creative coding to build an interactive 3D forest environment directly in the browser. This project highlights the use of advanced graphics to deliver an immersive visual experience.',
          techStack: ['PHP', 'CSS', 'Bootstrap', 'Tailwind', 'MySQL'],
          link: '#',
          image: forest,
        },
        {
            id: 7,
          category: '3D',
          title: "3D Camp in Forest",
          description: 'An exploration of creative coding to build an interactive 3D forest environment directly in the browser. This project highlights the use of advanced graphics to deliver an immersive visual experience.',
          techStack: ['PHP', 'CSS', 'Bootstrap', 'Tailwind', 'MySQL'],
          link: '#',
          image: forest,
        }
  ];

  const styles = {
    section: {
      position: 'relative',
      overflow: 'hidden', // PERBAIKAN: Mencegah layar bisa di-scroll ke samping
      padding: '100px 0',
      backgroundColor: isDarkMode ? '#0b1120' : '#f8fafc',
      minHeight: '100vh',
    },
    animatedBackground: { // PERBAIKAN: Memaksa partikel menyebar 100% ke seluruh sudut
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      pointerEvents: 'none',
      opacity: isDarkMode ? 0.5 : 1,
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 10, // Memastikan konten selalu berada di atas partikel
    },
    headerWrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '3rem',
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : '#e2e8f0',
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      padding: '10px',
      borderRadius: '50%',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    },
    title: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontWeight: '800',
      fontSize: '2rem',
      margin: 0,
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      width: '100%',
    },
    card: {
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    imageWrapper: {
      width: '100%',
      height: '200px',
      overflow: 'hidden',
      borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    categoryBadge: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      padding: '4px 12px',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: '700',
    },
    projectTitle: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '1.25rem',
      fontWeight: '700',
      margin: '1rem 0 0.5rem 0',
    },
    projectDesc: {
      color: isDarkMode ? '#94a3b8' : '#475569',
      fontSize: '0.9rem',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
    },
    techStackGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: 'auto',
    },
    techBadge: {
      border: isDarkMode ? '1px solid #334155' : '1px solid #cbd5e1',
      color: isDarkMode ? '#cbd5e1' : '#475569',
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '500',
    }
  };

  return (
    <section style={styles.section}>
      
      {/* PERBAIKAN: Partikel sekarang dibungkus dengan div animatedBackground */}
      <div style={styles.animatedBackground}>
        <Particles />
      </div>

      <div className="container" style={styles.contentWrapper}>
        
        <div style={styles.headerWrap}>
          <Link to="/" style={styles.backButton} className="back-btn-hover">
            <ArrowLeft size={24} />
          </Link>
          <h2 style={styles.title}>All Projects Repository</h2>
        </div>

        <div style={styles.gridContainer}>
          {allProjects.map((project) => (
            <div key={project.id} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img src={project.image} alt={project.title} style={styles.projectImage} />
              </div>
              <div style={styles.cardBody}>
                <div>
                  <span style={styles.categoryBadge}>{project.category}</span>
                </div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.description}</p>
                <div style={styles.techStackGroup}>
                  {project.techStack.map((tech, index) => (
                    <span key={index} style={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .back-btn-hover:hover {
          background-color: ${isDarkMode ? 'rgba(255,255,255,0.2)' : '#cbd5e1'} !important;
        }
      `}</style>
    </section>
  );
};

export default SeeMore;