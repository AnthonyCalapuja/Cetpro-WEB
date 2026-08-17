import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Building2,
  Target,
  Eye,
  Award,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Users,
  BookOpen
} from 'lucide-react';

export default function InstitucionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F7F9]">
      <Navbar />

      <main className="flex-grow space-y-16 pb-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-r from-[#1E2D3B] via-[#4A607A] to-[#6F8FA6] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC] bg-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
              Conócenos
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Nuestra Institución
            </h1>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Formando profesionales técnicos competitivos con ética, innovación y visión emprendedora.
            </p>
          </div>
        </section>

        {/* Sección: ¿Qué es el CETPRO? */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#A8DADC]/40 shadow-xl space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-flex items-center space-x-2 text-[#6F8FA6] font-bold text-xs uppercase tracking-wider bg-[#F0F7F9] px-3 py-1.5 rounded-lg border border-[#A8DADC]/40">
                  <Building2 className="w-4 h-4" />
                  <span>Definición Oficial</span>
                </div>
                <h2 className="text-3xl font-extrabold text-[#1E2D3B]">
                  ¿Qué es el CETPRO?
                </h2>
                <p className="text-[#1E2D3B] font-semibold text-lg leading-snug">
                  Centro de Educación Técnico-Productiva (ETP).
                </p>
                <p className="text-[#4A607A] text-sm sm:text-base leading-relaxed">
                  Más que una escuela tradicional, el CETPRO es una modalidad educativa articuladora del sistema educativo peruano que conecta directamente las aulas y talleres de aprendizaje con el mundo laboral real.
                </p>
                <p className="text-[#4A607A] text-sm sm:text-base leading-relaxed">
                  Está diseñada para desarrollar competencias laborales prácticas, habilidades emprendedoras e innovación tecnológica en jóvenes y adultos, garantizando una titulación oficial a Nombre de la Nación.
                </p>
              </div>

              <div className="w-full md:w-1/2 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/logo-cetpro.png"
                  alt="CETPRO 01 Campus"
                  fill
                  className="object-contain p-6 bg-slate-50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white rounded-3xl p-8 border border-[#A8DADC]/40 shadow-lg space-y-4 card-hover-effect">
              <div className="w-12 h-12 rounded-2xl bg-[#A8DADC] text-[#1E2D3B] flex items-center justify-center shadow">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2D3B]">Nuestra Misión</h3>
              <p className="text-[#4A607A] text-sm sm:text-base leading-relaxed">
                Brindar educación técnico-productiva de calidad, mediante una formación integral basada en competencias laborales, valores éticos y uso de tecnologías avanzadas, preparando a nuestros estudiantes para una rápida inserción laboral y el desarrollo de emprendimientos sostenibles.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-3xl p-8 border border-[#A8DADC]/40 shadow-lg space-y-4 card-hover-effect">
              <div className="w-12 h-12 rounded-2xl bg-[#F8C8C8] text-[#1E2D3B] flex items-center justify-center shadow">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E2D3B]">Nuestra Visión</h3>
              <p className="text-[#4A607A] text-sm sm:text-base leading-relaxed">
                Ser reconocidos como el Centro de Educación Técnico-Productiva líder de la región, destacado por la excelencia pedagógica de sus talleres, la alta empleabilidad de sus egresados y su articulación estratégica con la Educación Superior Tecnológica.
              </p>
            </div>
          </div>
        </section>

        {/* Articulación y EFSRT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1E2D3B] via-[#4A607A] to-[#1E2D3B] rounded-3xl p-8 sm:p-12 text-white shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC]">
                Modelo Formativo ETP
              </span>
              <h2 className="text-3xl font-extrabold">
                Articulación con el Mercado Laboral y Educación Superior
              </h2>
              <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed">
                Nuestra malla curricular está alineada al Catálogo Nacional de la Oferta Formativa (CNOF) del Ministerio de Educación del Perú.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
                <div className="p-2 bg-[#A8DADC] text-[#1E2D3B] rounded-xl w-max">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg">Prácticas Pre-Profesionales (EFSRT)</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Experiencias formativas obligatorias desarrolladas directamente en situaciones reales de trabajo dentro de talleres o convenios empresariales.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
                <div className="p-2 bg-[#F8C8C8] text-[#1E2D3B] rounded-xl w-max">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg">Convalidación Académica</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Los módulos aprobados permiten la convalidación de créditos para continuar estudios superiores en Institutos de Educación Superior Tecnológica (IEST).
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
                <div className="p-2 bg-[#A8DADC] text-[#1E2D3B] rounded-xl w-max">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg">Titulación Oficial</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Otorgamiento de Título a Nombre de la Nación como Auxiliar Técnico o Técnico según la ruta formativa completada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA a Admision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#A8DADC]/40 shadow-lg space-y-6">
            <h2 className="text-3xl font-extrabold text-[#1E2D3B]">
              ¿Listo para dar el siguiente paso en tu carrera?
            </h2>
            <p className="text-[#4A607A] text-sm sm:text-base max-w-2xl mx-auto">
              Revisa nuestras especialidades disponibles e inscríbete en el proceso de admisión vigente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/programas"
                className="px-6 py-3.5 rounded-2xl bg-[#A8DADC] text-[#1E2D3B] font-bold text-sm hover:bg-[#8ecae6] transition-colors shadow-md"
              >
                Ver Especialidades
              </Link>
              <Link
                href="/admision"
                className="px-6 py-3.5 rounded-2xl bg-[#1E2D3B] text-white font-bold text-sm hover:bg-[#4A607A] transition-colors shadow-md"
              >
                Postular a Admisión
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
