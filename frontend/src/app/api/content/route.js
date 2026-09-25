import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { initialContentData } from '../../../data/initialContent';

const contentFilePath = path.join(process.cwd(), 'src', 'data', 'content.json');

// Helper to read current content
function getSavedContent() {
  try {
    if (fs.existsSync(contentFilePath)) {
      const data = fs.readFileSync(contentFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading content.json:', err);
  }
  return {};
}

export async function GET() {
  const saved = getSavedContent();
  const merged = {};

  Object.keys(initialContentData).forEach((key) => {
    merged[key] = {
      ...initialContentData[key],
      currentValue: saved[key]?.currentValue !== undefined ? saved[key].currentValue : initialContentData[key].defaultValue,
      status: saved[key]?.status || (saved[key]?.currentValue && saved[key].currentValue !== initialContentData[key].defaultValue ? 'Modificado' : 'Pendiente'),
      updatedAt: saved[key]?.updatedAt || null
    };
  });

  return NextResponse.json({
    success: true,
    data: merged,
    count: Object.keys(merged).length
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { updates, resetAll } = body;

    let saved = getSavedContent();

    if (resetAll) {
      saved = {};
      if (fs.existsSync(contentFilePath)) {
        fs.unlinkSync(contentFilePath);
      }
      return NextResponse.json({
        success: true,
        message: 'Contenido restablecido a los valores iniciales.'
      });
    }

    if (updates && typeof updates === 'object') {
      const now = new Date().toISOString();
      Object.keys(updates).forEach((key) => {
        if (initialContentData[key]) {
          saved[key] = {
            currentValue: updates[key].value,
            status: updates[key].status || 'Modificado',
            updatedAt: now
          };
        }
      });

      // Ensure directory exists
      const dir = path.dirname(contentFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(contentFilePath, JSON.stringify(saved, null, 2), 'utf8');
    }

    return NextResponse.json({
      success: true,
      message: 'Contenido actualizado y persistido en tiempo real.',
      updatedCount: updates ? Object.keys(updates).length : 0
    });
  } catch (error) {
    console.error('Error in /api/content:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
