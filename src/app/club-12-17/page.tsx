'use client';

import { useState, useEffect } from 'react';

export default function Club() {
  const [config, setConfig] = useState<any>(null);
  const [gallery, setGallery] = useState<string[]>([
    "/assets/WhatsApp Video 2026-03-13 at 10.37.26 AM.mp4",
    "/assets/club-logo-experiencias.png"
  ]);

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setConfig(data);
          if (data.gallery && data.gallery.length > 0) {
            setGallery(data.gallery);
          }
        }
      });
  }, []);

  const defaultSections = [
    { title: "¿Qué es?", content: "El Club 12/17 es un espacio grupal dirigido a adolescentes neurodivergentes donde se trabajan habilidades para la vida diaria a través de experiencias prácticas y significativas." },
    { title: "¿A quién está dirigido?", content: "Está dirigido a adolescentes entre 12 y 21 años, principalmente jóvenes dentro del espectro autista u otras condiciones del neurodesarrollo..." },
    { title: "¿Qué hacemos?", content: "En cada sesión realizamos actividades reales que permiten aprender haciendo, como manejar dinero, comprar en el supermercado, cocinar..." }
  ];

  const defaultTalles = [
    { title: "Manejo de dinero", icon: "💰", desc: "Aprendemos a reconocer precios, comparar productos, pagar y administrar dinero en situaciones reales." },
    { title: "Compras en la comunidad", icon: "🛒", desc: "Practicamos cómo comprar en supermercados... " },
    { title: "Cocina para la vida diaria", icon: "🍳", desc: "Preparamos comidas simples y funcionales..." }
  ];

  const sections = config?.club?.qa?.length ? config.club.qa : defaultSections;
  const talles = config?.club?.talles?.length ? config.club.talles : defaultTalles;
  const clubBanner = config?.club?.banner || "/assets/banner-12-17.png";

  return (
    <div className="animate-fade-in">
      {/* Banner / Portada */}
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url("/assets/banner-12-17.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        display: 'flex',
        alignItems: 'center'
      }}>
      </section>

      {/* Secciones Informativas */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem', marginBottom: '5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h2 style={{ fontSize: '2.8rem', color: 'var(--calipso)', marginBottom: '1rem' }}>Sobre el Club 12/17</h2>
              {sections.map((item, index) => (
                <div key={index} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--foreground)', marginBottom: '0.6rem', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>{item.content}</p>
                </div>
              ))}
            </div>
            
            <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <img 
                src="/assets/WhatsApp Image 2026-03-13 at 10.39.25 AM.jpeg" 
                alt="Actividad Club" 
                style={{ width: '100%', display: 'block' }} 
              />
            </div>
          </div>

          {/* Talleres que tenemos */}
          <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--foreground)', marginBottom: '3rem', textAlign: 'center', fontWeight: 800 }}>Talleres que tenemos</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
              {talles.map((taller, i) => (
                <div key={i} className="glass hover-glow" style={{ 
                  flex: '1 1 300px', 
                  maxWidth: '360px', 
                  padding: '2.5rem', 
                  borderRadius: '32px', 
                  backgroundColor: '#fff', 
                  borderLeft: '5px solid var(--yellow)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{taller.icon}</div>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--foreground)', fontWeight: 700 }}>{taller.title}</h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.7 }}>{taller.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fotos de los talleres */}
      <section style={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #f0f3f6' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--calipso)', marginBottom: '1rem' }}>Fotos de los talleres</h2>
            <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Conoce nuestras experiencias grupales y el día a día en red.</p>
          </div>

          {/* Carousel Arrow Left */}
          <button 
            onClick={() => { document.getElementById('fotos-slider')!.scrollLeft -= 400; }}
            style={{ position: 'absolute', top: '55%', left: '0px', transform: 'translateY(-50%)', background: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', zIndex: 10, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--foreground)' }}
          >
            ‹
          </button>

          {/* Carousel container */}
          <div id="fotos-slider" style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory', 
            touchAction: 'pan-x',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '1rem'
          }}>
            {gallery.map((media_src, i) => {
              const isVideo = media_src.toLowerCase().endsWith('.mp4');
              return (
                <div key={i} className="glass hover-glow" style={{ flex: '0 0 calc(33.333% - 1rem)', minWidth: '320px', scrollSnapAlign: 'start', borderRadius: '32px', overflow: 'hidden', height: '480px', backgroundColor: '#000' }}>
                  {isVideo ? (
                    <video 
                      controls 
                      muted 
                      loop 
                      autoPlay 
                      playsInline 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src={media_src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={media_src} alt="Galería" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Carousel Arrow Right */}
          <button 
            onClick={() => { document.getElementById('fotos-slider')!.scrollLeft += 400; }}
            style={{ position: 'absolute', top: '55%', right: '0px', transform: 'translateY(-50%)', background: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', zIndex: 10, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--foreground)' }}
          >
            ›
          </button>
        </div>
      </section>
    </div>
  );
}
