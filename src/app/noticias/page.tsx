'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import {
  Newspaper,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Bell,
  Send,
  Tag,
  GraduationCap,
  Flame,
  Layers,
  Sparkles,
  Users,
  ShieldCheck,
  BookOpen,
  Loader2,
  ExternalLink
} from 'lucide-react';

interface NoticiaItem {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  imageUrl: string | null;
  featured?: boolean;
}

const CATEGORY_META: Record<string, { label: string; color: string; tag: string }> = {
  comunicados: { label: 'Comunicado Oficial', color: 'bg-[#1E2D3B] text-[#A8DADC]', tag: 'Admisión & Oficial' },
  academico: { label: 'Talleres y Académico', color: 'bg-[#6F8FA6]/20 text-[#1E2D3B]', tag: 'Académico' },
  institucional: { label: 'Eventos y Comunidad', color: 'bg-[#F8C8C8]/60 text-[#1E2D3B]', tag: 'Comunidad' },
  empleo: { label: 'Convenios y Empleo', color: 'bg-emerald-100 text-emerald-800', tag: 'Inserción Laboral' },
};

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [news, setNews] = useState<NoticiaItem[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'todos', label: 'Todas las Novedades' },
    { id: 'comunicados', label: 'Comunicados Oficiales' },
    { id: 'academico', label: 'Talleres y Académico' },
    { id: 'institucional', label: 'Eventos y Comunidad' },
    { id: 'empleo', label: 'Convenios y Empleo' },
  ];

  useEffect(() => {
    async function loadSanityNews() {
      try {
        setLoading(true);
        const query = `*[_type == "noticia"] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          category,
          publishedAt,
          featured,
          mainImage,
          excerpt
        }`;
        const items = await client.fetch(query);
        if (items && Array.isArray(items)) {
          const mapped: NoticiaItem[] = items.map((doc: any, index: number) => {
            const meta = CATEGORY_META[doc.category] || {
              label: 'Comunicado Oficial',
              color: 'bg-[#1E2D3B] text-[#A8DADC]',
              tag: 'Noticia Oficial',
            };
            const formattedDate = doc.publishedAt
              ? new Date(doc.publishedAt).toLocaleDateString('es-PE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
              : 'Reciente';

            return {
              id: doc._id || `noticia-${index}`,
              slug: doc.slug || doc._id,
              category: doc.category || 'comunicados',
              categoryLabel: meta.label,
              categoryColor: meta.color,
              title: doc.title || 'Publicación sin título',
              excerpt: doc.excerpt || 'Haz clic para leer todos los detalles de esta publicación institucional.',
              date: formattedDate,
              readTime: '3 min de lectura',
              tag: meta.tag,
              imageUrl: doc.mainImage ? urlForImage(doc.mainImage).width(800).url() : null,
              featured: doc.featured || false,
            };
          });
          setNews(mapped);
        }
      } catch (err) {
        console.warn('Aviso: Error cargando publicaciones desde Sanity:', err);
      } finally {
        setLoading(false);
      }
    }
    loadSanityNews();
  }, []);

  const filteredNews = selectedCategory === 'todos'
    ? news
    : news.filter((item) => item.category === selectedCategory);

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
            <span className="text-xs uppercase font-bold tracking-widest text-[#A8DADC] bg-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 backdrop-blur-md">
              <Newspaper className="w-3.5 h-3.5" />
              Portal Informativo Oficial
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Noticias y Novedades
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed">
              El canal oficial de difusión de actividades, logros estudiantiles, talleres formativos y comunicados institucionales del <span className="font-semibold text-white">CETPRO 01 Abancay</span>.
            </p>
          </div>
        </section>

        {/* Feed & Filter Tabs Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-[#6F8FA6] font-bold text-xs uppercase tracking-wider bg-white px-3 py-1 rounded-lg border border-[#A8DADC]/40">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Publicaciones Institucionales</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2D3B]">
                Artículos y Comunicados Recientes
              </h2>
              <p className="text-[#4A607A] text-sm max-w-xl">
                Infórmate sobre las últimas novedades de nuestras especialidades técnicas y eventos formativos.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${selectedCategory === cat.id
                    ? 'bg-[#1E2D3B] text-white shadow-md'
                    : 'bg-white text-[#4A607A] hover:bg-[#A8DADC]/30 hover:text-[#1E2D3B] border border-slate-200'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-4">
              <Loader2 className="w-10 h-10 text-[#4A607A] animate-spin" />
              <p className="text-sm font-medium text-[#4A607A]">Cargando publicaciones oficiales...</p>
            </div>
          ) : filteredNews.length > 0 ? (
            /* Grid of News Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/noticias/${item.slug}`}
                  className="bg-white rounded-3xl p-6 border border-[#A8DADC]/40 shadow-sm hover:shadow-xl hover:border-[#6F8FA6] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group block hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Header badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide ${item.categoryColor}`}>
                        {item.categoryLabel}
                      </span>
                      {item.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          Destacado
                        </span>
                      )}
                    </div>

                    {/* Image or Banner preview */}
                    {item.imageUrl ? (
                      <div className="h-44 rounded-2xl overflow-hidden relative border border-[#A8DADC]/30">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-36 rounded-2xl bg-gradient-to-br from-[#F0F7F9] to-[#A8DADC]/30 border border-[#A8DADC]/30 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group-hover:border-[#6F8FA6] transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1E2D3B] mb-2 group-hover:scale-110 transition-transform">
                          <Newspaper className="w-6 h-6 text-[#1E2D3B]" />
                        </div>
                        <span className="text-[11px] font-bold text-[#4A607A] flex items-center gap-1">
                          <Tag className="w-3 h-3 text-[#6F8FA6]" />
                          {item.tag}
                        </span>
                      </div>
                    )}

                    {/* Title & Excerpt */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#1E2D3B] leading-snug group-hover:text-[#4A607A] transition-colors line-clamp-2">
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
                    <span className="text-[11px] text-[#1E2D3B] group-hover:text-[#4A607A] font-bold flex items-center gap-1">
                      <span>Leer completo</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl p-12 text-center border border-[#A8DADC]/40 shadow-sm space-y-4 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#F0F7F9] text-[#1E2D3B] flex items-center justify-center mx-auto border border-[#A8DADC]/40">
                <Newspaper className="w-8 h-8 text-[#4A607A]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#1E2D3B]">
                  No hay publicaciones en esta categoría
                </h3>
                <p className="text-sm text-[#4A607A]">
                  Actualmente no se han encontrado publicaciones activas. Las nuevas notas y comunicados oficiales aparecerán aquí en cuanto sean publicadas.
                </p>
              </div>
            </div>
          )}
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
                  Puedes postular directamente a nuestros programas técnicos o escribirnos para resolver cualquier consulta.
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
