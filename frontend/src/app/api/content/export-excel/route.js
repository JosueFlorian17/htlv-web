import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import fs from 'fs';
 import path from 'path';
import { initialContentData } from '../../../../data/initialContent';

export async function GET() {
  try {
    const contentFilePath = path.join(process.cwd(), 'src', 'data', 'content.json');
    let saved = {};
    if (fs.existsSync(contentFilePath)) {
      try {
        saved = JSON.parse(fs.readFileSync(contentFilePath, 'utf8'));
      } catch (e) {
        console.error(e);
      }
    }

    const wb = XLSX.utils.book_new();

    // Group items by section
    const sections = {};
    Object.keys(initialContentData).forEach((key) => {
      const item = initialContentData[key];
      const sec = item.section || 'OTROS';
      if (!sections[sec]) sections[sec] = [];

      const currentVal = saved[key]?.currentValue !== undefined ? saved[key].currentValue : '';
      const status = saved[key]?.status || (currentVal ? 'Modificado' : 'Pendiente');

      sections[sec].push({
        ID_TECNICO: item.id,
        SECCION_COMPONENTE: item.label,
        TEXTO_PLACEHOLDER_ORIGINAL: item.defaultValue,
        TEXTO_OFICIAL_DEFINITIVO: currentVal,
        PAUTAS_Y_RECOMENDACIONES: item.guidelines,
        LONGITUD_SUGERIDA: item.maxLength,
        ESTADO: status
      });
    });

    // Create sheets for each section
    Object.keys(sections).sort().forEach((secName) => {
      const rows = sections[secName];
      const ws = XLSX.utils.json_to_sheet(rows);

      // Set column widths
      ws['!cols'] = [
        { wch: 22 }, // ID_TECNICO
        { wch: 30 }, // SECCION_COMPONENTE
        { wch: 45 }, // TEXTO_PLACEHOLDER_ORIGINAL
        { wch: 50 }, // TEXTO_OFICIAL_DEFINITIVO
        { wch: 45 }, // PAUTAS_Y_RECOMENDACIONES
        { wch: 20 }, // LONGITUD_SUGERIDA
        { wch: 14 }  // ESTADO
      ];

      XLSX.utils.book_append_sheet(wb, ws, secName.substring(0, 31));
    });

    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    return new Response(buf, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="CONTENIDO_ACTUALIZADO_WEB_HTLV.xlsx"'
      }
    });
  } catch (error) {
    console.error('Error generating Excel in API:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
