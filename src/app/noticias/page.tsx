'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Newspaper,
  Sparkles,
  Clock,
  Calendar,
  ArrowRight,
  Database,
  Layers,
  Radio,
  CheckCircle2,
  Bell,
  Send,
  Share2,
  Tag,
  ShieldCheck,
  GraduationCap,
  Flame,
  AlertCircle,
  Code2,
  Workflow,
  ExternalLink,
  BookOpen,
  Users
} from 'lucide-react';

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const categories = [
    { id: 'todos', label: 'Todas las Novedades' },
    { id: 'comunicados', label: 'Comunicados Oficiales' },
    { id: 'academico', label: 'Talleres y Académico' },
    { id: 'institucional', label: 'Eventos y Comunidad' },
    { id: 'empleo', label: 'Convenios y Empleo' },
  ];

  const previewNews = [
    {
      id: 1,
      category: 'comunicados',
      categoryLabel: 'Comunicado Oficial',
      categoryColor: 'bg-[#1E2D3B] text-[#A8DADC]',
      title: 'Apertura Oficial del Proceso de Matrícula 2026 - I en todas las Especialidades Técnicas',
      excerpt: 'El CETPRO 01 Abancay anuncia el cronograma regular y extraordinario para los módulos técnicos de alta demanda laboral.',
      date: '15 de Marzo, 2026',
      readTime: '3 min de lectura',
      status: 'Próxima Publicación',
      featured: true,
      tag: 'Admisión 2026',
      icon: GraduationCap,
    },
    {
      id: 2,
      category: 'academico',
      categoryLabel: 'Talleres y Prácticas',
      categoryColor: 'bg-[#6F8FA6]/20 text-[#1E2D3B]',
      title: 'Modernización de Talleres de Cocina y Panadería con Equipamiento de Estándar Industrial',
      excerpt: 'Nuevos hornos convectores y mesas de acero inoxidable permitirán a los estudiantes realizar prácticas con tecnología de punta.',
      date: '10 de Marzo, 2026',
      readTime: '4 min de lectura',
      status: 'En Redacción CMS',
      featured: false,
      tag: 'Infraestructura',
      icon: Layers,
    },
    {
      id: 3,
      category: 'institucional',
      categoryLabel: 'Eventos y Comunidad',
      categoryColor: 'bg-[#F8C8C8]/60 text-[#1E2D3B]',
      title: 'Feria de Emprendimiento e Innovación Técnica Estudiantil Abancay 2026',
      excerpt: 'Alumnos de Estilismo, Confección Textil y Computación expondrán proyectos productivos orientados a la creación de microempresas.',
      date: '02 de Marzo, 2026',
      readTime: '2 min de lectura',
      status: 'Programado en Sanity',
      featured: false,
      tag: 'Emprendimiento',
      icon: Sparkles,
    },
    {
      id: 4,
      category: 'empleo',
      categoryLabel: 'Convenios y Empleo',
      categoryColor: 'bg-emerald-100 text-emerald-800',
      title: 'Firma de Alianzas Estratégicas con Empresas Regionales para Prácticas Preprofesionales',
      excerpt: 'Nuevos acuerdos facilitarán la inserción laboral directa de los egresados en cadenas de hostelería, talleres y servicios tecnológicos.',
      date: '24 de Febrero, 2026',
      readTime: '5 min de lectura',
      status: 'En Redacción CMS',
      featured: false,
      tag: 'Inserción Laboral',
      icon: Users,
    },
    {
      id: 5,
      category: 'comunicados',
      categoryLabel: 'Comunicado Oficial',
      categoryColor: 'bg-[#1E2D3B] text-[#A8DADC]',
      title: 'Orientación para la Obtención del Título Técnico a Nombre de la Nación',
      excerpt: 'Guía paso a paso sobre los requisitos modulares, horas de prácticas en centros laborales y trámite de titulación oficial.',
      date: '18 de Febrero, 2026',
      readTime: '3 min de lectura',
      status: 'Próxima Publicación',
      featured: false,
      tag: 'Titulación MINEDU',
      icon: ShieldCheck,
    },
    {
      id: 6,
      category: 'academico',
      categoryLabel: 'Talleres y Académico',
      categoryColor: 'bg-[#6F8FA6]/20 text-[#1E2D3B]',
      title: 'Capacitación Docente en Nuevas Tecnologías Digitales y Plataforma Moodle',
      excerpt: 'Plana docente del CETPRO concluye exitoso ciclo de actualización pedagógica digital para el fortalecimiento del Aula Virtual.',
      date: '12 de Febrero, 2026',
      readTime: '3 min de lectura',
      status: 'En Redacción CMS',
      featured: false,
      tag: 'Capacitación',
      icon: BookOpen,
    },
  ];

  const filteredNews = selectedCategory === 'todos'
    ? previewNews
    : previewNews.filter((item) => item.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail.trim()) {
      setEmailSubscribed(true);
      setSubscriberEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F7F9]">
      <Navbar />

      <main className="flex-grow space-y-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1E2D3B] via-[#4A607A] to-[#6F8FA6] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
          <div className="max-w-7xl mx-auto space-y-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC] bg-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 backdrop-blur-md">
                <Newspaper className="w-3.5 h-3.5" />
                Portal Informativo
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#1E2D3B] bg-[#F8C8C8] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm animate-pulse">
                <Radio className="w-3 h-3 text-red-600" />
                CMS en Implementación
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Noticias y Novedades
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed">
              El canal oficial de difusión de actividades, logros estudiantiles, talleres formativos y comunicados institucionales del <span className="font-semibold text-white">CETPRO 01 Abancay</span>.
            </p>
          </div>
        </section>

        {/* CMS Sanity.io Status Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#A8DADC]/50 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#A8DADC]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#F8C8C8]/20 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-[#4A607A] font-bold text-xs uppercase tracking-wider bg-[#F0F7F9] px-3.5 py-1.5 rounded-xl border border-[#A8DADC]/40">
                  <Workflow className="w-4 h-4 text-[#1E2D3B]" />
                  <span>Integración Tecnológica en Curso</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#1E2D3B] leading-tight">
                  Estamos configurando nuestro gestor de contenidos con <span className="text-[#6F8FA6]">Sanity.io</span>
                </h2>

                <p className="text-[#4A607A] text-sm sm:text-base leading-relaxed">
                  Para brindarte noticias en tiempo real, comunicados con carga ultrarrápida, galerías fotográficas de nuestros talleres y filtrado dinámico por programas, nuestro equipo técnico está integrando la infraestructura Headless CMS de <span className="font-semibold text-[#1E2D3B]">Sanity.io</span>.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <div className="flex items-center space-x-2 bg-[#F0F7F9] px-3 py-2 rounded-xl border border-slate-200">
                    <Database className="w-4 h-4 text-[#1E2D3B]" />
                    <span className="text-xs font-semibold text-[#1E2D3B]">Sanity Studio Headless</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#F0F7F9] px-3 py-2 rounded-xl border border-slate-200">
                    <Sparkles className="w-4 h-4 text-[#6F8FA6]" />
                    <span className="text-xs font-semibold text-[#1E2D3B]">Next.js Realtime Updates</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-[#F0F7F9] px-3 py-2 rounded-xl border border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-semibold text-[#1E2D3B]">Publicación Oficial Segura</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Roadmap Tracker */}
              <div className="lg:col-span-5 bg-[#1E2D3B] rounded-2xl p-6 text-white shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-[#6F8FA6]/30 pb-3">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-5 h-5 text-[#A8DADC]" />
                    <span className="text-sm font-bold text-white tracking-wide">Fases de Implementación</span>
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#A8DADC] text-[#1E2D3B]">
                    Progreso: 75%
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-emerald-500/20 text-emerald-400 rounded-md shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">1. Esquemas & Modelos de Datos</p>
                      <p className="text-slate-400 text-[11px]">Categorías, notas de prensa y autores definidos.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-emerald-500/20 text-emerald-400 rounded-md shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">2. Interfaz & Componentes UI</p>
                      <p className="text-slate-400 text-[11px]">Diseño adaptativo y tarjetas de lectura terminadas.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-[#A8DADC]/20 text-[#A8DADC] rounded-md shrink-0 mt-0.5 animate-pulse">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#A8DADC]">3. Vinculación con Sanity API (Actual)</p>
                      <p className="text-slate-300 text-[11px]">Configurando tokens de lectura y despliegue del Studio.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 opacity-60">
                    <div className="p-1 bg-slate-700 text-slate-400 rounded-md shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-300">4. Despliegue en Vivo</p>
                      <p className="text-slate-400 text-[11px]">Lanzamiento oficial con redacción de notas activas.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#6F8FA6]/20 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-[#F8C8C8]" />
                    Próximo estreno en pocos días
                  </span>
                  <span className="text-[#A8DADC] font-semibold">Sanity.io v3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section: Feed & Filter Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-[#6F8FA6] font-bold text-xs uppercase tracking-wider bg-white px-3 py-1 rounded-lg border border-[#A8DADC]/40">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Vista Previa de Publicaciones</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2D3B]">
                Próximos Artículos y Comunicados
              </h2>
              <p className="text-[#4A607A] text-sm max-w-xl">
                A continuación te presentamos un adelanto de las temáticas y notas informativas que estarán disponibles en el nuevo portal.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-[#1E2D3B] text-white shadow-md'
                      : 'bg-white text-[#4A607A] hover:bg-[#A8DADC]/30 hover:text-[#1E2D3B] border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border border-[#A8DADC]/40 shadow-sm card-hover-effect flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="space-y-4">
                    {/* Header badge & status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide ${item.categoryColor}`}>
                        {item.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        {item.status}
                      </span>
                    </div>

                    {/* Icon banner preview */}
                    <div className="h-36 rounded-2xl bg-gradient-to-br from-[#F0F7F9] to-[#A8DADC]/30 border border-[#A8DADC]/30 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group-hover:border-[#6F8FA6] transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1E2D3B] mb-2 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#1E2D3B]" />
                      </div>
                      <span className="text-[11px] font-bold text-[#4A607A] flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#6F8FA6]" />
                        {item.tag}
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#1E2D3B] leading-snug group-hover:text-[#6F8FA6] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A607A] line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#4A607A]">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#6F8FA6]" />
                      <span>{item.date}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{item.readTime}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Newsletter & Direct Notification Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E2D3B] via-[#263849] to-[#1E2D3B] text-white rounded-3xl p-8 sm:p-12 border border-[#6F8FA6]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#A8DADC]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#A8DADC] text-[#1E2D3B] shadow-lg">
                <Bell className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  ¿Quieres ser el primero en enterarte de las noticias?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base font-light">
                  Regístrate para recibir notificaciones cuando se publiquen nuevos comunicados, aperturas de matrícula y eventos académicos del CETPRO.
                </p>
              </div>

              {emailSubscribed ? (
                <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-6 py-4 rounded-2xl inline-flex items-center space-x-3 text-sm animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>¡Gracias! Tu correo ha sido registrado para las alertas de noticias.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={subscriberEmail}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                    placeholder="Ingresa tu correo electrónico..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:bg-white/15 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#A8DADC] text-[#1E2D3B] font-bold text-sm hover:bg-[#8ecae6] transition-all flex items-center justify-center space-x-2 shrink-0 shadow-md"
                  >
                    <span>Notificarme</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-400">
                Respetamos tu privacidad. No enviamos spam, solo comunicados institucionales y oportunidades académicas.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links & CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#A8DADC]/40 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E2D3B]">
                  ¿Deseas información sobre el proceso de Admisión y Matrícula?
                </h3>
                <p className="text-sm text-[#4A607A]">
                  Mientras finalizamos el portal de noticias, puedes postular directamente a nuestros programas o escribirnos a atención directa.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <Link
                  href="/admision"
                  className="px-6 py-3 rounded-xl bg-[#1E2D3B] text-white hover:bg-[#4A607A] font-bold text-sm transition-all shadow-md flex items-center space-x-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#A8DADC]" />
                  <span>Ir a Admisión</span>
                </Link>

                <Link
                  href="/contacto"
                  className="px-6 py-3 rounded-xl bg-[#F0F7F9] text-[#1E2D3B] hover:bg-[#A8DADC]/30 border border-[#A8DADC]/60 font-bold text-sm transition-all flex items-center space-x-2"
                >
                  <span>Contacto e Informes</span>
                  <ArrowRight className="w-4 h-4 text-[#6F8FA6]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
