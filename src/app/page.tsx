import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroCarousel } from '@/components/HeroCarousel';
import { PROGRAMS } from '@/data/programsData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Lightbulb, 
  Users, 
  Laptop, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Scissors,
  Utensils,
  Monitor,
  Cake,
  Shirt,
  Hotel,
  Layers,
  Ruler,
  Palette
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-[#1E2D3B]" />,
  Utensils: <Utensils className="w-6 h-6 text-[#1E2D3B]" />,
  Monitor: <Monitor className="w-6 h-6 text-[#1E2D3B]" />,
  Scissors: <Scissors className="w-6 h-6 text-[#1E2D3B]" />,
  Cake: <Cake className="w-6 h-6 text-[#1E2D3B]" />,
  Shirt: <Shirt className="w-6 h-6 text-[#1E2D3B]" />,
  Hotel: <Hotel className="w-6 h-6 text-[#1E2D3B]" />,
  Needle: <Layers className="w-6 h-6 text-[#1E2D3B]" />,
  Ruler: <Ruler className="w-6 h-6 text-[#1E2D3B]" />,
  Palette: <Palette className="w-6 h-6 text-[#1E2D3B]" />,
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F7F9]">
      <Navbar />

      <main className="flex-grow space-y-16 pb-20">
        {/* Hero Section */}
        <section className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroCarousel />
        </section>

        {/* Propósito Institucional */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#6F8FA6] bg-[#A8DADC]/30 px-3.5 py-1.5 rounded-full inline-block">
              Nuestra Misión Educativa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2D3B]">
              Propósito Institucional del CETPRO 01
            </h2>
            <p className="text-[#4A607A] text-sm sm:text-base">
              Impulsamos el talento técnico peruano con dos ejes estratégicos de alta empleabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Eje 1 */}
            <div className="bg-white rounded-3xl p-8 border border-[#A8DADC]/40 shadow-lg card-hover-effect relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A8DADC]/20 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#A8DADC] text-[#1E2D3B] flex items-center justify-center shadow-md">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E2D3B]">Inserción Laboral Inmediata</h3>
                <p className="text-[#4A607A] text-sm sm:text-base leading-relaxed">
                  Competencias prácticas para emplearse o emprender rápidamente en el mercado laboral real, con habilidades orientadas a la alta demanda técnica de las empresas locales e internacionales.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#1E2D3B] font-medium">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Prácticas en talleres y empresas reales (EFSRT)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Generación de ingresos propios desde el primer ciclo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Eje 2 */}
            <div className="bg-white rounded-3xl p-8 border border-[#A8DADC]/40 shadow-lg card-hover-effect relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8C8C8]/30 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F8C8C8] text-[#1E2D3B] flex items-center justify-center shadow-md">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E2D3B]">Continuidad de Estudios</h3>
                <p className="text-[#4A607A] text-sm sm:text-base leading-relaxed">
                  Plataforma de impulso para acceder a la Educación Superior Tecnológica. Nuestros créditos convalidados permiten escalar en la línea de carrera técnica profesional.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#1E2D3B] font-medium">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Convalidación directa con Institutos Tecnológicos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Certificación oficial a Nombre de la Nación</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología e Innovación ("Aprender Haciendo") */}
        <section className="bg-white py-16 border-y border-[#6F8FA6]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#1E2D3B] bg-[#F8C8C8] px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                Propuesta Pedagógica Disruptiva
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2D3B]">
                Metodología e Innovación: &quot;Aprender Haciendo&quot;
              </h2>
              <p className="text-[#4A607A] text-sm sm:text-base">
                Combinación equilibrada de práctica intensiva en talleres y formación integral humana.
              </p>
            </div>

            {/* Banner EFSRT */}
            <div className="bg-gradient-to-br from-[#1E2D3B] to-[#4A607A] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#A8DADC]/20 text-[#A8DADC] text-xs font-bold uppercase">
                  <Award className="w-4 h-4" />
                  <span>EFSRT Integradas</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Experiencias Formativas en Situaciones Reales de Trabajo (EFSRT)
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
                  Prácticas directas en nuestros talleres especializados, empresas aliadas y proyectos productivos que suman créditos y generan experiencia laboral comprobable antes de graduarte.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shrink-0 text-center space-y-2">
                <span className="text-4xl font-black text-[#A8DADC]">100%</span>
                <span className="block text-xs uppercase tracking-wider font-semibold text-slate-200">
                  Práctica Real Comprobable
                </span>
                <Link
                  href="/institucion"
                  className="inline-block mt-2 text-xs font-bold text-[#A8DADC] hover:underline"
                >
                  Conocer Modelo Educativo →
                </Link>
              </div>
            </div>

            {/* Formación Integral Pills */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1E2D3B] text-center">
                Formación Integral Comprendida Por:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pilar 1 */}
                <div className="bg-[#F0F7F9] p-6 rounded-2xl border border-[#A8DADC]/50 space-y-3 card-hover-effect">
                  <div className="w-12 h-12 rounded-xl bg-[#A8DADC] text-[#1E2D3B] flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-[#1E2D3B]">Habilidades Blandas y Ética</h4>
                  <p className="text-xs sm:text-sm text-[#4A607A] leading-relaxed">
                    Trabajo en equipo, comunicación asertiva, empatía y resolución ética de problemas en el entorno laboral.
                  </p>
                </div>

                {/* Pilar 2 */}
                <div className="bg-[#F0F7F9] p-6 rounded-2xl border border-[#A8DADC]/50 space-y-3 card-hover-effect">
                  <div className="w-12 h-12 rounded-xl bg-[#6F8FA6] text-white flex items-center justify-center">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-[#1E2D3B]">Tecnologías de la Información (TICs)</h4>
                  <p className="text-xs sm:text-sm text-[#4A607A] leading-relaxed">
                    Manejo de herramientas digitales esenciales, software productivo e inclusión tecnológica.
                  </p>
                </div>

                {/* Pilar 3 */}
                <div className="bg-[#F0F7F9] p-6 rounded-2xl border border-[#A8DADC]/50 space-y-3 card-hover-effect">
                  <div className="w-12 h-12 rounded-xl bg-[#F8C8C8] text-[#1E2D3B] flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-[#1E2D3B]">Emprendimiento</h4>
                  <p className="text-xs sm:text-sm text-[#4A607A] leading-relaxed">
                    Gestión de negocios propios, costeo estratégico y diseño de proyectos sociales y económicos sostenibles.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Grid de Programas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#6F8FA6]">
                Oferta Educativa Oficial
              </span>
              <h2 className="text-3xl font-extrabold text-[#1E2D3B] mt-1">
                Programas de Estudio
              </h2>
            </div>
            <Link
              href="/programas"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#1E2D3B] hover:text-[#6F8FA6] transition-colors"
            >
              <span>Ver todas las especialidades</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#A8DADC]/40 shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col group"
              >
                {/* Program Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold bg-[#1E2D3B] text-white shadow">
                    {program.cycle}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-[#6F8FA6]">
                      <div className="p-1.5 bg-[#F0F7F9] rounded-lg border border-[#A8DADC]/40">
                        {iconMap[program.iconName] || <BookOpen className="w-4 h-4 text-[#1E2D3B]" />}
                      </div>
                      <span>{program.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1E2D3B] group-hover:text-[#6F8FA6] transition-colors line-clamp-1">
                      {program.title}
                    </h3>

                    <p className="text-xs text-[#4A607A] line-clamp-2 leading-relaxed">
                      {program.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#6F8FA6]">
                      {program.duration}
                    </span>
                    <Link
                      href="/programas"
                      className="px-3 py-1.5 rounded-xl bg-[#F0F7F9] hover:bg-[#A8DADC] text-[#1E2D3B] font-bold text-xs transition-colors flex items-center space-x-1"
                    >
                      <span>Detalles</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seccion Contacto CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1E2D3B] via-[#4A607A] to-[#6F8FA6] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC]">
                ¡Comienza Tu Futuro Hoy!
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight">
                ¿Tienes dudas sobre el proceso de admisión?
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed">
                Ponte en contacto directo con nuestro equipo de admisiones. Escríbenos a{' '}
                <span className="font-bold text-[#A8DADC]">admision@cetpro.edu.pe</span> y asegura tu vacante.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                href="/contacto"
                className="px-6 py-3.5 rounded-2xl bg-[#A8DADC] text-[#1E2D3B] font-bold text-sm hover:bg-[#8ecae6] transition-colors text-center shadow-lg"
              >
                Ir a Página de Contacto
              </Link>
              <Link
                href="/admision"
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors text-center backdrop-blur-md"
              >
                Formulario de Admisión
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
