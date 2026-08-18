'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PROGRAMS } from '@/data/programsData';
import { 
  UserCheck, 
  FileText, 
  Calendar, 
  Mail, 
  Phone, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Printer, 
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Clock,
  Loader2,
  Database
} from 'lucide-react';

interface FormData {
  apellidosNombres: string;
  tipoDocumento: 'DNI' | 'Carné de Extranjería' | 'Pasaporte';
  numeroDocumento: string;
  fechaNacimiento: string;
  edad: string;
  genero: 'Masculino' | 'Femenino' | '';
  correo: string;
  telefono: string;
  especialidad: string;
}

export default function AdmisionPage() {
  const [formData, setFormData] = useState<FormData>({
    apellidosNombres: '',
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    fechaNacimiento: '',
    edad: '',
    genero: '',
    correo: '',
    telefono: '',
    especialidad: PROGRAMS[0].title,
  });

  const [documentError, setDocumentError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [constanciaCode, setConstanciaCode] = useState<string>('');
  const [fechaRegistroOficial, setFechaRegistroOficial] = useState<string>('');

  // Dynamic automatic calculation of age based on fechaNacimiento
  useEffect(() => {
    if (!formData.fechaNacimiento) {
      setFormData(prev => ({ ...prev, edad: '' }));
      return;
    }

    const birthDate = new Date(formData.fechaNacimiento);
    const today = new Date();
    
    if (isNaN(birthDate.getTime())) {
      setFormData(prev => ({ ...prev, edad: '' }));
      return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setFormData(prev => ({
      ...prev,
      edad: age >= 0 ? `${age} años` : 'Fecha no válida'
    }));
  }, [formData.fechaNacimiento]);

  // Document number validation (DNI exact 8 digits check)
  const handleNumeroDocumentoChange = (value: string) => {
    // Only numbers allowed for DNI
    if (formData.tipoDocumento === 'DNI') {
      const sanitized = value.replace(/\D/g, '').slice(0, 8);
      setFormData(prev => ({ ...prev, numeroDocumento: sanitized }));
      
      if (sanitized.length > 0 && sanitized.length < 8) {
        setDocumentError('El DNI debe tener exactamente 8 dígitos numéricos.');
      } else {
        setDocumentError('');
      }
    } else {
      setFormData(prev => ({ ...prev, numeroDocumento: value }));
      setDocumentError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.tipoDocumento === 'DNI' && formData.numeroDocumento.length !== 8) {
      setDocumentError('El DNI debe tener exactamente 8 dígitos numéricos.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/preinscripcion.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setConstanciaCode(result.codigo || ('ADM-2026-' + Math.floor(100000 + Math.random() * 900000)));
        setFechaRegistroOficial(result.data?.fechaRegistro || new Date().toLocaleString('es-PE'));
        setIsSubmitted(true);
      } else {
        if (result.errors && Array.isArray(result.errors)) {
          setSubmitError(result.errors.join(' '));
        } else {
          setSubmitError(result.message || 'Ocurrió un error al registrar en la base de datos.');
        }
      }
    } catch (err: any) {
      console.error('Error enviando preinscripción:', err);
      // Si estamos en entorno de desarrollo local sin PHP/MySQL activo, o si falló la red:
      setSubmitError(
        'No se pudo conectar con el servidor de base de datos de Hostinger. Asegúrate de haber configurado los datos en public/api/config.php y que la web esté desplegada en Hostinger.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F7F9]">
      <Navbar />

      <main className="flex-grow space-y-16 pb-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-r from-[#1E2D3B] via-[#4A607A] to-[#6F8FA6] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC] bg-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
              Proceso Lectivo 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Admisión e Inscripción CETPRO 01
            </h1>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Completa el formulario oficial de pre-inscripción y asegura tu vacante en nuestras especialidades técnicas.
            </p>
          </div>
        </section>

        {/* Section: Form & Steps */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#A8DADC]/60 shadow-xl space-y-6">
              {!isSubmitted ? (
                <>
                  <div className="space-y-2 border-b border-slate-100 pb-4">
                    <div className="flex items-center space-x-2 text-[#6F8FA6] font-bold text-xs uppercase tracking-wider">
                      <UserCheck className="w-4 h-4 text-[#A8DADC]" />
                      <span>Formulario Oficial de Pre-Inscripción</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#1E2D3B]">
                      Datos del Postulante
                    </h2>
                    <p className="text-xs text-[#4A607A]">
                      Por favor, completa todos los campos requeridos para la verificación de tu postulación.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Campo 1: Nombres y Apellidos */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                        Apellidos y Nombres Completos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Pérez García, Juan Carlos"
                        value={formData.apellidosNombres}
                        onChange={(e) => setFormData({ ...formData, apellidosNombres: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] transition-all bg-[#F0F7F9]/30"
                      />
                    </div>

                    {/* Campo 2 & 3: Tipo y Número de Documento */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Tipo de Documento *
                        </label>
                        <select
                          value={formData.tipoDocumento}
                          onChange={(e) => {
                            const val = e.target.value as any;
                            setFormData({ ...formData, tipoDocumento: val, numeroDocumento: '' });
                            setDocumentError('');
                          }}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] bg-white transition-all"
                        >
                          <option value="DNI">DNI (Documento Nacional de Identidad)</option>
                          <option value="Carné de Extranjería">Carné de Extranjería</option>
                          <option value="Pasaporte">Pasaporte</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Número de Documento *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={formData.tipoDocumento === 'DNI' ? '8 dígitos numéricos' : 'Número de documento'}
                          value={formData.numeroDocumento}
                          onChange={(e) => handleNumeroDocumentoChange(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border outline-none text-sm text-[#1E2D3B] transition-all ${
                            documentError ? 'border-red-400 bg-red-50/50' : 'border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 bg-[#F0F7F9]/30'
                          }`}
                        />
                        {documentError && (
                          <span className="text-[11px] text-red-500 font-semibold flex items-center space-x-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{documentError}</span>
                          </span>
                        )}
                        {formData.tipoDocumento === 'DNI' && !documentError && formData.numeroDocumento.length === 8 && (
                          <span className="text-[11px] text-emerald-600 font-semibold flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>DNI válido (8 dígitos completados)</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Campo 4 & 5: Fecha de Nacimiento & Edad (Cálculo dinámico automático) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Fecha de Nacimiento *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.fechaNacimiento}
                          onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] transition-all bg-[#F0F7F9]/30"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Edad (Cálculo automático)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            readOnly
                            placeholder="Se calcula al seleccionar fecha"
                            value={formData.edad}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-100 text-[#1E2D3B] font-bold text-sm outline-none cursor-not-allowed"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase font-bold text-[#6F8FA6] bg-white px-2 py-0.5 rounded border border-slate-200">
                            Dinámico
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Campo 6 & 7: Género & Correo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Género / Sexo *
                        </label>
                        <select
                          required
                          value={formData.genero}
                          onChange={(e) => setFormData({ ...formData, genero: e.target.value as any })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] bg-white transition-all"
                        >
                          <option value="">Selecciona género</option>
                          <option value="Masculino">Masculino</option>
                          <option value="Femenino">Femenino</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="ejemplo@correo.com"
                          value={formData.correo}
                          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] transition-all bg-[#F0F7F9]/30"
                        />
                      </div>
                    </div>

                    {/* Campo 8 & 9: Teléfono / WhatsApp & Especialidad de Interés */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Teléfono / Celular (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ej: 987654321"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] transition-all bg-[#F0F7F9]/30"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#1E2D3B] uppercase tracking-wider">
                          Especialidad de Interés *
                        </label>
                        <select
                          required
                          value={formData.especialidad}
                          onChange={(e) => setFormData({ ...formData, especialidad: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#A8DADC] focus:ring-2 focus:ring-[#A8DADC]/40 outline-none text-sm text-[#1E2D3B] bg-white font-medium transition-all"
                        >
                          {PROGRAMS.map((program) => (
                            <option key={program.id} value={program.title}>
                              {program.title} ({program.cycle})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Alerta de Error si ocurre */}
                    {submitError && (
                      <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs space-y-1 animate-fadeIn">
                        <div className="flex items-center space-x-2 font-bold text-red-800">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>No se pudo completar el registro</span>
                        </div>
                        <p className="leading-relaxed pl-6">{submitError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-2xl text-white font-bold text-base shadow-xl transition-all flex items-center justify-center space-x-2 ${
                          isSubmitting
                            ? 'bg-[#4A607A] cursor-not-allowed opacity-90'
                            : 'bg-[#1E2D3B] hover:bg-[#4A607A] hover:shadow-[#1E2D3B]/20 active:scale-[0.99]'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin text-[#A8DADC]" />
                            <span>Registrando en Base de Datos...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-[#A8DADC]" />
                            <span>Enviar Pre-Inscripción Oficial</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Ticket de Confirmación de Admisión */
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900">
                      ¡Pre-Inscripción Exitosa!
                    </h3>
                    <p className="text-xs text-emerald-700">
                      Tus datos han sido registrados correctamente en la base de admisiones del CETPRO 01 en Hostinger.
                    </p>
                  </div>

                  {/* Ficha Voucher */}
                  <div className="bg-[#F0F7F9] p-6 rounded-2xl border border-[#A8DADC]/60 space-y-4 font-sans">
                    <div className="flex justify-between items-center border-b border-[#A8DADC]/40 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#6F8FA6]">Ficha de Postulación</span>
                        <h4 className="font-extrabold text-lg text-[#1E2D3B]">{formData.especialidad}</h4>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-[#1E2D3B] text-[#A8DADC] text-xs font-mono font-bold rounded-lg block">
                          {constanciaCode}
                        </span>
                        {fechaRegistroOficial && (
                          <span className="text-[10px] text-slate-500 block pt-1">
                            {fechaRegistroOficial}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs text-[#1E2D3B]">
                      <div>
                        <span className="text-slate-500 block">Postulante:</span>
                        <span className="font-bold">{formData.apellidosNombres}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">{formData.tipoDocumento}:</span>
                        <span className="font-bold">{formData.numeroDocumento}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Edad Calculada:</span>
                        <span className="font-bold text-emerald-700">{formData.edad}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Género:</span>
                        <span className="font-bold">{formData.genero}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Correo:</span>
                        <span className="font-bold">{formData.correo}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">WhatsApp:</span>
                        <span className="font-bold">{formData.telefono}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center space-x-1 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Registro Guardado en Servidor Hostinger</span>
                      </span>
                      <span className="text-slate-400">Estado: Pendiente</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1E2D3B] font-bold text-sm transition-colors flex items-center justify-center space-x-2"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Imprimir Constancia</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          apellidosNombres: '',
                          tipoDocumento: 'DNI',
                          numeroDocumento: '',
                          fechaNacimiento: '',
                          edad: '',
                          genero: '',
                          correo: '',
                          telefono: '',
                          especialidad: PROGRAMS[0].title,
                        });
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-[#A8DADC] text-[#1E2D3B] font-bold text-sm hover:bg-[#8ecae6] transition-colors"
                    >
                      Nueva Inscripción
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column: Requisitos y Proceso */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Requisitos */}
              <div className="bg-white rounded-3xl p-6 border border-[#A8DADC]/40 shadow-lg space-y-4">
                <div className="flex items-center space-x-2 text-[#1E2D3B] font-bold text-base">
                  <FileText className="w-5 h-5 text-[#6F8FA6]" />
                  <span>Requisitos de Admisión</span>
                </div>

                <ul className="space-y-3 text-xs text-[#4A607A]">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Copia simple de DNI, Carné de Extranjería o Pasaporte vigente.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dos fotografías tamaño carné a color con fondo blanco.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Certificado de estudios (Primaria/Secundaria según el Ciclo de interés).</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ficha de pre-inscripción web impresa o digital.</span>
                  </li>
                </ul>
              </div>

              {/* Horarios de Atención */}
              <div className="bg-[#1E2D3B] text-white rounded-3xl p-6 shadow-lg space-y-3">
                <div className="flex items-center space-x-2 text-[#A8DADC] font-bold text-sm uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Módulo de Admisiones</span>
                </div>
                <h4 className="font-bold text-lg">Horario de Atención Presencial</h4>
                <div className="text-xs text-slate-300 space-y-1 font-light">
                  <p>• Lunes a Viernes: 8:00 am - 5:00 pm</p>
                  <p>• Sábados: 9:00 am - 1:00 pm</p>
                  <p className="pt-2 text-[#A8DADC] font-semibold">Correo oficial: admision@cetpro.edu.pe</p>
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
