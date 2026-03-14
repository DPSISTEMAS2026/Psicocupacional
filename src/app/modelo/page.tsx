export default function Modelo() {
  return (
    <div className="animate-fade-in">
      <section style={{ background: 'var(--gradient-primary)', color: 'white', padding: '6rem 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem' }}>Modelo de Intervención</h1>
          <p style={{ fontSize: '1.2rem', opacity: 1, maxWidth: '600px' }}>
            Un enfoque psicocupacional orientado al fortalecimiento de habilidades para la vida.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Enfoque Socioeducativo</h2>
            <p style={{ fontSize: '1.2rem', color: 'gray' }}>
              Reconocemos que muchas habilidades necesarias para la vida cotidiana requieren procesos de aprendizaje más explícitos y acompañados.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
              <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '2rem' }}>🛒</span> Habilidades Prácticas
              </h3>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
                <li>Manejo de dinero y finanzas personales</li>
                <li>Interacción social efectiva</li>
                <li>Toma de decisiones informadas</li>
                <li>Resolución de problemas cotidianos</li>
                <li>Organización de actividades y tiempo</li>
                <li>Desplazamiento seguro en la comunidad</li>
              </ul>
            </div>
            <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
              <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '2rem' }}>🚌</span> Contextos Reales
              </h3>
              <p style={{ marginBottom: '1rem' }}>Desarrollamos habilidades mediante experiencias prácticas:</p>
              <ul style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
                <li>Realizar compras en el comercio local</li>
                <li>Uso autónomo del transporte público</li>
                <li>Interacción en diversos espacios públicos</li>
                <li>Participación en actividades sociales y culturales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Principios del Modelo</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
              Nuestro modelo se basa en el fortalecimiento gradual de la independencia personal y la participación activa en el entorno social del participante.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { t: "Autonomía Progresiva", d: "Fomentamos la independencia paso a paso." },
              { t: "Participación Social", d: "Facilitamos la integración comunitaria." },
              { t: "Aprendizaje Significativo", d: "Experiencias relevantes para el día a día." },
              { t: "Acompañamiento", d: "Guía experta en cada etapa del desarrollo." }
            ].map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{p.t}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
