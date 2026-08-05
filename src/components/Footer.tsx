import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E2D3B] text-white pt-16 pb-8 border-t border-[#6F8FA6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Columna 1: CETPRO Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-md">
                <Image
                  src="/images/logo-cetpro.jpg"
                  alt="Logo CETPRO 01"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-white">CETPRO 01</h3>
                <p className="text-xs text-[#A8DADC] font-medium">Ed. Técnico-Productiva</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Formación técnica de excelencia orientada a la inserción laboral inmediata y el emprendimiento rentable con título a Nombre de la Nación.
            </p>

            <div className="flex items-center space-x-2 pt-2">
              <div className="p-1.5 bg-[#A8DADC]/10 text-[#A8DADC] rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs text-slate-300 font-medium">Acreditado y Licenciado por el MINEDU</span>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8DADC]">Navegación</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#A8DADC] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A8DADC]" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link href="/institucion" className="hover:text-[#A8DADC] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A8DADC]" />
                  <span>¿Qué es el CETPRO?</span>
                </Link>
              </li>
              <li>
                <Link href="/programas" className="hover:text-[#A8DADC] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A8DADC]" />
                  <span>Programas de Estudio</span>
                </Link>
              </li>
              <li>
                <Link href="/admision" className="hover:text-[#A8DADC] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A8DADC]" />
                  <span>Proceso de Admisión</span>
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#A8DADC] transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A8DADC]" />
                  <span>Contacto e Informes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Programas Destacados */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8DADC]">Especialidades</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Estilismo</li>
              <li>• Cocina</li>
              <li>• Peluquería y Barbería</li>
              <li>• Panadería y Pastelería</li>
              <li>• Tecnologías de la Información</li>
              <li>• Estampados de Prendas</li>
              <li>• Recepción en Hostelería</li>
            </ul>
          </div>

          {/* Columna 4: Contacto Institucional */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8DADC]">Atención y Admisión</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#A8DADC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Correo Oficial:</span>
                  <a href="mailto:admision@cetpro.edu.pe" className="text-white font-medium hover:text-[#A8DADC] underline transition-colors">
                    admision@cetpro.edu.pe
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#A8DADC] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Ubicación:</span>
                  <span className="text-slate-200">Sede Principal CETPRO 01</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/admision"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#A8DADC] text-[#1E2D3B] font-bold text-xs hover:bg-[#8ecae6] transition-colors"
                >
                  <span>Postular Ahora</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} CETPRO 01 - Centro de Educación Técnico-Productiva. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-200 cursor-pointer">Términos de Servicio</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Política de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
