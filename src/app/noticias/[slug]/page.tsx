import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Newspaper,
  GraduationCap,
  ShieldCheck,
  Tag
} from 'lucide-react';

// Generar rutas estáticas para Next.js (output: export) desde Sanity
export async function generateStaticParams() {
  try {
    const query = `*[_type == "noticia" && defined(slug.current)][].slug.current`;
    const sanitySlugs: string[] = await client.fetch(query);
    return (sanitySlugs || []).map((slug) => ({ slug }));
  } catch (err) {
    return [];
  }
}

// Configuración de renderizado de texto enriquecido (PortableText)
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2D3B] mt-8 mb-4 border-b border-slate-100 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-[#1E2D3B] mt-6 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#A8DADC] bg-[#F0F7F9] p-4 sm:p-6 rounded-r-2xl my-6 text-[#1E2D3B] italic font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 text-base sm:text-lg pl-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700 text-base sm:text-lg pl-4">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <img
            src={urlForImage(value).width(1200).url()}
            alt={value.alt || 'Imagen de la publicación'}
            className="w-full h-auto object-cover"
          />
          {value.alt && (
            <p className="text-xs text-center text-slate-500 py-2 bg-slate-50 border-t border-slate-100">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NoticiaDetallePage({ params }: PageProps) {
  const { slug } = await params;

  let post: any = null;

  try {
    const query = `*[_type == "noticia" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      featured,
      mainImage,
      excerpt,
      body
    }`;
    post = await client.fetch(query, { slug });
  } catch (error) {
    console.warn('Error consultando Sanity para el slug:', slug, error);
  }

  if (!post) {
    notFound();
  }

  const categoryMeta: Record<string, { label: string; color: string }> = {
    comunicados: { label: 'Comunicado Oficial', color: 'bg-[#1E2D3B] text-[#A8DADC]' },
    academico: { label: 'Talleres y Académico', color: 'bg-[#6F8FA6]/20 text-[#1E2D3B]' },
    institucional: { label: 'Eventos y Comunidad', color: 'bg-[#F8C8C8]/60 text-[#1E2D3B]' },
    empleo: { label: 'Convenios y Empleo', color: 'bg-emerald-100 text-emerald-800' },
  };

  const title = post.title || 'Publicación Oficial';
  const categoryInfo = categoryMeta[post.category] || { label: 'Comunicado Oficial', color: 'bg-[#1E2D3B] text-[#A8DADC]' };
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('es-PE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    : 'Reciente';

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).width(1200).url() : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F7F9]">
      <Navbar />

      <main className="flex-grow pb-24">
        {/* Banner Superior */}
        <section className="bg-gradient-to-r from-[#1E2D3B] via-[#2A3F55] to-[#1E2D3B] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#A8DADC]/30">
          <div className="max-w-4xl mx-auto space-y-6">
            <Link
              href="/noticias"
              className="inline-flex items-center space-x-2 text-[#A8DADC] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Noticias y Novedades</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide ${categoryInfo.color}`}>
                {categoryInfo.label}
              </span>
              <span className="flex items-center space-x-1 text-slate-300 text-xs">
                <Calendar className="w-3.5 h-3.5 text-[#A8DADC]" />
                <span>{formattedDate}</span>
              </span>
              <span className="flex items-center space-x-1 text-slate-300 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#A8DADC]" />
                <span>Lectura estimada: 3 min</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {title}
            </h1>

            {post.excerpt && (
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed border-l-2 border-[#A8DADC] pl-4">
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* Cuerpo del Artículo */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#A8DADC]/40 shadow-xl space-y-8">
            {/* Imagen Principal */}
            {imageUrl ? (
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full max-h-[500px] object-cover"
                />
              </div>
            ) : (
              <div className="h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-[#F0F7F9] to-[#A8DADC]/30 border border-[#A8DADC]/40 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#1E2D3B]">
                  <Newspaper className="w-8 h-8 text-[#1E2D3B]" />
                </div>
                <p className="text-xs font-bold text-[#4A607A] uppercase tracking-wider">
                  Publicación Oficial CETPRO 01
                </p>
              </div>
            )}

            {/* Contenido en PortableText */}
            <div className="prose prose-slate max-w-none">
              {post.body ? (
                <PortableText value={post.body} components={portableTextComponents} />
              ) : (
                <p className="text-slate-500 italic">No hay contenido adicional para mostrar en esta publicación.</p>
              )}
            </div>

            {/* Pie de artículo */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#1E2D3B]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Publicación Oficial Verificada - CETPRO 01 Abancay</span>
              </div>

              <div className="flex items-center space-x-3">
                <Link
                  href="/noticias"
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1E2D3B] text-xs font-bold transition-all flex items-center space-x-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Más Noticias</span>
                </Link>


              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
