import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('config')
      .select('data')
      .eq('id', 1)
      .single();

    if (error || !data) {
      // Retorna una respuesta por defecto si hay error en base de datos
      return NextResponse.json({
        home: {},
        club: { qa: [], talles: [] },
        contacto: {},
        gallery: []
      });
    }

    return NextResponse.json(data.data);
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Actualizamos la fila 1 con el nuevo JSON configurado
    const { error } = await supabase
      .from('config')
      .update({ data: body })
      .eq('id', 1);

    if (error) {
      return NextResponse.json({ success: false, message: error.message });
    }

    return NextResponse.json({ success: true, message: "Guardado correctamente en Supabase" });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
