import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as unknown as File;
    
    if (!file) {
      return NextResponse.json({ success: false, message: 'No se encontró el archivo.' });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save into /public/assets/ path
    const dirPath = path.join(process.cwd(), 'public', 'assets');
    const filePath = path.join(dirPath, file.name);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      message: 'Archivo subido correctamente!', 
      url: `/assets/${file.name}` 
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
