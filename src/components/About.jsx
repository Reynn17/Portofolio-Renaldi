import React from 'react';
import Particles from './Particles';
import { MapPin, Mail, Download, Briefcase, GraduationCap, Users } from 'lucide-react';

const About = ({ isDarkMode }) => {
  // Data Pengalaman / Riset untuk Timeline di sebelah kanan
  const experiences = [
    {
      id: 1,
      role: 'Web Developer Intern',
      date: 'Juli 2025 - September 2025',
      company: 'Distrik Navigasi Tipe A Kelas 1 Tanjungpinang',
      bullets: [
        'Designed an intuitive user interface (UI) and user experience (UX) for a web-based warehouse stock management application from scratch, utilizing Figma',
        "Developed the application's front-end architecture and core functionality, integrating Front-End HTML, Boostrap and Tailwind with PHP and MySQL for robust inventory data processing.",
        'Developed a dynamic, user-friendly dashboard using Chart.js to visualize historical data of stock inflows and outflows, enhancing overall inventory tracking capabilities. '
      ]
    },
    // {
    //   id: 2,
    //   role: 'Front-End Developer',
    //   date: '2025 - 2026',
    //   company: 'Freelance / Self-Employed',
    //   bullets: [
    //     'Membangun antarmuka situs web portofolio interaktif dan responsif menggunakan arsitektur komponen React.js, Vite, dan Bootstrap.',
    //     'Mengintegrasikan desain UI/UX modern dengan fitur dark/light mode statis dan efek animasi visual tingkat lanjut (Particles, Glassmorphism).'
    //   ]
    // }
  ];

  const organizations = [
    {
      id: 1,
      role: 'Members of the Entrepreneurship Division ',
      date: 'February 2024 - Desember 2024',
      company: 'Himpunan Mahasiswa Teknik Informatika (HMTI) | Maritim Raja Ali Haji University', 
      bullets: [
        'Organized and executed a technology entrepreneurship seminar in collaboration with the student association board',
        "Actively promoted and marketed the association's entrepreneurial products across various campus events to drive engagement and sales"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      role: "Bachelor of Informatics Engineering",
      gpa : "3.52/4.00",
      date: 'September 2022 - September 2026',
      company: 'Raja Ali Haji Maritime University (UMRAH) | Tanjungpinang, Indonesia', 
      bullets: [
        ' Relevant Courses: Machine Learning, Data Structures & Algorithms, Object-Oriented Programming, Software Project Management, Web Programming.',
        "Thesis Title: Forecasting Domestic Passenger Volume at Sri Bintan Pura Port Using the SARIMAX and XGBoost Methods."
      ]
    }
  ];

  const styles = {
    section: {
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 0',
      backgroundColor: isDarkMode ? '#0b1120' : '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      transition: 'background-color 0.3s ease',
    },
    animatedBackground: {
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
      zIndex: 10,
    },
    // --- STYLES KOLOM KIRI (KARTU BIOGRAFI) ---
    bioCard: {
      backgroundColor: isDarkMode ? '#111827' : '#ffffff',
      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      borderRadius: '16px',
      padding: '35px 30px',
      boxShadow: isDarkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.05)',
      height: 'fit-content%',
      position: 'sticky',
      top: '100px', // Menempel di atas saat di-scroll
    },
    bioLabel: {
      color: '#3b82f6',
      fontSize: '0.8rem',
      fontWeight: '700',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '1rem',
    },
    bioName: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '2.2rem',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '1rem',
    },
    bioRole: {
      color: isDarkMode ? '#cbd5e1' : '#475569',
      fontSize: '1.05rem',
      fontWeight: '500',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
    },
    bioDesc: {
      color: isDarkMode ? '#94a3b8' : '#64748b',
      fontSize: '0.95rem',
      lineHeight: '1.7',
      marginBottom: '2rem',
      textAlign: 'justify',
    },
    contactList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 2rem 0',
      borderTop: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
      borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: isDarkMode ? '#cbd5e1' : '#475569',
      fontSize: '0.95rem',
      marginBottom: '12px',
    },
    // --- STYLES UNTUK TOMBOL ---
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column', // Membuat tombol berbaris ke bawah
      gap: '12px',             // INI KUNCI UTAMANYA: Memberi jarak 12px antar tombol
      marginTop: '1rem',
    },
    // Pastikan btnDownload kamu masih ada (kode sebelumnya)
    btnDownload: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      backgroundColor: '#2563eb', 
      color: '#ffffff',
      padding: '12px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '1rem',
      textDecoration: 'none',
      width: '100%',
      transition: 'background-color 0.2s',
    },
    // Tambahkan style btnConnect jika belum ada
    btnConnect: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      backgroundColor: 'transparent',
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      border: isDarkMode ? '1px solid #334155' : '1px solid #cbd5e1',
      padding: '12px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '1rem',
      textDecoration: 'none',
      width: '100%',
      transition: 'all 0.2s',
    },

    // --- STYLES KOLOM KANAN (TIMELINE PENGALAMAN) ---
    expHeaderWrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '2.5rem',
    },
    expHeaderTitle: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '1.5rem',
      fontWeight: '700',
      margin: 0,
    },
    timelineContainer: {
      position: 'relative',
      paddingLeft: '35px', // Ruang untuk garis
    },
    timelineLine: {
      position: 'absolute',
      left: '6px', // Posisi garis vertikal
      top: '10px',
      bottom: '0',
      width: '2px',
      backgroundColor: isDarkMode ? '#334155' : '#e2e8f0',
    },
    timelineItem: {
      position: 'relative',
      marginBottom: '2.5rem',
    },
    timelineDot: {
      position: 'absolute',
      left: '-34px', // Tarik titik biru ke atas garis vertikal
      top: '6px',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)',
      zIndex: 2,
    },
    expHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '0.5rem',
    },
    expRole: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '1.15rem',
      fontWeight: '700',
      margin: 0,
    },
    expDateBox: {
      backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f1f5f9',
      color: isDarkMode ? '#94a3b8' : '#475569',
      padding: '4px 12px',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    expCompany: {
      color: isDarkMode ? '#e2e8f0' : '#334155',
      fontSize: '0.9rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    expBulletList: {
      color: isDarkMode ? '#94a3b8' : '#475569',
      fontSize: '0.9rem',
      lineHeight: '1.7',
      paddingLeft: '18px',
      margin: 0,
    },
    // Organization Style
    orgHeaderWrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '2.5rem',
    },
    orgHeaderTitle: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '1.5rem',
      fontWeight: '700',
      margin: 0,
    },
    orgHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '0.5rem',
    },
    orgRole: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '1.15rem',
      fontWeight: '700',
      margin: 0,
    },
    orgDateBox: {
      backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#f1f5f9',
      color: isDarkMode ? '#94a3b8' : '#475569',
      padding: '4px 12px',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    orgCompany: {
      color: isDarkMode ? '#e2e8f0' : '#334155',
      fontSize: '0.9rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    orgBulletList: {
      color: isDarkMode ? '#94a3b8' : '#475569',
      fontSize: '0.9rem',
      lineHeight: '1.7',
      paddingLeft: '18px',
      margin: 0,
    },
   // --- STYLES UNTUK EDUCATION ---
    eduHeader: {
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '0.4rem',
    },
    eduRole: {
      color: isDarkMode ? '#f8fafc' : '#0f172a',
      fontSize: '1.2rem',
      fontWeight: '700', // Tebal sesuai gambar
      margin: 0,
    },
    eduDateBox: {
      backgroundColor: isDarkMode ? 'rgba(255,255,255,0.08)' : '#f1f5f9',
      color: isDarkMode ? '#cbd5e1' : '#475569',
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    eduCompany: {
      color: isDarkMode ? '#f8fafc' : '#1e293b', // Warna putih terang seperti judul
      fontSize: '0.95rem',
      fontWeight: '700', // Dibuat tebal sesuai gambar
      marginBottom: '0.3rem',
    },
    eduGPA: {
      color: isDarkMode ? '#94a3b8' : '#64748b', // Warna abu-abu
      fontSize: '0.9rem',
      marginBottom: '1rem',
      fontWeight: '500',
    },
    eduBulletList: {
      color: isDarkMode ? '#94a3b8' : '#475569',
      fontSize: '0.95rem',
      lineHeight: '1.7',
      paddingLeft: '18px',
      margin: 0,
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.animatedBackground}>
        <Particles />
      </div>

      <div className="container" style={styles.contentWrapper}>
        <div className="row g-5 align-items-start">
          
          {/* KOLOM KIRI: KARTU BIOGRAFI */}
          <div className="col-lg-5">
            <div style={styles.bioCard}>
              <p style={styles.bioLabel}>Biography</p>
              <h2 style={styles.bioName}>Renaldi Anicetus<br/>Simbolon</h2>
              <p style={styles.bioRole}>
                Front-End Developer & UI/UX Designer | Data and Machine Learning Enthusiast
              </p>
              
              <p style={styles.bioDesc}>
                Informatics Engineering graduate from Raja Ali Haji Maritime University with a deep passion for the intersection of design and data. 
                <br/><br/>
                I believe the best technology emerges when system intelligence meets user convenience. My primary focus is building efficient predictive models and translating those data insights into interactive, intuitive, and user-friendly website interfaces.
              </p>

              <ul style={styles.contactList}>
                <li style={styles.contactItem}>
                  <MapPin size={18} />
                  <span>Bintan, Indonesia</span>
                </li>
                <li style={styles.contactItem}>
                  <Mail size={18} />
                  <span>renaldianicetus@gmail.com</span>
                </li>
              </ul>

              {/* BUNGKUS KEDUA TOMBOL DI SINI */}
              <div style={styles.buttonContainer}>
                
                <a 
                  href="/documents/CV_Renaldi.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.btnDownload}
                  className="btn-download-hover"
                >
                  <Download size={18} />Open CV (PDF)
                </a>

                <a 
                  href="https://www.linkedin.com/in/renaldias" // Arahkan ke bagian bawah (id="contact")
                  target="_blank"
                  style={styles.btnConnect}
                  className="btn-connect-hover"
                >
                  Connect with Me
                </a>

              </div>
            </div>
          </div>

          {/* KOLOM KANAN: TIMELINE PENGALAMAN */}
          <div className="col-lg-7">
            
            <div style={styles.expHeaderWrap}>
              <Briefcase size={28} color="#3b82f6" />
              <h3 style={styles.expHeaderTitle}>Professional Experience</h3>
            </div>

            <div style={styles.timelineContainer}>
              <div style={styles.timelineLine}></div>

              {experiences.map((exp) => (
                <div key={exp.id} style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  
                  <div style={styles.expHeader}>
                    <h4 style={styles.expRole}>{exp.role}</h4>
                    <span style={styles.expDateBox}>{exp.date}</span>
                  </div>
                  
                  <div style={styles.expCompany}>{exp.company}</div>
                  
                  <ul style={styles.expBulletList}>
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

            {/* // ORGANIZATION EXPERIENCE */}
           <div style={{ ...styles.expHeaderWrap, marginTop: '3rem' }}>
              <Users size={28} color="#3b82f6" />
              <h3 style={styles.expHeaderTitle}>Organizational Experience</h3>
            </div>

            <div style={styles.timelineContainer}>
              <div style={styles.timelineLine}></div>

              {organizations.map((org) => (
                <div key={org.id} style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  
                  <div style={styles.orgHeader}>
                    <h4 style={styles.orgRole}>{org.role}</h4>
                    <span style={styles.orgDateBox}>{org.date}</span>
                  </div>
                  
                  <div style={styles.orgCompany}>{org.company}</div>
                  
                  <ul style={styles.orgBulletList}>
                    {org.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
            
           {/* // EDUCATION EXPERIENCE */}
            <div style={styles.expHeaderWrap}>
              <GraduationCap size={28} color="#3b82f6" />
              <h3 style={styles.expHeaderTitle}>Education</h3>
            </div>

            <div style={styles.timelineContainer}>
              <div style={styles.timelineLine}></div>

              {education.map((edu) => (
                <div key={edu.id} style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  
                  {/* Judul & Tanggal di baris pertama */}
                  <div style={styles.eduHeader}>
                    <h4 style={styles.eduRole}>{edu.role}</h4>
                    <span style={styles.eduDateBox}>{edu.date}</span>
                  </div>
                  
                  {/* Universitas di baris kedua */}
                  <div style={styles.eduCompany}>{edu.company}</div>
                  
                  {/* GPA di baris ketiga (warna abu-abu) */}
                  {edu.gpa && <div style={styles.eduGPA}>{edu.gpa}</div>}
                  
                  {/* Bullet points */}
                  <ul style={styles.eduBulletList}>
                    {edu.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .btn-download-hover:hover {
          background-color: #1d4ed8 !important; /* Warna biru sedikit lebih gelap saat di-hover */
        }
      `}</style>
    </section>
  );
};

export default About;