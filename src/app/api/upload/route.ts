import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as unknown as File;
    
    if (!file) {
      return NextResponse.json({ success: false, message: 'No se encontró el archivo.' });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Limpiamos el nombre del archivo para evitar espacios y caracteres extraños
    const cleanName = file.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_.-]/g, '');
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(cleanName, buffer, {
        contentType: file.type,
        upsert: true
      });

    if (uploadError) {
      return NextResponse.json({ success: false, message: uploadError.message });
    }

    // Obtenemos la URL pública del archivo subido
    const { data: publicUrlData } = supabase.storage
      .from('gallery')
      .getPublicUrl(cleanName);

    return NextResponse.json({ 
      success: true, 
      message: 'Archivo subido correctamente a Supabase!', 
      url: publicUrlData.publicUrl 
    });
    
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
