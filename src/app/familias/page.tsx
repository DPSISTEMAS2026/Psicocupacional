export default function Familias() {
  return (
    <div className="animate-fade-in">
      <section style={{ background: 'var(--gradient-primary)', color: 'white', padding: '6rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem' }}>Información para Familias</h1>
          <p style={{ fontSize: '1.2rem', opacity: 1, maxWidth: '600px' }}>
            Acompañando a las familias en las etapas de transición hacia la autonomía.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>¿A quién está dirigido?</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Nuestro programa está dirigido a adolescentes y jóvenes neurodivergentes entre <strong>11 y 21 años</strong> que requieran apoyo en el desarrollo de sus habilidades para la vida.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { t: "TEA", d: "Espectro Autista" },
                  { t: "TDAH", d: "Déficit Atencional e Hiperactividad" },
                  { t: "Síndrome de Down", d: "Condición genética" },
                  { t: "DI", d: "Discapacidad Intelectual" }
                ].map((item, i) => (
                  <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                    <h4 style={{ color: 'var(--secondary)' }}>{item.t}</h4>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Enfoque de Transmisión</h3>
              <p style={{ marginBottom: '2rem' }}>
                Nos centramos en la generalización de aprendizajes para la vida independiente:
              </p>
              <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '4px', background: 'var(--gradient-primary)', borderRadius: '2px' }}></div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--primary)' }}>Autonomía Cotidiana</h4>
                  <p style={{ fontSize: '0.9rem' }}>Manejo de dinero, compras y toma de decisiones.</p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--primary)' }}>Interacción Social</h4>
                  <p style={{ fontSize: '0.9rem' }}>Vínculos con pares y habilidades conversacionales.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)' }}>Inclusión Comunitaria</h4>
                  <p style={{ fontSize: '0.9rem' }}>Uso de transporte público y participación social.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--secondary)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Apoyo Integral</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem auto', opacity: 0.9 }}>
            La corporación no solo trabaja con los participantes, sino que promueve espacios de orientación y acompañamiento constante para las familias.
          </p>
          <a href="/contacto" className="btn btn-primary" style={{ background: 'white', color: 'var(--secondary)' }}>Solicitar Orientación</a>
        </div>
      </section>
    </div>
  );
}
