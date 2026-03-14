export default function Material() {
  const materials = [
    { title: "Guía de Autonomía en el Hogar", type: "PDF", size: "2.4 MB" },
    { title: "Calendario de Actividades Mensual", type: "PDF", size: "1.1 MB" },
    { title: "Manual de Estrategias Socioeducativas", type: "Digital", size: "5.8 MB" },
    { title: "Ficha de Inscripción Club 12/17", type: "DOCX", size: "0.5 MB" },
  ];

  return (
    <div className="animate-fade-in">
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url("/assets/banner-material.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
      </section>

      <section style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.8rem', color: '#0f172a', marginBottom: '1rem' }}>Recursos y Herramientas</h2>
            <p style={{ opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>Material técnico y educativo diseñado para apoyar procesos de desarrollo en diversos entornos.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {materials.map((m, i) => (
              <div key={i} className="glass hover-glow" style={{ padding: '2.5rem', borderRadius: '32px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ 
                  width: '40px', 
                  height: '6px', 
                  background: 'var(--magenta)', 
                  borderRadius: '99px',
                  marginBottom: '1.5rem'
                }}></div>
                <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>{m.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '2.5rem', opacity: 0.6, fontWeight: 600 }}>
                  FORMATO: {m.type} | PESO: {m.size}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <button className="btn" style={{ width: '100%', background: '#0f172a', color: 'white', padding: '1rem', borderRadius: '14px', fontWeight: 600, letterSpacing: '1px' }}>
                    DESCARGAR RECURSO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
