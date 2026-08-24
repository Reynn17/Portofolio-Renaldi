import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Particles from './Particles';

const Contact = ({ isDarkMode }) => {
  const styles = {
    section: {
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 0 100px 0',
      backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
      transition: 'background-color 0.3s ease',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    animatedBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 10,
      width: '100%',
    },
    title: {
      color: isDarkMode ? '#f8fafc' : '#1e293b',
      fontWeight: '700',
      fontSize: '2rem', // Sedikit diperbesar agar proporsional
      marginBottom: '1rem',
    },
    highlightText: {
      color: '#6366f1',
    },
    subtitle: {
      color: isDarkMode ? '#94a3b8' : '#64748b',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '3rem',
      maxWidth: '500px',
    },
    // --- STYLES KOTAK INFO KONTAK ---
    infoCard: {
      display: 'flex',
      alignItems: 'center', // Diubah menjadi center agar ikon sejajar dengan teks
      gap: '15px',
      marginBottom: '1.5rem', // Sedikit dirapatkan agar tidak terlalu panjang ke bawah
      padding: '20px',
      backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.4)' : '#ffffff',
      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.02)',
      transition: 'transform 0.3s ease, border-color 0.3s ease',
    },
    iconWrap: {
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      padding: '12px',
      borderRadius: '12px',
      color: '#6366f1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoTitle: {
      color: isDarkMode ? '#94a3b8' : '#64748b',
      fontSize: '0.85rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      margin: '0 0 5px 0',
    },
    infoText: {
      color: isDarkMode ? '#f8fafc' : '#1e293b',
      fontSize: '1.1rem',
      fontWeight: '600',
      margin: 0,
    },
    contactLink: {
      color: isDarkMode ? '#f8fafc' : '#1e293b',
      fontSize: '1.05rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'color 0.2s',
      display: 'block',
    },
    // --- STYLES FORMULIR ---
    formWrap: {
      backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.7)' : '#ffffff',
      padding: '40px',
      borderRadius: '24px',
      border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
      boxShadow: isDarkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.05)',
      backdropFilter: 'blur(10px)',
    },
    inputGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      color: isDarkMode ? '#cbd5e1' : '#475569',
      fontSize: '0.9rem',
      fontWeight: '600',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.5)' : '#f8fafc',
      border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1',
      color: isDarkMode ? '#f8fafc' : '#1e293b',
      padding: '14px 16px',
      borderRadius: '12px',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    textarea: {
      width: '100%',
      backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.5)' : '#f8fafc',
      border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1',
      color: isDarkMode ? '#f8fafc' : '#1e293b',
      padding: '14px 16px',
      borderRadius: '12px',
      fontSize: '1rem',
      outline: 'none',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    submitBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      backgroundColor: '#4f46e5',
      color: '#ffffff',
      padding: '14px 32px',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.4)',
      transition: 'transform 0.2s ease',
      width: '100%',
    }
  };

  return (
    <section id="contact" style={styles.section}>
      
      {/* Background Partikel */}
      <div style={styles.animatedBackground}>
        <Particles />
      </div>

      <div className="container" style={styles.contentWrapper}>
        <div className="row g-5 align-items-center">
          
          {/* KOLOM KIRI: TEKS & INFO KONTAK */}
          <div className="col-lg-5">
            <h2 style={styles.title}>
              Let's Work <span style={styles.highlightText}>Together</span>
            </h2>
            <p style={styles.subtitle}>
              Tertarik untuk berkolaborasi dalam proyek pengembangan web atau analisis data? Jangan ragu untuk menghubungi saya melalui formulir di samping atau informasi sosial media di bawah ini.
            </p>

            {/* Kartu Email (Bisa diklik langsung buka email) */}
            <div style={styles.infoCard} className="contact-card-hover">
              <div style={styles.iconWrap}>
                <Mail size={24} />
              </div>
              <div>
                <p style={styles.infoTitle}>Email</p>
                <a href="mailto:renaldianicetus@gmail.com" style={styles.contactLink} className="social-link-hover">
                  renaldianicetus@gmail.com
                </a>
              </div>
            </div>

            {/* Kartu LinkedIn */}
            <div style={styles.infoCard} className="contact-card-hover">
              <div style={styles.iconWrap}>
                <FaLinkedin size={24} />
              </div>
              <div>
                <p style={styles.infoTitle}>LinkedIn</p>
                <a href="https://www.linkedin.com/in/renaldias" target="_blank" rel="noopener noreferrer" style={styles.contactLink} className="social-link-hover">
                  Renaldi Anicetus Simbolon
                </a>
              </div>
            </div>
            
            {/* Kartu Instagram */}
            <div style={styles.infoCard} className="contact-card-hover">
              <div style={styles.iconWrap}>
                <FaInstagram size={24} />
              </div>
              <div>
                <p style={styles.infoTitle}>Instagram</p>
                <a href="https://instagram.com/renaldismbln" target="_blank" rel="noopener noreferrer" style={styles.contactLink} className="social-link-hover">
                  @renaldismbln
                </a>
              </div>
            </div>

            {/* Kartu Lokasi */}
            {/* <div style={styles.infoCard} className="contact-card-hover">
              <div style={styles.iconWrap}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={styles.infoTitle}>Location</p>
                <p style={styles.infoText}>Bone, Indonesia</p>
              </div>
            </div> */}

          </div>

          {/* KOLOM KANAN: FORMULIR */}
          {/* KOLOM KANAN: FORMULIR */}
          <div className="col-lg-7">
            <div style={styles.formWrap}>
              
              <form onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                // Ubah teks tombol saat loading
                btn.innerHTML = 'Sending...';
                btn.disabled = true;

                try {
                  // GANTI URL DI BAWAH INI DENGAN URL ENDPOINT FORMSPREE KAMU
                  const response = await fetch("https://formspree.io/f/GANTI_DENGAN_ID_FORMSPREE_KAMU", {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                      Accept: "application/json",
                    },
                  });
                  
                  if (response.ok) {
                    alert("Pesan berhasil dikirim! Terima kasih telah menghubungi saya.");
                    form.reset(); // Kosongkan form setelah sukses
                  } else {
                    alert("Oops! Terjadi kesalahan saat mengirim pesan.");
                  }
                } catch (error) {
                  alert("Oops! Sepertinya ada masalah koneksi.");
                } finally {
                  // Kembalikan tombol seperti semula
                  btn.innerHTML = originalText;
                  btn.disabled = false;
                }
              }}> 
                
                <div className="row">
                  <div className="col-md-6" style={styles.inputGroup}>
                    <label style={styles.label}>Full Name</label>
                    <input 
                      type="text" 
                      name="name" // WAJIB ADA agar Formspree tahu ini data apa
                      required
                      style={styles.input} 
                      placeholder="John Doe" 
                      className="contact-input"
                    />
                  </div>
                  <div className="col-md-6" style={styles.inputGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input 
                      type="email" 
                      name="email" // WAJIB ADA
                      required
                      style={styles.input} 
                      placeholder="john@example.com" 
                      className="contact-input"
                    />
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Subject</label>
                  <input 
                    type="text" 
                    name="subject" // WAJIB ADA
                    required
                    style={styles.input} 
                    placeholder="Project Inquiry / Job Opportunity" 
                    className="contact-input"
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Message</label>
                  <textarea 
                    name="message" // WAJIB ADA
                    required
                    style={styles.textarea} 
                    placeholder="Hello Renaldi, I would like to discuss..." 
                    className="contact-input"
                  ></textarea>
                </div>

                <button type="submit" style={styles.submitBtn} className="btn-submit">
                  <a href='mailto:renaldianicetus@gmail.com'></a>Send Message <Send size={18} />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* CSS Inline untuk efek fokus, hover tautan, dan hover kartu */}
      <style>{`
        .contact-input:focus {
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2) !important;
        }
        .btn-submit:hover {
          transform: translateY(-2px);
          background-color: #4338ca !important;
        }
        .contact-card-hover:hover {
          transform: translateX(5px);
          border-color: rgba(99, 102, 241, 0.4) !important;
        }
        .social-link-hover:hover {
          color: #6366f1 !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;