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
  HelpCircle
} from 'lucide-react';

export default function ContactoPage() {
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: 'Informes sobre Carreras Técnicas',
    mensaje: '',
  });

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

                  {/* Item 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#F0F7F9] text-[#1E2D3B] rounded-xl border border-[#A8DADC]/40 shrink-0">
                      <MapPin className="w-5 h-5 text-[#6F8FA6]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#6F8FA6] uppercase tracking-wider block">
                        Dirección Sede Principal
                      </span>
                      <span className="font-semibold text-slate-700">
                        Campus CETPRO 01 - Av. Institucional s/n, Sede Central
                      </span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#F0F7F9] text-[#1E2D3B] rounded-xl border border-[#A8DADC]/40 shrink-0">
                      <Clock className="w-5 h-5 text-[#6F8FA6]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#6F8FA6] uppercase tracking-wider block">
                        Horario de Atención
                      </span>
                      <span className="font-semibold text-slate-700">
                        Lunes a Viernes: 8:00 AM - 5:00 PM
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
                  href="https://wa.me/51987654321?text=Hola%20CETPRO%2001,%20deseo%20informes"
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
      </main>

      <Footer />
    </div>
  );
}
