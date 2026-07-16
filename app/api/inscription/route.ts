import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Inscription } from '@/lib/models/Inscription';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, whatsapp, formation } = body;

    if (!fullName || !whatsapp || !formation) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    await connectDB();

    const inscription = await Inscription.create({
      fullName: fullName.trim(),
      whatsapp: whatsapp.trim(),
      formation: formation.trim(),
    });

    console.log('[INSCRIPTION] Créée avec _id:', inscription._id);

    return NextResponse.json(
      {
        message: 'Inscription enregistrée avec succès.',
        id: inscription._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur API inscription POST:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}

function checkAuth(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');
  const adminToken = process.env.ADMIN_TOKEN;
  return !(!adminToken || token !== adminToken);
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  try {
    await connectDB();
    const inscriptions = await Inscription.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(inscriptions, {
      status: 200,
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error('Erreur API inscription GET:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, contacted } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID requis.' }, { status: 400 });
    }

    await connectDB();
    const updated = await Inscription.findByIdAndUpdate(
      id,
      { contacted },
      { returnDocument: 'after' }
    );

    if (!updated) {
      return NextResponse.json(
        { error: 'Inscription introuvable.' },
        { status: 404 }
      );
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error('Erreur API inscription PATCH:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID requis.' }, { status: 400 });
    }

    await connectDB();
    const deleted = await Inscription.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: 'Inscription introuvable.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Inscription supprimée.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur API inscription DELETE:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
