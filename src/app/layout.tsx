import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Psicocupacional | Neurodiversidad y Habilidades para la Vida",
  description: "Promovemos el desarrollo de habilidades para la vida en personas neurodivergentes, favoreciendo su autonomía, participación social y bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#fff' }}>
        <Header />

        <main style={{ paddingTop: '100px' }}>
          {children}
        </main>

        <footer style={{ background: '#f8fafc', color: 'var(--foreground)', padding: '5rem 0 2rem 0', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '4rem' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
              <div style={{ gridColumn: 'span 1.5' }}>
                <img src="/assets/logo-sin-fundacion.png" alt="Logo" style={{ height: '100px', marginBottom: '1.5rem', filter: 'brightness(1)' }} />
                <p style={{ opacity: 0.7, maxWidth: '300px', fontSize: '0.9rem' }}>
                  Habilidades para la vida, autonomía para participar y convivir. Transformando la mirada hacia la neurodiversidad.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--calipso)' }}>Institucional</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                  <li><a href="/" style={{ opacity: 0.7 }}>Qué hacemos</a></li>
                  <li><a href="/club-12-17" style={{ opacity: 0.7 }}>Programa Club 12/17</a></li>
                  <li><a href="/contacto" style={{ opacity: 0.7 }}>Contacto</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--calipso)' }}>Contacto</h4>
                <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 Quintero, V Región, Chile</p>
                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>📧 contacto@psicocupacional.cl</p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem', textAlign: 'center' }}>
              <p style={{ opacity: 0.4, fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Psicocupacional. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
