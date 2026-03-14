export default function Contacto() {
  return (
    <div className="animate-fade-in">
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url("/assets/banner-contacto.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
      </section>

      <section style={{ backgroundColor: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 400px) 1fr', gap: '5rem', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '2.5rem' }}>Información de Contacto</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: "Correo Electrónico", value: "contacto@psicocupacional.cl", accent: "var(--calipso)" },
                { label: "WhatsApp / Teléfono", value: "+56 9 1234 5678", accent: "var(--magenta)" },
                { label: "Ubicación", value: "Viña del Mar, Chile", accent: "var(--yellow)" }
              ].map((item, i) => (
                <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '24px', borderLeft: `6px solid ${item.accent}` }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.6, letterSpacing: '1px' }}>{item.label}</h4>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#0f172a' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass hover-glow" style={{ padding: '4rem', borderRadius: '40px', background: '#0f172a', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ marginBottom: '2.5rem', fontSize: '2rem', color: 'white' }}>Envíanos un mensaje</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7 }}>Nombre Completo</label>
                  <input type="text" placeholder="Tu nombre" style={{ width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7 }}>Correo Electrónico</label>
                  <input type="email" placeholder="email@ejemplo.com" style={{ width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7 }}>Mensaje</label>
                <textarea rows={5} placeholder="¿En qué podemos ayudarte?" style={{ width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <button type="button" className="btn" style={{ background: 'var(--calipso)', color: 'white', padding: '1.5rem', borderRadius: '18px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                Enviar Mensaje Institucional
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
