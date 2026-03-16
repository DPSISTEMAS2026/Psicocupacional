import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/data/config.json');
  if (!fs.existsSync(filePath)) {
    // Comprehensive Fallback Config Dictionary node matching actual codes layouts!
    return NextResponse.json({
      home: {
        heroTitle: "Psicocupacional",
        heroSlogan: "Habilidades para la vida, autonomía para participar y convivir.",
        aboutTitle: "Quiénes Somos",
        aboutText: "Somos un equipo interdisciplinario dedicado a promover el desarrollo de habilidades para la vida y la autonomía en personas neurodivergentes, impulsando su participación activa en la comunidad y mejorando su calidad de vida."
      },
      club: {
        banner: "/assets/banner-12-17.png",
        qa: [
          { title: "¿Qué es?", content: "El Club 12/17 es un espacio grupal dirigido a adolescentes neurodivergentes donde se trabajan habilidades para la vida diaria a través de experiencias prácticas y significativas." },
          { title: "¿A quién está dirigido?", content: "Está dirigido a adolescentes entre 12 y 21 años, principalmente jóvenes dentro del espectro autista u otras condiciones del neurodesarrollo, que buscan fortalecer su autonomía, habilidades sociales y participación en la comunidad." },
          { title: "¿Qué hacemos?", content: "En cada sesión realizamos actividades reales que permiten aprender haciendo, como manejar dinero, comprar en el supermercado, cocinar, desplazarnos por la ciudad, planificar salidas y compartir con otros en un espacio de amistad y convivencia." },
          { title: "¿Para qué sirve?", content: "El objetivo del club es fortalecer la autonomía, independencia, la socialización y la participación en la comunidad, ayudando a que los adolescentes desarrollen mayor seguridad e independencia en su vida cotidiana." }
        ],
        talles: [
          { title: "Manejo de dinero", icon: "💰", desc: "Aprendemos a reconocer precios, comparar productos, pagar y administrar dinero en situaciones reales." },
          { title: "Compras en la comunidad", icon: "🛒", desc: "Practicamos cómo comprar en supermercados, farmacias o locales del barrio, saludando, preguntando y tomando decisiones." },
          { title: "Cocina para la vida diaria", icon: "🍳", desc: "Preparamos comidas simples y funcionales que ayudan a desarrollar autonomía en la vida cotidiana." },
          { title: "Movilidad en la ciudad", icon: "🚌", desc: "Aprendemos a desplazarnos por la comunidad, identificar recorridos y utilizar transporte público de forma segura." },
          { title: "Club de amigos", icon: "🤝", desc: "Realizamos actividades para compartir, conversar, jugar y fortalecer la amistad y el compañerismo." }
        ]
      },
      contacto: {
        whatsapp: "56912345678",
        correo: "contacto@psicocupacional.cl",
        instagram: "psicocupacional_",
        tiktok: "psicocupacional_"
      },
      videoHome: "/assets/PSICOCUPACIONAL.mp4",
      gallery: [
        "/assets/WhatsApp Video 2026-03-13 at 10.37.26 AM.mp4",
        "/assets/club-logo-experiencias.png",
        "/assets/WhatsApp Video 2026-03-13 at 10.37.16 AM.mp4"
      ]
    });
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return NextResponse.json(JSON.parse(fileContent));
}

export async function POST(request: Request) {
  const data = await request.json();
  const dirPath = path.join(process.cwd(), 'src/data');
  const filePath = path.join(dirPath, 'config.json');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  return NextResponse.json({ success: true, message: "Guardado correctamente" });
}
