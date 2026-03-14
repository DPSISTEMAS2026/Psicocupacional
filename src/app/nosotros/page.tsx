export default function Nosotros() {
  return (
    <div className="animate-fade-in">
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url("/assets/banner-nosotros.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
      </section>

      {/* Identidad Institucional */}
      <section style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--magenta)', marginBottom: '1.5rem' }}>Nuestra Identidad</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                La <strong>Corporación Psicocupacional</strong> es una iniciativa orientada a promover el desarrollo de habilidades para la vida en personas neurodivergentes.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
                Nuestra propuesta surge de la necesidad de fortalecer la autonomía personal, la participación social y el desarrollo de vínculos significativos en adolescentes y jóvenes con condiciones del neurodesarrollo.
              </p>
              
              <div className="glass hover-glow" style={{ padding: '2.5rem', borderRadius: '32px', background: '#0f172a', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ marginBottom: '1rem', color: 'white' }}>Nuestra Misión</h3>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                  Promover el desarrollo de habilidades para la vida mediante espacios de aprendizaje, interacción social y experiencias prácticas que favorezcan la autonomía y el bienestar.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img 
                src="/assets/3.png" 
                alt="Identidad Psicocupacional" 
                style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-premium)' }} 
              />
              <div className="glass" style={{ padding: '2.5rem', borderRadius: '32px', background: 'var(--gradient-primary)', color: 'white' }}>
                <h3 style={{ marginBottom: '1rem', color: 'white' }}>Nuestra Visión</h3>
                <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                  Ser un espacio de referencia en el desarrollo de autonomía y participación activa, promoviendo la inclusión real de personas neurodivergentes en la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Guía */}
      <section style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Valores que nos Guían</h2>
            <p style={{ opacity: 0.7 }}>Los principios fundamentales sobre los que construimos nuestra labor diaria.</p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {[
              { title: "Respeto", color: "var(--magenta)", desc: "Valoramos las distintas formas de pensar, aprender y relacionarse." },
              { title: "Autonomía", color: "var(--yellow)", desc: "Promovemos el desarrollo progresivo de la independencia cotidiana." },
              { title: "Inclusión", color: "var(--calipso)", desc: "Fomentamos la participación activa en el entorno social." },
              { title: "Colaboración", color: "#3b82f6", desc: "Trabajamos junto a familias y profesionales de forma integrada." },
              { title: "Aprendizaje", color: "var(--magenta)", desc: "Experiencias prácticas con sentido real para la vida." }
            ].map((v, i) => (
              <div key={i} className="glass hover-glow" style={{ padding: '2.5rem', borderRadius: '24px', textAlign: 'left', borderTop: `6px solid ${v.color}` }}>
                <h4 style={{ color: v.color, marginBottom: '1rem', fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{v.title}</h4>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.9 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
