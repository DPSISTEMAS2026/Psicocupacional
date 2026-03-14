import Image from "next/image";

export default function Club() {
  return (
    <div className="animate-fade-in">
      <section style={{ 
        position: 'relative',
        background: 'var(--gradient-primary)', // fallback
        backgroundImage: 'url("/assets/banner-12-17.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
      </section>

      {/* Propósito y Enfoque */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--calipso)', marginBottom: '1.5rem' }}>Habilidades para Participar y Convivir</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                El <strong>Club 12/17</strong> es una instancia grupal orientada a potenciar la autonomía y participación social de adolescentes y jóvenes neurodivergentes de entre 11 y 21 años. 
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
                Basándonos en el aprendizaje experiencial, buscamos que cada participante desarrolle herramientas prácticas para desenvolverse con seguridad en su entorno, fomentando el sentido de pertenencia y la construcción de vínculos significativos.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { title: "Socialización", icon: "💬", desc: "Interacción entre pares y comunicación asertiva." },
                  { title: "Autonomía", icon: "💰", desc: "Manejo de dinero y toma de decisiones." },
                  { title: "Comunidad", icon: "🚌", desc: "Uso de transporte y desplazamiento urbano." },
                  { title: "Vínculos", icon: "💜", desc: "Creación de lazos y respeto mutuo." }
                ].map((item, i) => (
                  <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid var(--calipso)' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h4 style={{ marginBottom: '0.3rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass hover-glow" style={{ padding: '2.5rem', borderRadius: '32px', background: '#0f172a', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ marginBottom: '1rem', color: 'white' }}>Metodología Activa</h3>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                  Trabajamos en grupos reducidos con el acompañamiento permanente de un <strong>Psicólogo</strong> y una <strong>Terapeuta Ocupacional</strong>, asegurando una intervención personalizada en contextos reales.
                </p>
              </div>
              <img 
                src="/assets/WhatsApp Image 2026-03-13 at 10.39.25 AM.jpeg" 
                alt="Actividad Club" 
                style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-premium)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Experiencias */}
      <section style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Experiencias Reales</h2>
            <p style={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
              Te invitamos a conocer las experiencias que comparten quienes participan de nuestras actividades a través de nuestras redes sociales.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="https://instagram.com/psicocupacional_" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#E1306C', color: 'white', padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600, fontSize: '0.9rem' }}>
                Instagram
              </a>
              <a href="https://tiktok.com/@psicocupacional_" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#000000', color: 'white', padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600, fontSize: '0.9rem' }}>
                TikTok
              </a>
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { type: 'video', src: "/assets/WhatsApp Video 2026-03-13 at 10.37.26 AM.mp4" },
              { type: 'image', src: "/assets/club-logo-experiencias.png" },
              { type: 'video', src: "/assets/WhatsApp Video 2026-03-13 at 10.37.16 AM.mp4" }
            ].map((media, i) => (
              <div key={i} className="glass hover-glow" style={{ borderRadius: '32px', overflow: 'hidden', height: '500px' }}>
                {media.type === 'video' ? (
                  <video 
                    controls 
                    muted 
                    loop 
                    autoPlay 
                    playsInline 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={media.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={media.src} alt="Galería" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
