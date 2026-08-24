import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Particles from './Particles';
import { Link } from 'react-router-dom';
import teripangImg from '../assets/Landing Page TeripangTembeling.webp';
import porto from '../assets/portorenaldi.webp';
import simag from '../assets/simag.webp';
import sipeti from '../assets/SiPETI.webp';
import forest from '../assets/forest3d.webp';
import passenger from '../assets/passenger.webp';

const Projects = ({ isDarkMode }) => {
  // Data proyek portofoliomu
  const projectsData = [
    {
      id: 1,
      category: 'LANDING PAGE',
      title: 'Teripang Tembeling | Bintan Punye',
      description: 'Development of an informative Single-Page Application (SPA) for branding local products. Features a clean component-based architecture, intuitive navigation, and a fully responsive layout.',
      techStack: ['HTML', 'CSS', 'JavaScripst', 'Tailwind', 'Boostrap'],
      link: 'https://github.com/Reynn17/TeripangTembeling', // Ganti dengan link GitHub/Demo nanti
      image: teripangImg, // Foto placeholder sementara
    },
    {
      id: 2,
      category: 'AI/ML',
      title: ' Forecasting Domestic Passenger ',
      description: 'A Study on Passenger Volume Forecasting at Sri Bintan Pura Port by Comparing the SARIMAX and XGBoost Time Series Models for Operational Logistics Optimization.',
      techStack: ['Python', 'Google Colab', 'Numpy', 'Pandas', 'Flask'],
      link: 'https://github.com/Reynn17/ForecastingPassenger',
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
      link: 'https://github.com/Reynn17/SIMAG',
      image: simag,
    },
    {
      id: 5,
      category: 'WEB',
      title: "Sistem Pengajuan Cuti (SiPeTi),",
      description: 'A web-based warehouse management platform designed with an intuitive user interface (UI) and informative dashboards. This system makes it easier for administrators to manage inventory and minimizes errors caused by manual record-keeping.',
      techStack: ['PHP', 'CodeIgniter', 'Bootstrap', 'Tailwind', 'MySQL'],
      link: 'https://github.com/Reynn17/sipeti',
      image: sipeti,
    },
    {
      id: 6,
      category: '3D',
      title: "3D Camp in Forest",
      description: 'An exploration of creative coding to build an interactive 3D forest environment directly in the browser. This project highlights the use of advanced graphics to deliver an immersive visual experience.',
      techStack: ['PHP', 'CSS', 'Bootstrap', 'Tailwind', 'MySQL'],
      link: 'https://github.com/haltaputra/Project-3D',
      image: forest,
    }
  ];

  const styles = {
    section: {
      position: 'relative',
      // INI KUNCI UTAMANYA: Mencegah elemen apa pun bocor ke samping layar HP
      overflow: 'hidden', 
      padding: '100px 0',
      backgroundColor: isDarkMode ? '#0b1120' : '#f8fafc',
      minHeight: '100vh',
    },
    animatedBackground: {
      position: 'absolute',
      // Menggunakan left/right 0 lebih aman daripada width 100% untuk mencegah overflow
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
      zIndex: 10,
    },
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
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, border-color 0.3s ease',
      cursor: 'pointer',
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
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    categoryBadge: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      padding: '4px 12px',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    externalIcon: {
      color: '#3b82f6',
      transition: 'color 0.2s',
    },
    projectTitle: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '0.8rem',
      lineHeight: '1.4',
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
      backgroundColor: 'transparent',
      border: isDarkMode ? '1px solid #334155' : '1px solid #cbd5e1',
      color: isDarkMode ? '#cbd5e1' : '#475569',
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '500',
    },
    footerContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3.5rem',
    },
    btnSeeMore: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: 'transparent',
      border: '1px solid #3b82f6',
      color: '#3b82f6',
      padding: '12px 32px',
      borderRadius: '8px',
      fontSize: '0.95rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    }
  };

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.animatedBackground}>
        <Particles />
      </div>

      <div className="container" style={styles.contentWrapper}>
        
        <div className="text-start">
          {/* <p style={styles.selectedWork}>SELECTED WORK</p> */}
          <h2 style={styles.title}>Featured Projects</h2>
          <p style={styles.subtitle}>
            A showcase of my recent coding endeavors, advanced data analytics, and software development highlights.
          </p>
        </div>

        <div className="row g-4">
          {projectsData.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              
              <div 
                style={styles.card} 
                className="project-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                }}
              >
                
                <div style={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} style={styles.projectImage} />
                </div>

                <div style={styles.cardBody}>
                  
                  <div style={styles.cardHeader}>
                    <span style={styles.categoryBadge}>{project.category}</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.externalIcon} className="external-link-hover">
                      <ExternalLink size={20} />
                    </a>
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
            </div>
          ))}
        </div>

        <div style={styles.footerContainer}>
          <a href="https://github.com/reynn17" target="_blank" style={styles.btnSeeMore} className="btn-see-more">
            See More<ArrowRight size={18} />
          </a>
        </div>

      </div>

      <style>{`
        .btn-see-more:hover {
          background-color: rgba(59, 130, 246, 0.1) !important;
          color: #60a5fa !important;
        }
        .external-link-hover:hover {
          color: #60a5fa !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;