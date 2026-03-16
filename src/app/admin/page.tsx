'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [config, setConfig] = useState<any>({
    home: {
      heroTitle: '', heroSlogan: '', aboutTitle: '', aboutText: '', aboutImage: '',
      mision: '', vision: '', monitores: [], galeriaMomentos: [], redes: { tiktok: '', instagram: '' }
    },
    club: { qa: [], talles: [] },
    contacto: { whatsapp: '', correo: '', instagram: '', tiktok: '' },
    videoHome: '',
    gallery: []
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [currentTab, setCurrentTab] = useState('inicio');
  const [subTab, setSubTab] = useState(1); // 1: Portada, 2: Mision, 3: Monitores, 4: Galeria, 5: Redes

  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);

  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState('');

  useEffect(() => {
    // Definición de Datos de Respaldo (Fallback) para emergencias o primer inicio
    const fallbackHome = {
      heroTitle: "Psicocupacional",
      heroSlogan: "Habilidades para la vida, autonomía para participar y convivir.",
      aboutImage: "/assets/1.png",
      aboutText: "Psicocupacional es una iniciativa orientada a promover el desarrollo de habilidades para la vida en personas neurodivergentes, a través de espacios de aprendizaje, interacción social y experiencias prácticas en la comunidad.",
      mision: "Promover el desarrollo de habilidades para la vida en personas neurodivergentes mediante espacios de aprendizaje, interacción social y experiencias prácticas que favorezcan su autonomía...",
      vision: "Ser un espacio de referencia en el desarrollo de habilidades para la vida en personas neurodivergentes, promoviendo oportunidades de participación, autonomía y bienestar...",
      monitores: [
        { name: "Rocío Jerez U.", text: "Diplomada en inclusión social y educativa para personas con la condición del Espectro Autista. Especialista en autonomía y participación.", image: "/assets/rocio.jpg" },
        { name: "Edgardo Pino E.", text: "Certificado en el modelo SCERTS, especialista en evaluación e intervención con población infanto-juvenil. Cuenta con más de 10 años de experiencia...", image: "/assets/edgardo.jpg" }
      ],
      galeriaMomentos: [
        "/assets/WhatsApp Video 2026-03-13 at 10.37.14 AM.mp4",
        "/assets/WhatsApp Video 2026-03-13 at 10.37.19 AM.mp4"
      ],
      redes: { instagram: "psicocupacional_", tiktok: "psicocupacional_" }
    };

    const fallbackClub = {
      qa: [
        { title: "¿Qué es?", content: "El Club 12/17 es un espacio grupal dirigido a adolescentes neurodivergentes donde se trabajan habilidades para la vida diaria a través de experiencias prácticas y significativas." },
        { title: "¿A quién está dirigido?", content: "Está dirigido a adolescentes entre 12 y 21 años, principalmente jóvenes dentro del espectro autista u otras condiciones del neurodesarrollo..." },
        { title: "¿Qué hacemos?", content: "En cada sesión realizamos actividades reales que permiten aprender haciendo, como manejar dinero, comprar en el supermercado, cocinar..." }
      ],
      talles: [
        { title: "Manejo de dinero", icon: "💰", desc: "Aprendemos a reconocer precios, comparar productos, pagar y administrar dinero en situaciones reales." },
        { title: "Compras en la comunidad", icon: "🛒", desc: "Practicamos cómo comprar en supermercados, farmacias o locales del barrio..." },
        { title: "Cocina para la vida diaria", icon: "🍳", desc: "Preparamos comidas simples y funcionales que ayudan a desarrollar autonomía en la vida cotidiana." }
      ]
    };

    const fallbackContacto = {
      whatsapp: "56912345678",
      correo: "contacto@psicocupacional.cl",
      instagram: "psicocupacional_",
      tiktok: "psicocupacional_"
    };

    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        const populated = {
          home: { 
            ...fallbackHome, 
            ...data.home,
            monitores: data.home?.monitores?.length ? data.home.monitores : fallbackHome.monitores,
            galeriaMomentos: data.home?.galeriaMomentos?.length ? data.home.galeriaMomentos : fallbackHome.galeriaMomentos,
            redes: data.home?.redes ? { ...fallbackHome.redes, ...data.home.redes } : fallbackHome.redes
          },
          club: { 
            qa: data.club?.qa?.length ? data.club.qa : fallbackClub.qa, 
            talles: data.club?.talles?.length ? data.club.talles : fallbackClub.talles 
          },
          contacto: data.contacto?.correo ? { ...fallbackContacto, ...data.contacto } : fallbackContacto,
          videoHome: data.videoHome || '/assets/PSICOCUPACIONAL.mp4',
          gallery: data.gallery && data.gallery.length ? data.gallery : [
            "/assets/WhatsApp Video 2026-03-13 at 10.37.26 AM.mp4",
            "/assets/club-logo-experiencias.png"
          ]
        };
        setConfig(populated);
        setLoading(false);
      })
      .catch(() => {
        // Safe Catch Fallback usa la misma estructura robusta
        const fallbackPopulated = {
          home: fallbackHome,
          club: fallbackClub,
          contacto: fallbackContacto,
          videoHome: '/assets/PSICOCUPACIONAL.mp4',
          gallery: ["/assets/WhatsApp Video 2026-03-13 at 10.37.26 AM.mp4"]
        };
        setConfig(fallbackPopulated);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    setSaving(false);
    alert('¡Configuración guardada correctamente!');
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;

    const formData = new FormData();
    formData.append('file', uploadFile);

    setUploadMsg('Subiendo archivo...');
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    if (res.success) {
      setUploadMsg(`✅ ¡Subido de forma exitosa! Copia la ruta: ${res.url}`);
      setUploadFile(null);
    } else {
      setUploadMsg(`❌ Error: ${res.message}`);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuthed(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleInlineUpload = (fieldName: string) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    if (res.success) {
      if (fieldName.includes('.')) {
        const [p1, p2] = fieldName.split('.');
        setConfig((prev: any) => ({
          ...prev,
          [p1]: { ...prev[p1], [p2]: res.url }
        }));
      } else {
        setConfig((prev: any) => ({ ...prev, [fieldName]: res.url }));
      }
      alert('✅ Subido con éxito!');
    } else {
      alert('❌ Error: ' + res.message);
    }
  };

  if (!authed) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
        <form onSubmit={handleLogin} style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', textAlign: 'center', width: '380px' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#1e293b', fontWeight: 800 }}>🔐 Panel de Control</h2>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '2rem' }}>Ingresa la contraseña para continuar.</p>
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '1.2rem', borderRadius: '16px', border: '1px solid #e2e8f0', outline: 'none', marginBottom: '1.5rem', textAlign: 'center' }} />
          <button type="submit" style={{ display: 'block', width: '100%', background: 'var(--calipso)', color: 'white', border: 'none', borderRadius: '16px', padding: '1.2rem', fontWeight: 800, cursor: 'pointer' }}>Entrar</button>
        </form>
      </div>
    );
  }

  if (loading) return <div style={{ padding: '5rem', textAlign: 'center' }}>Cargando Panel...</div>;

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', padding: '3rem' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1e293b', marginBottom: '1.5rem', fontWeight: 800 }}>Panel de Gestión</h1>

        {/* Pestanas */}
        <div style={{ display: 'flex', gap: '0.8rem', borderBottom: '2px solid #f1f5f9', paddingBottom: '1rem', marginBottom: '2rem', overflowX: 'auto' }}>
          {['inicio', 'club', 'contacto'].map(tab => (
            <button key={tab} onClick={() => setCurrentTab(tab)} style={{ background: currentTab === tab ? 'var(--calipso)' : '#f1f5f9', color: currentTab === tab ? 'white' : '#475569', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '16px', fontWeight: 700, cursor: 'pointer', textTransform: 'capitalize' }}>
              {tab === 'inicio' ? 'Qué Hacemos' : tab}
            </button>
          ))}
        </div>

        {/* Split View Editor */}
        <div style={{ display: 'grid', gridTemplateColumns: currentTab === 'archivos' ? '1fr' : '1.2fr 1fr', gap: '2.5rem', alignItems: 'flex-start' }}>

          {/* Left panel: Form Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Tab INICIO (Qué Hacemos) */}
            {currentTab === 'inicio' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ color: 'var(--calipso)' }}>🏡 Página Principal ("Qué hacemos")</h3>

                {/* Sub-Navegación de Secciones */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap', backgroundColor: '#f8fafc', padding: '0.8rem', borderRadius: '16px' }}>
                  {[
                    { id: 1, name: '1. Portada e Intro' },
                    { id: 2, name: '2. Misión y Visión' },
                    { id: 3, name: '3. Monitores' },
                    { id: 4, name: '4. Galería' },
                    { id: 5, name: '5. Redes' }
                  ].map(st => (
                    <button key={st.id} onClick={() => setSubTab(st.id)} style={{ background: subTab === st.id ? 'var(--foreground)' : 'transparent', color: subTab === st.id ? 'white' : '#475569', border: 'none', padding: '0.6rem 1rem', borderRadius: '12px', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 700, transition: 'all 0.2s' }}>{st.name}</button>
                  ))}
                </div>

                {/* Banner Indicador de Sección */}
                <div style={{ padding: '0.8rem 1rem', background: '#e0f2fe', borderLeft: '4px solid #0284c7', borderRadius: '12px', marginBottom: '1rem', fontSize: '0.9rem', color: '#0369a1', fontWeight: 700 }}>
                  📍 Modificando actualmente: {
                    subTab === 1 ? 'Portada y Presentación Superior' :
                      subTab === 2 ? 'Filosofía Institucional (Misión y Visión)' :
                        subTab === 3 ? 'Tarjetas Profesionales de Monitores' :
                          subTab === 4 ? 'Galería de Momentos de la Home' : 'Cuentas de TikTok e Instagram'
                  }
                </div>

                {/* SubTab 1: Portada e Intro */}
                {subTab === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: '#f8fafc' }}>
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>🎬 Banner / Portada (Video Superior)</label>
                      <div style={{ display: 'flex', gap: '0.8rem' }}>
                        <input type="text" value={config.videoHome} onChange={(e) => setConfig({ ...config, videoHome: e.target.value })} style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                        <input type="file" id="up-videoHome" accept="video/mp4" style={{ display: 'none' }} onChange={handleInlineUpload('videoHome')} />
                        <button onClick={() => document.getElementById('up-videoHome')?.click()} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.8rem', borderRadius: '12px', cursor: 'pointer' }}>Subir</button>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>🖼️ Imagen / Logo Izquierda</label>
                      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.2rem', alignItems: 'center' }}>
                        {config.home.aboutImage && <img src={config.home.aboutImage} style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '10px' }} alt="Thumb" />}
                        <input type="text" value={config.home.aboutImage || ''} onChange={(e) => setConfig({ ...config, home: { ...config.home, aboutImage: e.target.value } })} style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                        <input type="file" id="up-aboutImage" accept="image/*" style={{ display: 'none' }} onChange={handleInlineUpload('home.aboutImage')} />
                        <button onClick={() => document.getElementById('up-aboutImage')?.click()} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.8rem', borderRadius: '12px', cursor: 'pointer' }}>Subir</button>
                      </div>
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>Título de Sección</label>
                      <input type="text" value={config.home.heroTitle} onChange={(e) => setConfig({ ...config, home: { ...config.home, heroTitle: e.target.value } })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1', marginBottom: '1rem' }} />
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>Slogan / Subtítulo</label>
                      <input type="text" value={config.home.heroSlogan} onChange={(e) => setConfig({ ...config, home: { ...config.home, heroSlogan: e.target.value } })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1', marginBottom: '1rem' }} />
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>Descripción</label>
                      <textarea rows={4} value={config.home.aboutText} onChange={(e) => setConfig({ ...config, home: { ...config.home, aboutText: e.target.value } })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1', resize: 'vertical' }} />
                    </div>
                  </div>
                )}

                {/* SubTab 2: Mision y Vision */}
                {subTab === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>Nuestra Misión</label>
                      <textarea rows={4} value={config.home.mision || ''} onChange={(e) => setConfig({ ...config, home: { ...config.home, mision: e.target.value } })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1', marginBottom: '1.2rem' }} />
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>Nuestra Visión</label>
                      <textarea rows={4} value={config.home.vision || ''} onChange={(e) => setConfig({ ...config, home: { ...config.home, vision: e.target.value } })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                    </div>
                  </div>
                )}

                {/* SubTab 3: Monitores */}
                {subTab === 3 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {config.home && config.home.monitores && config.home.monitores.length > 0 ? (
                      config.home.monitores.map((mon: any, i: number) => (
                        <div key={i} style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: '#fff' }}>
                          <h4 style={{ color: 'var(--calipso)', fontWeight: 800 }}>Monitor #{i + 1}: {mon.name || 'Sin Nombre'}</h4>

                          <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>🖼️ Foto de Perfil</label>
                          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                            <img src={mon.image || '/assets/rocio.jpg'} style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '10px' }} alt="Thumb" />
                            <input type="text" value={mon.image || ''} onChange={(e) => { const nm = [...config.home.monitores]; nm[i].image = e.target.value; setConfig({ ...config, home: { ...config.home, monitores: nm } }); }} style={{ flex: 1, padding: '0.6rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} placeholder="/assets/foto.jpg" />
                            <input type="file" id={`up-mon-${i}`} accept="image/*" style={{ display: 'none' }} onChange={(e) => {
                              const file = e.target.files?.[0]; if (!file) return;
                              const formData = new FormData(); formData.append('file', file);
                              fetch('/api/upload', { method: 'POST', body: formData }).then(r => r.json()).then(res => {
                                if (res.success) { const nm = [...config.home.monitores]; nm[i].image = res.url; setConfig({ ...config, home: { ...config.home, monitores: nm } }); }
                              });
                            }} />
                            <button onClick={() => document.getElementById(`up-mon-${i}`)?.click()} style={{ padding: '0.6rem', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '12px', cursor: 'pointer' }}>Subir</button>
                          </div>

                          <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>👤 Nombre Completo</label>
                          <input type="text" value={mon.name || ''} onChange={(e) => { const nm = [...config.home.monitores]; nm[i].name = e.target.value; setConfig({ ...config, home: { ...config.home, monitores: nm } }); }} placeholder="Nombre" style={{ padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />

                          <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>📝 Descripción Profesional</label>
                          <textarea rows={4} value={mon.text || ''} onChange={(e) => { const nm = [...config.home.monitores]; nm[i].text = e.target.value; setConfig({ ...config, home: { ...config.home, monitores: nm } }); }} placeholder="Descripción profesional" style={{ padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1', resize: 'vertical' }} />
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>No hay monitores cargados.</div>
                    )}
                  </div>
                )}

                {/* SubTab 4: Galería de Momentos */}
                {subTab === 4 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 style={{ color: '#1e293b' }}>Imágenes de Galería</h4>
                    {config.home.galeriaMomentos && config.home.galeriaMomentos.map((img: string, idx: number) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.8rem' }}>
                        <input type="text" value={img} onChange={(e) => { const ng = [...config.home.galeriaMomentos]; ng[idx] = e.target.value; setConfig({ ...config, home: { ...config.home, galeriaMomentos: ng } }); }} style={{ flex: 1, padding: '0.7rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                        <button onClick={() => setConfig({ ...config, home: { ...config.home, galeriaMomentos: config.home.galeriaMomentos.filter((_: any, i: number) => i !== idx) } })} style={{ background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '12px', padding: '0 1rem', cursor: 'pointer' }}>Borrar</button>
                      </div>
                    ))}
                    <button onClick={() => setConfig({ ...config, home: { ...config.home, galeriaMomentos: [...(config.home.galeriaMomentos || []), ''] } })} style={{ background: '#e2e8f0', color: '#1e293b', border: 'none', padding: '0.8rem', borderRadius: '12px', cursor: 'pointer', fontWeight: 700 }}>+ Añadir Imagen</button>
                  </div>
                )}

                {/* SubTab 5: Redes Links */}
                {subTab === 5 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>Instagram (@usuario)</label>
                      <input type="text" value={config.home.redes?.instagram || ''} onChange={(e) => setConfig({ ...config, home: { ...config.home, redes: { ...config.home.redes, instagram: e.target.value } } })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.4rem' }}>TikTok (@usuario)</label>
                      <input type="text" value={config.home.redes?.tiktok || ''} onChange={(e) => setConfig({ ...config, home: { ...config.home, redes: { ...config.home.redes, tiktok: e.target.value } } })} style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* Tab CLUB */}
            {currentTab === 'club' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <h3 style={{ color: 'var(--calipso)' }}>🤝 Sección Club 12/17</h3>

                <h4 style={{ color: '#1e293b', fontWeight: 800, borderLeft: '4px solid var(--magenta)', paddingLeft: '0.8rem', marginTop: '1rem' }}>🖼️ Banner de Portada</h4>
                <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontWeight: 700, fontSize: '0.85rem', color: '#64748b' }}>Recomendado: 1920x350 o similar (PNG / JPG / WEBP)</label>
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <input type="text" value={config.club.banner || '/assets/banner-12-17.png'} onChange={(e) => setConfig({ ...config, club: { ...config.club, banner: e.target.value } })} style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                    <button onClick={() => alert('Usa la pestaña "Archivos" para subir y copia la ruta aquí.')} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.8rem', borderRadius: '12px', cursor: 'pointer', fontWeight: 600 }}>Subir</button>
                  </div>
                </div>

                <h4 style={{ color: '#1e293b', fontWeight: 800, borderLeft: '4px solid var(--calipso)', paddingLeft: '0.8rem', marginTop: '1rem' }}>Preguntas y Respuestas (Q&A)</h4>
                {(config.club.qa || []).map((item: any, i: number) => (
                  <div key={i} style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: '#fff' }}>
                    <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Pregunta / Título</label>
                    <input type="text" value={item.title || ''} onChange={(e) => { const newQa = [...config.club.qa]; newQa[i].title = e.target.value; setConfig({ ...config, club: { ...config.club, qa: newQa } }); }} placeholder="Ej: ¿Qué hacemos?" style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                    <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Respuesta / Contenido</label>
                    <textarea rows={3} value={item.content || ''} onChange={(e) => { const newQa = [...config.club.qa]; newQa[i].content = e.target.value; setConfig({ ...config, club: { ...config.club, qa: newQa } }); }} placeholder="Detalle..." style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #cbd5e1', resize: 'vertical' }} />
                  </div>
                ))}

                <h4 style={{ color: '#1e293b', fontWeight: 800, borderLeft: '4px solid var(--yellow)', paddingLeft: '0.8rem', marginTop: '1rem' }}>Talleres</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {(config.club.talles || []).map((taller: any, i: number) => (
                    <div key={i} style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: '#fff' }}>
                      <div style={{ display: 'flex', gap: '0.8rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Icono</label>
                          <input type="text" value={taller.icon || ''} onChange={(e) => { const nt = [...config.club.talles]; nt[i].icon = e.target.value; setConfig({ ...config, club: { ...config.club, talles: nt } }); }} style={{ fontSize: '1.2rem', width: '60px', padding: '0.7rem', textAlign: 'center', border: '1px solid #cbd5e1', borderRadius: '12px' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Nombre del Taller</label>
                          <input type="text" value={taller.title || ''} onChange={(e) => { const nt = [...config.club.talles]; nt[i].title = e.target.value; setConfig({ ...config, club: { ...config.club, talles: nt } }); }} placeholder="Título" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e1', borderRadius: '12px', fontWeight: 700 }} />
                        </div>
                      </div>
                      <label style={{ fontWeight: 700, fontSize: '0.85rem' }}>Descripción corta</label>
                      <textarea rows={3} value={taller.desc || ''} onChange={(e) => { const nt = [...config.club.talles]; nt[i].desc = e.target.value; setConfig({ ...config, club: { ...config.club, talles: nt } }); }} placeholder="¿Qué se aprende?" style={{ width: '100%', padding: '0.8rem', border: '1px solid #cbd5e1', borderRadius: '12px', fontSize: '0.9rem', resize: 'vertical' }} />
                    </div>
                  ))}
                </div>

                <h4 style={{ color: '#1e293b', fontWeight: 800, borderLeft: '4px solid #cbd5e1', paddingLeft: '0.8rem', marginTop: '1rem' }}>🎥 Galería de los Talleres</h4>
                <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontWeight: 700, fontSize: '0.85rem', color: '#64748b' }}>Videos (.mp4) o Imágenes (1:1 o 3:4 recommended)</label>
                  {(config.gallery || []).map((it: string, idx: number) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.6rem' }}>
                      <input type="text" value={it || ''} onChange={(e) => { const ng = [...config.gallery]; ng[idx] = e.target.value; setConfig({ ...config, gallery: ng }); }} style={{ flex: 1, padding: '0.7rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                      <button onClick={() => setConfig({ ...config, gallery: config.gallery.filter((_: any, i: number) => i !== idx) })} style={{ background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '12px', padding: '0 0.8rem', cursor: 'pointer' }}>Eliminar</button>
                    </div>
                  ))}
                  <button onClick={() => setConfig({ ...config, gallery: [...(config.gallery || []), ''] })} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.8rem', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}>+ Añadir Elemento</button>
                </div>
              </div>
            )}

            {/* Tab CONTACTO */}
            {currentTab === 'contacto' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ color: 'var(--calipso)' }}>📍 Página de Contacto</h3>

                <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>💬 WhatsApp (Solo números)</label>
                    <input type="text" value={config.contacto.whatsapp || ''} onChange={(e) => setConfig({ ...config, contacto: { ...config.contacto, whatsapp: e.target.value } })} placeholder="56912345678" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>📧 Correo Electrónico</label>
                    <input type="email" value={config.contacto.correo || ''} onChange={(e) => setConfig({ ...config, contacto: { ...config.contacto, correo: e.target.value } })} placeholder="contacto@ejemplo.com" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Tab GALERIA/MEDIA */}
            {currentTab === 'galeria' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ color: 'var(--calipso)' }}>🎥 Galería del Club 12/17</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Añade o borra los videos/fotos que se muestran en el carrusel.</p>
                <div>
                  {config.gallery.map((it: string, idx: number) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem' }}>
                      <input type="text" value={it} onChange={(e) => { const ng = [...config.gallery]; ng[idx] = e.target.value; setConfig({ ...config, gallery: ng }); }} style={{ flex: 1, padding: '0.8rem', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
                      <button onClick={() => setConfig({ ...config, gallery: config.gallery.filter((_: any, i: number) => i !== idx) })} style={{ background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '12px', padding: '0 1rem', cursor: 'pointer' }}>Borrar</button>
                    </div>
                  ))}
                  <button onClick={() => setConfig({ ...config, gallery: [...config.gallery, ''] })} style={{ background: '#cbd5e1', color: '#1e293b', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '12px', fontWeight: 700, cursor: 'pointer' }}>+ Adjuntar ruta</button>
                </div>
              </div>
            )}

            {/* Tab ARCHIVOS (Subidor) */}
            {currentTab === 'archivos' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ color: 'var(--calipso)' }}>📂 Subir Archivos (Fotos/Videos)</h3>
                <form onSubmit={handleUpload} style={{ border: '2px dashed #cbd5e1', padding: '3rem', borderRadius: '24px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
                  <input type="file" onChange={(e) => setUploadFile(e.target.files ? e.target.files[0] : null)} style={{ marginBottom: '1.5rem', display: 'block', margin: '0 auto' }} />
                  <button type="submit" disabled={!uploadFile} style={{ background: uploadFile ? 'var(--calipso)' : '#cbd5e1', color: 'white', border: 'none', padding: '1rem 2.5rem', borderRadius: '16px', fontWeight: 800, cursor: uploadFile ? 'pointer' : 'not-allowed' }}>Subir al Servidor</button>
                  {uploadMsg && <p style={{ marginTop: '1.5rem', fontWeight: 700, color: uploadMsg.includes('✅') ? 'var(--calipso)' : '#ff4d4f' }}>{uploadMsg}</p>}
                </form>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, textAlign: 'center' }}>Nota: Los archivos subidos estarán disponibles bajo `/assets/nombre_archivo.ext`</p>
              </div>
            )}

            {/* GUARDAR CAMBIOS GLOBAL */}
            {currentTab !== 'archivos' && (
              <button onClick={handleSave} disabled={saving} style={{ background: saving ? '#94a3b8' : 'var(--calipso)', color: 'white', border: 'none', borderRadius: '24px', padding: '1.5rem', cursor: saving ? 'not-allowed' : 'pointer', fontWeight: 800, fontSize: '1.1rem', textAlign: 'center', marginTop: '1.5rem' }}>
                {saving ? 'Guardando cambios...' : '🔒 Aplicar Cambios Globales'}
              </button>
            )}

          </div>

          {/* Right Panel: Live Preview */}
          {currentTab !== 'archivos' && (
            <div style={{ position: 'sticky', top: '40px', border: '1px solid #e2e8f0', borderRadius: '24px', overflow: 'hidden', height: 'calc(100vh - 150px)', backgroundColor: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ padding: '0.8rem 1rem', borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc', fontWeight: 800, color: '#475569', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--calipso)', borderRadius: '50%' }}></span> 👁️ Vista Previa en Vivo
              </div>
              <div style={{ padding: '1.5rem', height: 'calc(100% - 40px)', overflowY: 'auto' }}>

                {currentTab === 'inicio' && (
                  <div>
                    {subTab === 1 && (
                      <div>
                        <h4 style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Cabecera (Video)</h4>
                        <div style={{ position: 'relative', height: '140px', background: '#000', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                          {config.videoHome && <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}><source src={config.videoHome} /></video>}
                        </div>
                        <h4 style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Intro</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(80px, 1fr) 2.5fr', gap: '1rem', alignItems: 'center', padding: '1rem', border: '1px solid #f1f5f9', borderRadius: '16px' }}>
                          <img src={config.home.aboutImage || "/assets/1.png"} style={{ width: '100%', borderRadius: '16px' }} />
                          <div>
                            <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{config.home.heroTitle}</h2>
                            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{config.home.heroSlogan}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {subTab === 2 && (
                      <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '16px' }}>
                        <h4 style={{ fontWeight: 800, color: 'var(--calipso)' }}>Misión</h4><p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}>{config.home.mision}</p>
                        <h4 style={{ fontWeight: 800, color: 'var(--calipso)' }}>Visión</h4><p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{config.home.vision}</p>
                      </div>
                    )}
                    {subTab === 3 && (
                      <div className="grid-2" style={{ maxWidth: '1100px', margin: '0 auto', gap: '1.2rem' }}>
                        {config.home.monitores?.map((m: any, i: number) => (
                          <div key={i} className="team-card hover-glow" style={{ transform: 'scale(0.85)', margin: '-10px' }}>
                            <div className="team-image-container">
                              <img src={m.image || '/assets/rocio.jpg'} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                            </div>
                            <div style={{ padding: '1.5rem', textAlign: 'center', position: 'relative', marginTop: '-2rem', zIndex: 1 }}>
                              <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: i === 0 ? 'var(--magenta)' : 'var(--calipso)', color: 'white', borderRadius: '50px', fontWeight: 700, fontSize: '0.7rem', marginBottom: '1rem' }}>
                                {i === 0 ? 'Terapeuta Ocupacional' : 'Psicólogo'}
                              </div>
                              <h4 style={{ marginBottom: '0.8rem', fontSize: '1.3rem' }}>{m.name}</h4>
                              <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.6' }}>{m.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {subTab === 4 && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                        {config.home.galeriaMomentos?.map((g: string, i: number) => (
                          <img key={i} src={g} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                        ))}
                      </div>
                    )}
                    {subTab === 5 && (
                      <div>
                        <p><strong>Instagram:</strong> @{config.home.redes?.instagram}</p>
                        <p><strong>TikTok:</strong> @{config.home.redes?.tiktok}</p>
                      </div>
                    )}
                  </div>
                )}

                {currentTab === 'club' && (
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.2fr) 1fr', gap: '1rem', alignItems: 'flex-start' }}>
                      <div>
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--calipso)', marginBottom: '1rem', fontWeight: 800 }}>Sobre el Club 12/17</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                          {(config.club.qa || []).map((item: any, i: number) => (
                            <div key={i} style={{ paddingBottom: '0.8rem', borderBottom: '1px solid #f1f5f9' }}>
                              <h4 style={{ fontSize: '0.95rem', color: 'var(--foreground)', marginBottom: '0.2rem', fontWeight: 700 }}>{item.title || 'Pregunta Sin Título'}</h4>
                              <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.4, wordBreak: 'break-word' }}>{item.content || 'Sin Respuesta'}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ position: 'sticky', top: '0' }}>
                        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', aspectRatio: '3/4' }}>
                          <img src="/assets/WhatsApp Image 2026-03-13 at 10.39.25 AM.jpeg" alt="Actividad" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
                    </div>

                    <h2 style={{ fontSize: '1.4rem', color: 'var(--foreground)', marginBottom: '1.2rem', textAlign: 'center', fontWeight: 800, marginTop: '1.5rem' }}>Talleres que tenemos</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                      {(config.club.talles || []).map((taller: any, i: number) => (
                        <div key={i} className="glass hover-glow" style={{ flex: '1 1 130px', maxWidth: '240px', padding: '1rem', borderRadius: '20px', backgroundColor: '#fff', borderLeft: '4px solid var(--yellow)', display: 'flex', flexDirection: 'column', gap: '0.4rem', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
                          <div style={{ fontSize: '1.5rem' }}>{taller.icon || '📌'}</div>
                          <h5 style={{ fontSize: '0.85rem', color: 'var(--foreground)', fontWeight: 700 }}>{taller.title || 'Taller'}</h5>
                          <p style={{ fontSize: '0.7rem', lineHeight: '1.3', opacity: 0.7 }}>{taller.desc || 'Descripción'}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentTab === 'contacto' && (
                  <div>
                    <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 800 }}>Información de Contacto</h2>
                    <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.85rem', lineHeight: 1.5 }}>Estamos ubicados en la comuna de Quintero. Contáctanos por cualquiera de nuestras vías para más información.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                      <div className="glass" style={{ padding: '1.2rem', borderRadius: '20px', borderLeft: '6px solid var(--calipso)', backgroundColor: '#fff', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                        <h5 style={{ opacity: 0.5, fontSize: '0.65rem', textTransform: 'uppercase' }}>Ubicación</h5>
                        <p style={{ fontWeight: 800, fontSize: '0.9rem', marginTop: '0.2rem' }}>📍 Quintero, V Región, Chile</p>
                      </div>

                      <div className="glass" style={{ padding: '1.2rem', borderRadius: '20px', borderLeft: '6px solid var(--magenta)', backgroundColor: '#fff', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                        <h5 style={{ opacity: 0.5, fontSize: '0.65rem', textTransform: 'uppercase' }}>Correo Electrónico</h5>
                        <p style={{ fontWeight: 800, fontSize: '0.9rem', marginTop: '0.2rem' }}>📧 {config.contacto.correo || 'correo@psicocupacional.cl'}</p>
                      </div>
                    </div>

                    <a href="#" className="btn hover-glow" style={{ background: '#25D366', color: 'white', padding: '1.2rem', borderRadius: '20px', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', width: '100%', boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)', marginBottom: '1.5rem', textDecoration: 'none' }}>
                      <span>💬 Contactar por WhatsApp: {config.contacto.whatsapp || 'Sin WhatsApp'}</span>
                    </a>
                  </div>
                )}

                {currentTab === 'galeria' && (
                  <div>
                    <h4 style={{ marginBottom: '1rem', color: '#475569' }}>🖼️ Fotos de los Talleres</h4>
                    <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', padding: '1rem 0' }}>
                      {config.gallery.map((it: string, i: number) => (
                        <div key={i} style={{ flex: '0 0 140px', height: '180px', background: '#e2e8f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', textAlign: 'center', padding: '0.5rem', backgroundColor: '#000', color: '#fff' }}>
                          {it.toLowerCase().endsWith('.mp4') ? '🎥 Video' : '🖼️ Imagen'}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
