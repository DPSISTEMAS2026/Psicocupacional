import Image from "next/image";

export default function Home() {
  const blobs = [
    { src: "/assets/19.png", class: "blob-tl" },
    { src: "/assets/20.png", class: "blob-cr" },
    { src: "/assets/21.png", class: "blob-bl" },
    { src: "/assets/22.png", class: "blob-tr" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero / Portada */}
      <section style={{ height: '55vh', padding: 0, display: 'flex', alignItems: 'center', backgroundColor: '#000' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
          >
            <source src="/assets/PSICOCUPACIONAL.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Introducción / Slogan */}
      <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ position: 'relative', borderRadius: '48px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <img src="/assets/28.png" alt="Actividad Fundación" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div className="animate-hero-logo" style={{ marginBottom: '2rem' }}>
                <img src="/assets/29.png" alt="Logo Fundación" style={{ height: '100px', width: 'auto' }} />
              </div>
              <h1 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
                Fundación Psicocupacional
              </h1>
              <p style={{ 
                fontSize: '1.4rem', 
                fontWeight: 500,
                color: 'var(--foreground)',
                opacity: 0.9,
                lineHeight: 1.4,
                marginBottom: '2rem'
              }}>
                “Habilidades para la vida, autonomía para participar y convivir.”
              </p>
              <p style={{ fontSize: '1.1rem', opacity: 0.7, lineHeight: 1.6 }}>
                Somos una institución dedicada al desarrollo integral de personas neurodivergentes. Nuestro compromiso es brindar herramientas reales para un futuro autónomo y lleno de posibilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentación e Identidad */}
      <section id="nosotros" style={{ backgroundColor: '#fcfcfc', overflow: 'hidden', borderTop: '1px solid #f0f3f6' }}>
        <div className="blob-container">
          <img src={blobs[0].src} className={`blob ${blobs[0].class}`} alt="" />
          <img src={blobs[1].src} className={`blob ${blobs[1].class}`} alt="" />
        </div>
        
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem', marginBottom: '6rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--calipso)', marginBottom: '2rem' }}>Nuestra Identidad</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8', opacity: 0.8 }}>
                <strong>Psicocupacional</strong> es una iniciativa orientada a promover el desarrollo de habilidades para la vida en personas neurodivergentes, a través de espacios de aprendizaje, interacción social y experiencias prácticas en la comunidad.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8 }}>
                Buscamos fortalecer la autonomía personal y la inclusión comunitaria activa de adolescentes y jóvenes, reconociendo el valor único de cada forma de aprender y relacionarse.
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
                Promover el desarrollo de habilidades para la vida en personas neurodivergentes mediante espacios de aprendizaje, interacción social y experiencias prácticas que favorezcan su autonomía personal, participación en la comunidad y bienestar en distintas etapas de la vida.
              </p>
            </div>
            <div className="glass" style={{ padding: '3.5rem', borderRadius: '48px', borderLeft: '8px solid var(--magenta)', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff' }}>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--magenta)' }}>Visión</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.8 }}>
                Ser un espacio de referencia en el desarrollo de habilidades para la vida en personas neurodivergentes, promoviendo oportunidades de participación, autonomía y bienestar que favorezcan su inclusión activa en la comunidad.
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '3.5rem', fontWeight: 700 }}>Nuestros Valores Guía</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: "Respeto", desc: "Valorar las distintas formas de pensar y aprender.", color: "var(--calipso)" },
                { title: "Autonomía", desc: "Desarrollo progresivo de la independencia cotidiana.", color: "var(--yellow)" },
                { title: "Inclusión", desc: "Fomentar la participación activa en la comunidad.", color: "var(--magenta)" },
                { title: "Colaboración", desc: "Trabajo conjunto con familias e instituciones.", color: "var(--calipso)" },
                { title: "Aprendizaje", desc: "Experiencias prácticas con sentido para la vida.", color: "var(--magenta)" }
              ].map((val, i) => (
                <div key={i} className="glass hover-glow" style={{ padding: '2.5rem 2rem', borderRadius: '32px', textAlign: 'center', backgroundColor: '#fff' }}>
                  <div style={{ width: '40px', height: '4px', background: val.color, margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
                  <h4 style={{ color: val.color, marginBottom: '0.8rem', fontSize: '1.3rem', fontWeight: 700 }}>{val.title}</h4>
                  <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: '1.5' }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programas y Actividades - Lo que Hacemos */}
      <section id="actividades" style={{ backgroundColor: '#fff', padding: '8rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3.2rem', color: 'var(--foreground)', marginBottom: '1.5rem', fontWeight: 800 }}>Programas de Apoyo</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '700px', margin: '0 auto' }}>
              Líneas de acción diseñadas para el fortalecimiento de la autonomía y la participación social.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {[
              { 
                title: "Habilidades Sociales", 
                desc: "Dinámicas grupales para la comunicación, convivencia entre pares y construcción de vínculos significativos.",
                icon: "🤝",
                color: "var(--calipso)"
              },
              { 
                title: "Autonomía Cotidiana", 
                desc: "Talleres prácticos: manejo de dinero, identificación de precios, compras simples y toma de decisiones.",
                icon: "🏠",
                color: "var(--yellow)"
              },
              { 
                title: "Participación Comunitaria", 
                desc: "Salidas reales a espacios públicos, uso de transporte y desplazamientos urbanos supervisados.",
                icon: "🏙️",
                color: "var(--magenta)"
              }
            ].map((activity, i) => (
              <div key={i} className="glass hover-glow" style={{ padding: '4rem 3rem', borderRadius: '40px', backgroundColor: '#fff', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '2rem', display: 'block' }}>{activity.icon}</div>
                <h3 style={{ fontSize: '1.80rem', marginBottom: '1.2rem', color: activity.color, fontWeight: 700 }}>{activity.title}</h3>
                <p style={{ fontSize: '1.1rem', opacity: 0.7, lineHeight: '1.7' }}>{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Intervención (Pilares) */}
      <section style={{ backgroundColor: '#0f172a', color: 'white' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '-20px', 
                width: '100px', 
                height: '100px', 
                background: 'var(--calipso)', 
                opacity: 0.2, 
                borderRadius: '50%',
                filter: 'blur(30px)'
              }}></div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.1' }}>
                Nuestro Modelo de <span style={{ color: 'var(--calipso)' }}>Intervención</span>
              </h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '3rem', lineHeight: '1.8' }}>
                Nos basamos en el desarrollo de habilidades mediante experiencias prácticas y significativas en contextos reales.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  "Aprendizaje Experiencial y Práctico",
                  "Enfoque en Trabajo Grupal y Pares",
                  "Acompañamiento Profesional Especializado",
                  "Intervención en Contextos Comunitarios Reales",
                  "Participación y Acompañamiento de Familias"
                ].map((pilar, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                    <span style={{ color: 'var(--calipso)', fontSize: '1.5rem' }}>✓</span> {pilar}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: 'relative', height: '500px', borderRadius: '48px', overflow: 'hidden' }}>
              <img src="/assets/28.png" alt="Acompañamiento" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a, transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '3rem', left: '3rem', right: '3rem' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem', opacity: 0.9 }}>
                  "Buscamos que cada aprendizaje tenga sentido en la vida cotidiana de nuestros participantes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Equipo Profesional */}
      <section id="equipo" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.2rem', color: 'var(--foreground)' }}>Nuestro Equipo</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto' }}>
              Profesionales comprometidos con el desarrollo integral y la calidez humana.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '3rem' }}>
            {[
              { 
                name: "Rocío Jerez U.",
                role: "Terapeuta Ocupacional", 
                image: "/assets/rocio.jpg",
                desc: "Diplomada en inclusión social y educativa para personas con la condición del Espectro Autista. Especialista en autonomía y participación.",
                accent: "var(--magenta)"
              },
              { 
                name: "Edgardo Pino E.",
                role: "Psicólogo", 
                image: "/assets/edgardo.jpg",
                desc: "Certificado en modelo SCERTS. Especialista en evaluación e intervención a población infantil, juvenil y adultos.",
                accent: "var(--calipso)"
              }
            ].map((prof, i) => (
              <div key={i} className="team-card hover-glow">
                <div className="team-image-container">
                  <img 
                    src={prof.image} 
                    alt={prof.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} 
                  />
                </div>
                <div style={{ padding: '2.5rem', textAlign: 'center', position: 'relative', marginTop: '-2rem', zIndex: 1 }}>
                  <div style={{ 
                    display: 'inline-block', 
                    padding: '0.5rem 1.5rem', 
                    background: prof.accent, 
                    color: 'white', 
                    borderRadius: '50px', 
                    fontWeight: 700, 
                    fontSize: '0.85rem', 
                    marginBottom: '1.2rem', 
                    boxShadow: `0 10px 20px ${prof.accent}44`
                  }}>
                    {prof.role}
                  </div>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>{prof.name}</h3>
                  <p style={{ fontSize: '1.05rem', opacity: 0.8, lineHeight: '1.7' }}>
                    {prof.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunidad y Redes Sociales */}
      <section id="comunidad" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--calipso)', marginBottom: '1.5rem' }}>Nuestra Comunidad</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.6 }}>Vive nuestro día a día a través de nuestras redes sociales.</p>
          </div>

          <div className="video-slider-container">
            {[
              "/assets/WhatsApp Video 2026-03-13 at 10.37.14 AM.mp4",
              "/assets/WhatsApp Video 2026-03-13 at 10.37.19 AM.mp4",
              "/assets/WhatsApp Video 2026-03-13 at 10.37.24 AM.mp4",
              "/assets/WhatsApp Video 2026-03-13 at 10.37.57 AM.mp4"
            ].map((video, idx) => (
              <div key={idx} className="video-slide hover-glow">
                <video 
                  muted 
                  loop 
                  autoPlay 
                  controls
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          <div className="follow-banner">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Únete a nuestra comunidad!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              Síguenos para ver más historias, consejos y actividades.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="https://instagram.com/psicocupacional_" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--magenta)', padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700 }}>
                Instagram
              </a>
              <a href="https://tiktok.com/@psicocupacional_" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'black', padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700 }}>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
