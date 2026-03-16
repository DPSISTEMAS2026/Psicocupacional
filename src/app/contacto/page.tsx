export default function Contacto() {
  return (
    <div className="animate-fade-in">
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url("/assets/banner-contacto.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        display: 'flex',
        alignItems: 'center'
      }}>
      </section>

      <section style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Info y Redes */}
            <div>
              <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '2rem' }}>Información de Contacto</h2>
              <p style={{ opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.6 }}>Estamos ubicados en la comuna de Quintero. Contáctanos por cualquiera de nuestras vías para más información.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '24px', borderLeft: '6px solid var(--calipso)', backgroundColor: '#fff' }}>
                  <h4 style={{ opacity: 0.5, fontSize: '0.8rem', textTransform: 'uppercase' }}>Ubicación</h4>
                  <p style={{ fontWeight: 700, fontSize: '1.2rem' }}>📍 Quintero, V Región, Chile</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem', borderRadius: '24px', borderLeft: '6px solid var(--magenta)', backgroundColor: '#fff' }}>
                  <h4 style={{ opacity: 0.5, fontSize: '0.8rem', textTransform: 'uppercase' }}>Correo Electrónico</h4>
                  <p style={{ fontWeight: 700, fontSize: '1.2rem' }}>📧 contacto@psicocupacional.cl</p>
                </div>
              </div>

              {/* Botón WhatsApp */}
              <a 
                href="https://wa.me/56912345678" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn hover-glow" 
                style={{ 
                  background: '#25D366', 
                  color: 'white', 
                  padding: '1.5rem', 
                  borderRadius: '24px', 
                  fontWeight: 800, 
                  fontSize: '1.1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '1rem', 
                  width: '100%', 
                  boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)',
                  marginBottom: '2rem'
                }}
              >
                <span>💬 Contactar por WhatsApp</span>
              </a>

              {/* Redes Sociales */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://instagram.com/psicocupacional_" target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1, textAlign: 'center', background: '#e1306c', color: 'white', fontWeight: 600, padding: '1rem', borderRadius: '16px' }}>Instagram</a>
                <a href="https://tiktok.com/@psicocupacional_" target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1, textAlign: 'center', background: '#000', color: 'white', fontWeight: 600, padding: '1rem', borderRadius: '16px' }}>TikTok</a>
              </div>
            </div>

            {/* Mapa Leaflet */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Nuestra Ubicación</h3>
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-71.54,-32.79,-71.51,-32.76&layer=mapnik&marker=-32.7801,-71.5284" 
                width="100%" 
                height="400px" 
                style={{ border: 'none', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
