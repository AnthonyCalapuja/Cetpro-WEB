'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PROGRAMS, PROGRAM_COMPARISON, Program } from '@/data/programsData';
import { 
  Sparkles, 
  Utensils, 
  Monitor, 
  Scissors, 
  Cake, 
  Shirt, 
  Hotel, 
  Layers, 
  Ruler, 
  Palette, 
  BookOpen, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Filter
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

export default function ProgramasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Estética y Cuidado Personal', 'Gastronomía', 'Tecnología', 'Textil y Confección', 'Hostelería', 'Artes y Emprendimiento'];

  const filteredPrograms = selectedCategory === 'Todos' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F7F9]">
      <Navbar />

      <main className="flex-grow space-y-16 pb-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-r from-[#1E2D3B] via-[#4A607A] to-[#6F8FA6] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC] bg-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
              Especialidades Técnicas
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Programas de Estudio
            </h1>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              10 carreras técnicas diseñadas para la rápida inserción laboral y la creación de empresas rentables.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none">
            <div className="p-2 text-[#6F8FA6] font-bold text-xs uppercase flex items-center space-x-1 shrink-0">
              <Filter className="w-4 h-4" />
              <span>Filtrar:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#1E2D3B] text-[#A8DADC] shadow-md'
                    : 'bg-white text-[#4A607A] hover:bg-[#A8DADC]/30 hover:text-[#1E2D3B] border border-[#A8DADC]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Programs Listing */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#A8DADC]/50 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover-effect flex flex-col sm:flex-row group"
              >
                {/* Image Side */}
                <div className="relative sm:w-2/5 h-56 sm:h-auto overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] uppercase font-extrabold bg-[#1E2D3B] text-white shadow">
                    Ciclo {program.cycle}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#6F8FA6]">
                      <div className="p-2 bg-[#F0F7F9] rounded-xl border border-[#A8DADC]/40">
                        {iconMap[program.iconName] || <BookOpen className="w-5 h-5" />}
                      </div>
                      <span>{program.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E2D3B] group-hover:text-[#6F8FA6] transition-colors leading-snug">
                      {program.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4A607A] leading-relaxed">
                      {program.description}
                    </p>

                    {/* Competencias Clave */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-[#1E2D3B] uppercase tracking-wider block">
                        Competencias Clave:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {program.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-[#F0F7F9] text-[#1E2D3B] text-[10px] font-semibold rounded-md border border-[#A8DADC]/30"
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer details */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="text-[11px] font-semibold text-[#6F8FA6] space-x-2">
                      <span>⏱ {program.duration}</span>
                      <span>•</span>
                      <span>🎓 {program.credits}</span>
                    </div>

                    <Link
                      href="/admision"
                      className="px-3.5 py-2 rounded-xl bg-[#A8DADC] hover:bg-[#8ecae6] text-[#1E2D3B] font-bold text-xs transition-colors flex items-center space-x-1 shrink-0 shadow-sm"
                    >
                      <span>Inscribirme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabla Comparativa Oficial: Auxiliar Técnico vs Técnico */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#A8DADC]/60 shadow-xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#1E2D3B] bg-[#F8C8C8] px-3.5 py-1.5 rounded-full inline-block">
                Estructura Modular Oficial
              </span>
              <h2 className="text-3xl font-extrabold text-[#1E2D3B]">
                Comparación de Niveles de Titulación
              </h2>
              <p className="text-[#4A607A] text-sm sm:text-base">
                Conoce la diferencia entre el Ciclo Auxiliar Técnico (Ruta 1) y el Ciclo Técnico (Ruta 2).
              </p>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#1E2D3B] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold w-1/3">Característica</th>
                    <th className="py-4 px-6 font-bold w-1/3 text-[#A8DADC]">
                      Ciclo Auxiliar Técnico (Ruta 1)
                    </th>
                    <th className="py-4 px-6 font-bold w-1/3 text-[#F8C8C8]">
                      Ciclo Técnico (Ruta 2)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {PROGRAM_COMPARISON.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F0F7F9]/60'}
                    >
                      <td className="py-4 px-6 font-bold text-[#1E2D3B]">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-[#4A607A] font-medium leading-relaxed">
                        {row.auxiliar}
                      </td>
                      <td className="py-4 px-6 text-[#1E2D3B] font-semibold leading-relaxed">
                        {row.tecnico}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#F0F7F9] rounded-2xl border border-[#A8DADC]/40 text-xs text-[#4A607A] flex items-start space-x-3">
              <HelpCircle className="w-5 h-5 text-[#6F8FA6] shrink-0 mt-0.5" />
              <p>
                <strong>Nota Institucional:</strong> Ambas rutas otorgan Certificación Modular progresiva por cada módulo formativo aprobado, acumulable para la titulación oficial a Nombre de la Nación otorgada por el Ministerio de Educación.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
