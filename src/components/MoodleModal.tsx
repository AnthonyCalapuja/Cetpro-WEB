'use client';

import React from 'react';
import { GraduationCap, AlertCircle, X, ExternalLink, Clock } from 'lucide-react';

interface MoodleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MoodleModal: React.FC<MoodleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1E2D3B] to-[#4A607A] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2.5 bg-[#A8DADC] text-[#1E2D3B] rounded-xl font-bold shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#A8DADC]">
                Plataforma Digital
              </span>
              <h3 className="text-xl font-bold">Aula Virtual Moodle</h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-[#1E2D3B] space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-[#F0F7F9] rounded-xl border border-[#A8DADC]/40">
            <Clock className="w-5 h-5 text-[#6F8FA6] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm text-[#1E2D3B]">Próxima Sincronización Institucional</h4>
              <p className="text-xs text-[#4A607A] mt-1 leading-relaxed">
                El acceso al Aula Virtual Moodle del CETPRO 01 se encuentra en proceso de actualización lectiva y sincronización de matriculados.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-[#4A607A]">
            <p>
              Si eres estudiante matriculado y necesitas asistencia con tu usuario o claves de acceso institucionales, puedes contactar a nuestro equipo académico:
            </p>
            <div className="bg-slate-50 p-3 rounded-lg text-xs font-mono text-slate-700 space-y-1">
              <p><span className="font-semibold">Soporte Aula:</span> admision@cetpro.edu.pe</p>
              <p><span className="font-semibold">Modalidad:</span> Moodle E-Learning 3.x</p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-[#1E2D3B] font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              Entendido
            </button>
            <a
              href="mailto:admision@cetpro.edu.pe?subject=Consulta%20Aula%20Virtual%20Moodle"
              className="w-full py-2.5 px-4 rounded-xl bg-[#A8DADC] text-[#1E2D3B] font-semibold text-sm text-center hover:bg-[#8ecae6] transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Consultar por Email</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
