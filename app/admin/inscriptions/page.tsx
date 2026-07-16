'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Loader2, Lock, Phone, Calendar, ExternalLink, LogOut, Trash2, Check, X } from 'lucide-react';

interface Inscription {
  _id: string;
  fullName: string;
  whatsapp: string;
  formation: string;
  contacted: boolean;
  createdAt: string;
}

const TOKEN_KEY = 'admin_token';

function formatWhatsAppNumber(num: string): string {
  const cleaned = num.replace(/[^0-9]/g, '');
  const international = cleaned.startsWith('243') ? cleaned : `243${cleaned}`;
  return international;
}

function waMeLink(num: string): string {
  return `https://wa.me/${formatWhatsAppNumber(num)}`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
  });
}

export default function AdminInscriptions() {
  const [token, setToken] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [data, setData] = useState<Inscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(TOKEN_KEY);
    if (saved) {
      setToken(saved);
      setIsAuthed(true);
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/inscription', {
        cache: 'no-store',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setIsAuthed(false);
          localStorage.removeItem(TOKEN_KEY);
          throw new Error('Token invalide. Veuillez vous reconnecter.');
        }
        throw new Error('Erreur lors du chargement des données.');
      }
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthed) fetchData();
  }, [isAuthed, fetchData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;
    localStorage.setItem(TOKEN_KEY, token.trim());
    setIsAuthed(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken('');
    setIsAuthed(false);
    setData([]);
  };

  const toggleContacted = async (id: string, contacted: boolean) => {
    try {
      const res = await fetch('/api/inscription', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, contacted: !contacted }),
      });
      if (!res.ok) throw new Error();
      setData((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, contacted: !contacted } : item
        )
      );
    } catch {
      setError('Erreur lors de la mise à jour.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cette inscription ?')) return;
    try {
      const res = await fetch(`/api/inscription?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch {
      setError('Erreur lors de la suppression.');
    }
  };

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-16 space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-secondary">Admin</h1>
            <p className="text-sm text-gray-500">
              Entrez le mot de passe
            </p>
          </div>

          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Mot de passe admin"
            className="w-full px-2 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            autoFocus
          />

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Accéder
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm p-6">
          <div>
            <h1 className="text-2xl font-bold text-secondary">
              Inscriptions
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {data.length} inscription{data.length > 1 ? 's' : ''} reçue
              {data.length > 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        )}

        {/* Table */}
        {!loading && data.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-6 py-4 font-semibold text-secondary w-12">
                      <span className="sr-only">Contacté</span>
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-secondary">
                      Nom complet
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-secondary">
                      WhatsApp
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-secondary">
                      Formation
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-secondary">
                      Date
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-secondary">
                      Action
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-secondary w-20">
                      <span className="sr-only">Supprimer</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.map((item) => (
                    <tr
                      key={item._id}
                      className={`hover:bg-gray-50 transition-colors ${
                        item.contacted ? 'bg-green-50/50' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleContacted(item._id, item.contacted)}
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                            item.contacted
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-gray-300 hover:border-green-400'
                          }`}
                          title={item.contacted ? 'Marquer non contacté' : 'Marquer contacté'}
                        >
                          {item.contacted && <Check className="w-4 h-4" />}
                        </button>
                      </td>
                      <td className="px-6 py-4 font-medium text-secondary">
                        {item.fullName}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 text-gray-600">
                          <Phone className="w-4 h-4" />
                          {item.whatsapp}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {item.formation}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {formatDate(item.createdAt)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={waMeLink(item.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-500 text-white text-xs font-semibold rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          WhatsApp
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && data.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Aucune inscription pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
