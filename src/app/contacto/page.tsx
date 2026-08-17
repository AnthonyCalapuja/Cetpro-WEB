'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  Building,
  HelpCircle,
  Navigation,
  Copy,
  Check,
  Compass,
  Bus,
  Car
} from 'lucide-react';

export default function ContactoPage() {
  const [formSent, setFormSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: 'Informes sobre Carreras Técnicas',
    mensaje: '',
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Jr. Huancavelica 400, Abancay 03001, Apurímac, Perú');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F7F9]">
      <Navbar />

      <main className="flex-grow space-y-16 pb-20">
        {/* Banner Oficial con Correo Destacado admision@cetpro.edu.pe */}
        <section className="bg-gradient-to-r from-[#1E2D3B] via-[#4A607A] to-[#6F8FA6] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
          <div className="max-w-7xl mx-auto space-y-6 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC] bg-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
              Atención Directa
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Póngase en Contacto
            </h1>
            <p className="text-slate-200 text-base max-w-xl mx-auto font-light">
              Estamos aquí para brindarle toda la información sobre nuestros programas de formación técnico-productiva.
            </p>

            {/* Banner Destacado con Correo */}
            <div className="pt-4">
              <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-xl max-w-2xl mx-auto">
                <div className="p-3 bg-[#A8DADC] text-[#1E2D3B] rounded-xl shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs text-slate-300 uppercase font-bold tracking-wider block">
                    Correo Institucional Oficial de Admisiones
                  </span>
                  <a
                    href="mailto:admision@cetpro.edu.pe"
                    className="text-xl sm:text-2xl font-extrabold text-[#A8DADC] hover:underline transition-all"
                  >
                    admision@cetpro.edu.pe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario y Tarjetas de Contacto */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Info Cards Side */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-8 border border-[#A8DADC]/50 shadow-lg space-y-6">
                <h3 className="text-2xl font-bold text-[#1E2D3B]">
                  Información Institucional
                </h3>

                <div className="space-y-5 text-sm text-[#1E2D3B]">
                  
                  {/* Item 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#F0F7F9] text-[#1E2D3B] rounded-xl border border-[#A8DADC]/40 shrink-0">
                      <Mail className="w-5 h-5 text-[#6F8FA6]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#6F8FA6] uppercase tracking-wider block">
                        Correo de Admisiones
                      </span>
                      <a href="mailto:admision@cetpro.edu.pe" className="font-bold text-[#1E2D3B] hover:text-[#6F8FA6] underline">
                        admision@cetpro.edu.pe
                      </a>
                    </div>
                  </div>

                  {/* Item 2 - Dirección Actualizada */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#F0F7F9] text-[#1E2D3B] rounded-xl border border-[#A8DADC]/40 shrink-0">
                      <MapPin className="w-5 h-5 text-[#6F8FA6]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#6F8FA6] uppercase tracking-wider block">
                        Dirección Sede Principal
                      </span>
                      <p className="font-semibold text-slate-800">
                        Jr. Huancavelica 400, Abancay 03001
                      </p>
                      <p className="text-xs text-slate-500">
                        Apurímac, Perú (a 3 cuadras de la Plaza de Armas)
                      </p>
                      <a 
                        href="#mapa-ubicacion" 
                        className="inline-flex items-center space-x-1 text-xs font-bold text-[#4A607A] hover:text-[#1E2D3B] underline pt-1"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Ver mapa de ubicación abajo</span>
                      </a>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#F0F7F9] text-[#1E2D3B] rounded-xl border border-[#A8DADC]/40 shrink-0">
                      <Clock className="w-5 h-5 text-[#6F8FA6]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#6F8FA6] uppercase tracking-wider block">
                        Horario de Atención Presencial
                      </span>
                      <span className="font-semibold text-slate-700 block">
                        Lunes a Viernes: 8:00 AM - 5:00 PM
                      </span>
                      <span className="text-xs text-slate-500">
                        Sábados: 8:30 AM - 1:00 PM
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Botón WhatsApp */}
              <div className="bg-emerald-600 text-white rounded-3xl p-6 shadow-xl flex items-center justify-between space-x-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-200">
                    Canal Directo WhatsApp
                  </span>
                  <h4 className="font-bold text-lg">¿Prefieres chatear?</h4>
                  <p className="text-xs text-emerald-100 font-light">
                    Consultas rápidas con nuestro equipo de informes.
                  </p>
                </div>
                <a
                  href="https://wa.me/51987654321?text=Hola%20CETPRO%2001,%20deseo%20informes%20sobre%20las%20carreras%20en%20Abancay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-white text-emerald-900 font-extrabold text-xs rounded-xl hover:bg-emerald-100 transition-colors shrink-0 shadow"
                >
                  Abrir WhatsApp
                </a>
              </div>

            </div>

            {/* Form Side */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#A8DADC]/60 shadow-xl space-y-6">
              {!formSent ? (
                <>
                  <div className="space-y-2 border-b border-slate-100 pb-4">
                    <div className="flex items-center space-x-2 text-[#6F8FA6] font-bold text-xs uppercase tracking-wider">
                      <MessageSquare className="w-4 h-4 text-[#A8DADC]" />
                      <span>Formulario de Consultas</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#1E2D3B]">
                      Envíanos un Mensaje Directo
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre y apellidos"
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] bg-[#F0F7F9]/30"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="tucorreo@ejemplo.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] bg-[#F0F7F9]/30"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Teléfono de Contacto
                        </label>
                        <input
                          type="tel"
                          placeholder="Ej: 987654321"
                          value={formState.telefono}
                          onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] bg-[#F0F7F9]/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                        Asunto
                      </label>
                      <select
                        value={formState.asunto}
                        onChange={(e) => setFormState({ ...formState, asunto: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] outline-none text-sm text-[#1E2D3B] bg-white font-medium"
                      >
                        <option value="Informes sobre Carreras Técnicas">Informes sobre Carreras Técnicas</option>
                        <option value="Proceso de Admisión">Proceso de Admisión</option>
                        <option value="Consulta sobre Aula Virtual">Consulta sobre Aula Virtual (Moodle)</option>
                        <option value="Convenios Institucionales / EFSRT">Convenios Institucionales / EFSRT</option>
                        <option value="Ubicación y Visitas Presenciales">Ubicación y Visitas Presenciales</option>
                        <option value="Otro">Otro Asunto</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                        Mensaje o Consulta *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Escribe aquí tu mensaje detallado..."
                        value={formState.mensaje}
                        onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] bg-[#F0F7F9]/30"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-2xl bg-[#1E2D3B] text-white hover:bg-[#4A607A] font-bold text-sm shadow-xl transition-all flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4 text-[#A8DADC]" />
                        <span>Enviar Mensaje a admision@cetpro.edu.pe</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E2D3B]">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A607A] max-w-md mx-auto leading-relaxed">
                    Gracias por comunicarte con el CETPRO 01. Un representante de nuestro módulo de admisiones responderá a tu correo{' '}
                    <strong className="text-[#1E2D3B]">{formState.email}</strong> a la brevedad posible.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormState({ nombre: '', email: '', telefono: '', asunto: 'Informes sobre Carreras Técnicas', mensaje: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#A8DADC] text-[#1E2D3B] font-bold text-xs hover:bg-[#8ecae6] transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Sección de Mapa y Ubicación Geográfica */}
        <section id="mapa-ubicacion" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#A8DADC]/60 shadow-xl space-y-8">
            
            {/* Header del Mapa */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-[#6F8FA6] font-bold text-xs uppercase tracking-wider bg-[#F0F7F9] px-3.5 py-1.5 rounded-full border border-[#A8DADC]/40">
                  <MapPin className="w-4 h-4 text-[#1E2D3B]" />
                  <span>Ubicación Estratégica</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1E2D3B] tracking-tight">
                  Encuéntranos en Abancay
                </h2>
                <p className="text-[#4A607A] text-sm max-w-2xl font-light">
                  Nuestra sede central se ubica en una zona céntrica y de fácil acceso en Abancay, dotada con talleres equipados para todas nuestras especialidades.
                </p>
              </div>

              {/* Botones de Acción de Mapa */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600">¡Dirección Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copiar Dirección</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Jr.+Huancavelica+400,+Abancay+03001,+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#1E2D3B] text-white hover:bg-[#4A607A] text-xs font-bold transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4 text-[#A8DADC]" />
                  <span>Cómo Llegar (GPS)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Grid: Tarjetas de Información Rápida + Iframe del Mapa */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Tarjetas de Información de Acceso */}
              <div className="lg:col-span-4 space-y-4">
                
                {/* Tarjeta Dirección Principal */}
                <div className="bg-gradient-to-br from-[#F0F7F9] to-white p-6 rounded-2xl border border-[#A8DADC]/50 shadow-sm space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#1E2D3B] text-[#A8DADC] rounded-xl">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#6F8FA6] uppercase tracking-wider block">
                        Sede Institucional
                      </span>
                      <h4 className="font-extrabold text-[#1E2D3B] text-base">
                        CETPRO 01 Abancay
                      </h4>
                    </div>
                  </div>
                  <div className="text-xs text-slate-700 space-y-1 pt-1 border-t border-slate-200/60">
                    <p className="font-semibold text-sm text-[#1E2D3B]">
                      Jr. Huancavelica 400
                    </p>
                    <p className="text-slate-600">
                      Código Postal: <strong className="text-slate-800">03001</strong>
                    </p>
                    <p className="text-slate-600">
                      Abancay, Apurímac — Perú
                    </p>
                  </div>
                </div>

                {/* Tarjeta Referencias */}
                <div className="bg-[#F0F7F9]/50 p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center space-x-2 text-[#1E2D3B] font-bold text-xs uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-[#6F8FA6]" />
                    <span>Puntos de Referencia</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6F8FA6] mt-1.5 shrink-0"></span>
                      <span>A 3 cuadras de la Plaza de Armas de Abancay.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6F8FA6] mt-1.5 shrink-0"></span>
                      <span>Cercano a las principales avenidas y transporte urbano.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6F8FA6] mt-1.5 shrink-0"></span>
                      <span>Zona segura y comercial con facilidad para peatones.</span>
                    </li>
                  </ul>
                </div>

                {/* Tarjeta Medios de Transporte */}
                <div className="bg-[#F0F7F9]/50 p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="flex items-center space-x-2 text-[#1E2D3B] font-bold text-xs uppercase tracking-wider">
                    <Bus className="w-4 h-4 text-[#6F8FA6]" />
                    <span>Facilidad de Llegada</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center text-center space-y-1">
                      <Car className="w-4 h-4 text-[#4A607A]" />
                      <span className="font-bold text-[#1E2D3B]">Taxi / Auto</span>
                      <span className="text-[10px] text-slate-500">5 min desde el terminal</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col items-center text-center space-y-1">
                      <Bus className="w-4 h-4 text-[#4A607A]" />
                      <span className="font-bold text-[#1E2D3B]">Transporte</span>
                      <span className="text-[10px] text-slate-500">Rutas locales directas</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Contenedor del Mapa Interactivo (Google Maps Iframe) */}
              <div className="lg:col-span-8 flex flex-col space-y-3">
                <div className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-100">
                  <iframe
                    title="Mapa de Ubicación CETPRO 01 Abancay"
                    src="https://maps.google.com/maps?q=Jr.+Huancavelica+400,+Abancay+03001,+Peru&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  
                  {/* Badge Flotante en el mapa */}
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-[#A8DADC]/60 flex items-center space-x-2 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                    <div className="font-bold text-[#1E2D3B]">
                      CETPRO 01 — Jr. Huancavelica 400
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 px-2 gap-2">
                  <p className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#6F8FA6]" />
                    <span>Ubicación GPS verificada: Jr. Huancavelica 400, Abancay 03001</span>
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jr.+Huancavelica+400,+Abancay+03001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E2D3B] hover:text-[#4A607A] font-bold underline inline-flex items-center space-x-1"
                  >
                    <span>Abrir en Google Maps completo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

