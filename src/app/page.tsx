'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [config, setConfig] = useState<any>(null);
  const blobs = [
    { src: "/assets/19.png", class: "blob-tl" },
    { src: "/assets/20.png", class: "blob-cr" },
    { src: "/assets/21.png", class: "blob-bl" },
    { src: "/assets/22.png", class: "blob-tr" }
  ];

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data && data.home) {
          setConfig(data);
        }
      })
      .catch(console.error);
  }, []);

  // Datos de respaldo por si no carga la API
  const defaultHome = {
    heroTitle: "Psicocupacional",
    heroSlogan: "Habilidades para la vida, autonomía para participar y convivir.",
    aboutImage: "/assets/1.png",
    aboutText: "Somos una institución dedicada al desarrollo integral de personas neurodivergentes. Nuestro compromiso es brindar herramientas reales para un futuro autónomo y lleno de posibilidades.",
    mision: "Promover el desarrollo de habilidades para la vida en personas neurodivergentes mediante espacios de aprendizaje, interacción social y experiencias prácticas que favorezcan su autonomía...",
    vision: "Ser un espacio de referencia en el desarrollo de habilidades para la vida en personas neurodivergentes, promoviendo oportunidades de participación, autonomía y bienestar...",
    monitores: [
      { name: "Rocío Jerez U.", text: "Diplomada en inclusión social y educativa para personas con la condición del Espectro Autista. Especialista en autonomía y participación.", image: "/assets/rocio.jpg" },
      { name: "Edgardo Pino E.", text: "Certificado en el modelo SCERTS, especialista en evaluación e intervención con población infanto-juvenil...", image: "/assets/edgardo.jpg" }
    ],
    galeriaMomentos: [
      "/assets/WhatsApp Video 2026-03-13 at 10.37.14 AM.mp4",
      "/assets/WhatsApp Video 2026-03-13 at 10.37.19 AM.mp4"
    ],
    redes: { instagram: "psicocupacional_", tiktok: "psicocupacional_" }
  };

  const home = config?.home ? { ...defaultHome, ...config.home } : defaultHome;
  const videoHome = config?.videoHome || "/assets/PSICOCUPACIONAL.mp4";

  return (
    <div className="animate-fade-in">
      {/* Hero / Portada */}
      <section style={{ height: '55vh', padding: 0, position: 'relative', display: 'flex', alignItems: 'center', backgroundColor: '#000' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            key={videoHome} // fuerza recarga si cambia ruta
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
          >
            <source src={videoHome} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Introducción / Slogan */}
      <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ position: 'relative', borderRadius: '48px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <img src={home.aboutImage || "/assets/1.png"} alt="Logo Psicocupacional" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h1 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                {home.heroTitle}
              </h1>
              <p style={{ 
                fontSize: '1.4rem', 
                fontWeight: 500,
                color: 'var(--foreground)',
                opacity: 0.9,
                lineHeight: 1.4,
                marginBottom: '2rem'
              }}>
                {home.heroSlogan}
              </p>
              <p style={{ fontSize: '1.1rem', opacity: 0.7, lineHeight: 1.6 }}>
                {home.aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" style={{ backgroundColor: '#fcfcfc', overflow: 'hidden', borderTop: '1px solid #f0f3f6' }}>
        <div className="blob-container">
          <img src={blobs[0].src} className={`blob ${blobs[0].class}`} alt="" />
          <img src={blobs[1].src} className={`blob ${blobs[1].class}`} alt="" />
        </div>
        
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem', marginBottom: '6rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--calipso)', marginBottom: '2rem' }}>Quiénes Somos</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8', opacity: 0.8 }}>
                <strong>Psicocupacional</strong> es una iniciativa orientada a promover el desarrollo de habilidades para la vida en personas neurodivergentes, a través de espacios de aprendizaje, interacción social y experiencias prácticas en la comunidad.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8 }}>
                Buscamos fortalecer la autonomía personal y la inclusión comunitaria activa de adolescentes y jóvenes...
              </p>
            </div>
            <div style={{ position: 'relative', borderRadius: '48px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
              <img src="/assets/3.png" alt="Nuestra Identidad" style={{ width: '100%', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)' }}></div>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            <div className="glass" style={{ padding: '3.5rem', borderRadius: '48px', borderLeft: '8px solid var(--calipso)', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff' }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--calipso)' }}>Misión</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8 }}>
                {home.mision}
              </p>
            </div>
            <div className="glass" style={{ padding: '3.5rem', borderRadius: '48px', borderLeft: '8px solid var(--magenta)', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff' }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--magenta)' }}>Visión</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8 }}>
                {home.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Los Monitores */}
      <section id="monitores" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.2rem', color: 'var(--foreground)' }}>Los Monitores</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto' }}>
              Profesionales comprometidos con el desarrollo integral y la calidez humana.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '3rem' }}>
            {(home.monitores || []).map((prof: any, i: number) => (
              <div key={i} className="team-card hover-glow">
                <div className="team-image-container">
                  <img 
                    src={prof.image || "/assets/rocio.jpg"} 
                    alt={prof.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} 
                  />
                </div>
                <div style={{ padding: '2.5rem', textAlign: 'center', position: 'relative', marginTop: '-2rem', zIndex: 1 }}>
                  <div style={{ 
                    display: 'inline-block', 
                    padding: '0.5rem 1.5rem', 
                    background: i === 0 ? 'var(--magenta)' : 'var(--calipso)', 
                    color: 'white', 
                    borderRadius: '50px', 
                    fontWeight: 700, 
                    fontSize: '0.85rem', 
                    marginBottom: '1.2rem', 
                    boxShadow: `0 10px 20px rgba(0,0,0,0.1)`
                  }}>
                    {i === 0 ? 'Terapeuta Ocupacional' : 'Psicólogo'}
                  </div>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>{prof.name}</h3>
                  <p style={{ fontSize: '1.05rem', opacity: 0.8, lineHeight: '1.7' }}>
                    {prof.text || prof.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios y Comentarios */}
      <section id="testimonios" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--calipso)', marginBottom: '1.5rem' }}>Testimonios y Comentarios</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.6 }}>Vive nuestro día a día a través de nuestras redes sociales.</p>
          </div>

          <div className="video-slider-container">
            {(home.galeriaMomentos || []).map((video: string, idx: number) => (
              <div key={idx} className="video-slide hover-glow">
                {video.toLowerCase().endsWith('.mp4') ? (
                  <video muted loop autoPlay controls playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src={video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={video} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </div>
            ))}
          </div>

          <div className="follow-banner">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Únete a nuestra comunidad!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              Síguenos para ver más historias, consejos y actividades.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href={`https://instagram.com/${home.redes?.instagram || 'psicocupacional_'}`} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--magenta)', padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700 }}>Instagram</a>
              <a href={`https://tiktok.com/@${home.redes?.tiktok || 'psicocupacional_'}`} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'black', padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700 }}>TikTok</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
