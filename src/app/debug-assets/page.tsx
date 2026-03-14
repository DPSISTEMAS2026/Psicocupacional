import Link from 'next/link';

export default function DebugAssets() {
  const images = Array.from({ length: 29 }, (_, i) => `${i + 1}.png`);

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Asset Inspection</h1>
      <p>Identify the logos, colors, and institutional photos.</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {images.map((img) => (
          <div key={img} className="glass" style={{ padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
            <img 
              src={`/assets/${img}`} 
              alt={img} 
              style={{ width: '100%', height: '200px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <p style={{ fontWeight: 'bold' }}>{img}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
