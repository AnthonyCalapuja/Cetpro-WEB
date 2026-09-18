'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowLeft, ShieldAlert } from 'lucide-react';

interface ScheduledPostGuardProps {
  publishedAt: string | null;
  children: React.ReactNode;
}

export function ScheduledPostGuard({ publishedAt, children }: ScheduledPostGuardProps) {
  const [isLocked, setIsLocked] = useState<boolean>(() => {
    if (!publishedAt) return false;
    return new Date(publishedAt).getTime() > Date.now();
  });

  useEffect(() => {
    if (!publishedAt) {
      setIsLocked(false);
      return;
    }

    const checkLock = () => {
      const lockState = new Date(publishedAt).getTime() > Date.now();
      setIsLocked(lockState);
    };

    checkLock();
    // Revisa cada 10 segundos si ya se cumplió el horario programado
    const timer = setInterval(checkLock, 10000);
    return () => clearInterval(timer);
  }, [publishedAt]);

  if (!isLocked) {
    return <>{children}</>;
  }

  const scheduledDateFormatted = publishedAt
    ? new Date(publishedAt).toLocaleString('es-PE', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Horario programado';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200 shadow-xl space-y-6">
        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto text-amber-600 border border-amber-200">
          <Clock className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            <ShieldAlert className="w-3.5 h-3.5 mr-1" />
            Publicación Programada
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1E2D3B]">
            Aún no disponible al público general
          </h2>
        </div>

        <p className="text-slate-600 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          Esta publicación institucional está programada para su difusión oficial el:
        </p>

        <div className="inline-block bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl font-bold text-[#1E2D3B] text-base capitalize shadow-sm">
          🗓️ {scheduledDateFormatted}
        </div>

        <p className="text-xs text-slate-400 max-w-md mx-auto">
          El contenido se desbloqueará de forma automática tan pronto llegue el minuto y hora programada.
        </p>

        <div className="pt-4">
          <Link
            href="/noticias"
            className="inline-flex items-center space-x-2 bg-[#1E2D3B] hover:bg-[#2A3F55] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Noticias y Novedades</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
