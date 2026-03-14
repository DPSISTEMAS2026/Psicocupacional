export default function Noticias() {
  const posts = [
    { title: "Taller de Manejo de Dinero", date: "10 Marzo, 2026", category: "Actividad", desc: "Nuestros jóvenes del Club 12/17 practicaron compras reales en la feria local." },
    { title: "Encuentro de Verano", date: "25 Febrero, 2026", category: "Evento", desc: "Una jornada de integración y juegos al aire libre para todas las familias." },
    { title: "Nueva Alianza Comunitaria", date: "15 Febrero, 2026", category: "Noticia", desc: "Firmamos convenio para el uso de espacios deportivos en la comuna." },
  ];

  return (
    <div className="animate-fade-in">
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url("/assets/banner-noticias.png")',
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
            <h2 style={{ fontSize: '2.8rem', color: '#0f172a', marginBottom: '1rem' }}>Actualidad Institucional</h2>
            <p style={{ opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>Descubre las últimas actividades, talleres y noticias de nuestra comunidad.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {posts.map((post, i) => (
              <div key={i} className="glass hover-glow" style={{ borderRadius: '32px', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ height: '12px', background: i % 2 === 0 ? 'var(--calipso)' : 'var(--magenta)' }}></div>
                <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', fontSize: '0.8rem', fontWeight: 700 }}>
                    <span style={{ color: i % 2 === 0 ? 'var(--calipso)' : 'var(--magenta)', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category}</span>
                    <span style={{ opacity: 0.5 }}>{post.date}</span>
                  </div>
                  <h3 style={{ marginBottom: '1.2rem', fontSize: '1.5rem', lineHeight: '1.3' }}>{post.title}</h3>
                  <p style={{ fontSize: '1rem', marginBottom: '2.5rem', flex: 1, lineHeight: '1.6', opacity: 0.8 }}>{post.desc}</p>
                  <a href="#" style={{ color: '#0f172a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid transparent', width: 'fit-content', transition: 'all 0.3s' }}>
                    CONTINUAR LEYENDO <span style={{ fontSize: '1.2rem' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
