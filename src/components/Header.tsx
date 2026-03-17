'use client';

import { useState } from 'react';

const SmileyIcon = ({ color }: { color: string }) => (
  <svg width="22" height="14" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '2px' }}>
    <circle cx="35" cy="20" r="10" fill={color} />
    <circle cx="65" cy="20" r="10" fill={color} />
    <path d="M20 40C20 40 35 55 50 55C65 55 80 40 80 40" stroke={color} strokeWidth="10" strokeLinecap="round" />
  </svg>
);

interface MenuItem {
  name: string;
  path: string;
  color: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "Qué hacemos", path: "/", color: "var(--calipso)" },
    { name: "Programa Club 12/17", path: "/club-12-17", color: "var(--yellow)" },
    { name: "Contacto", path: "/contacto", color: "var(--magenta)" },
  ];

  return (
    <>
      <header className="glass" style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%',
        zIndex: 110, 
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          {/* Logo */}
          <a href="/" style={{ 
            height: '85px', 
            display: 'flex', 
            alignItems: 'center', 
            flexShrink: 0,
            marginRight: '1rem',
            width: '280px',
            position: 'relative'
          }}>
            <img 
              src="/assets/logo-sin-fundacion.png" 
              alt="Logo Psicocupacional" 
              style={{ 
                height: '210%', 
                width: 'auto', 
                objectFit: 'contain',
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
              }} 
            />
          </a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, justifyContent: 'flex-end' }}>
            {/* Nav Desktop */}
            <nav className="nav-desktop" style={{ display: 'flex', gap: '0px', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <div key={item.name} className="nav-item">
                  <a 
                    href={item.path} 
                    className="nav-link-premium"
                    style={{ 
                      '--hover-color': item.color 
                    } as React.CSSProperties}
                  >
                    <SmileyIcon color={item.color} />
                    <span>{item.name}</span>
                  </a>
                </div>
              ))}
            </nav>

            {/* Redes Sociales (Ocultas en movil para dar espacio) */}
            <div className="nav-desktop" style={{ 
              display: 'flex', 
              gap: '1rem', 
              paddingLeft: '1rem', 
              borderLeft: '1px solid #eee',
              marginLeft: '0.5rem'
            }}>
              <a href="https://instagram.com/psicocupacional_" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://tiktok.com/@psicocupacional_" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.44-4.13-1.19-.29-.17-.57-.38-.82-.61-.02 2.76 0 5.51-.01 8.26-.07 4.13-3.37 7.72-7.48 7.37-3.4-.29-6.04-3.21-6-6.63.03-2.9 2.13-5.59 5-6.18v4.01c-1.22.39-2.07 1.69-1.89 2.96.16 1.02.99 1.83 2.01 1.95 1.34.16 2.59-.85 2.59-2.2V0h.01s.02 0 .02.02z"/></svg>
              </a>
            </div>

            {/* BOTÓN BURGER (MÓVIL) */}
            <button 
              className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir Menú"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL OVERLAY */}
      <div className={`nav-mobile-overlay ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <a 
            key={item.name} 
            href={item.path} 
            className="nav-link-premium"
            onClick={() => setIsOpen(false)}
            style={{ 
              '--hover-color': item.color 
            } as React.CSSProperties}
          >
            <SmileyIcon color={item.color} />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </>
  );
}
