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
  Tag,
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Quote,
  Sparkles,
} from 'lucide-react';
import { PostCarousel } from '@/components/PostCarousel';
import { ScheduledPostGuard } from '@/components/ScheduledPostGuard';

// Generar rutas estáticas para Next.js (output: export) desde Sanity
export async function generateStaticParams() {
  try {
    const query = `*[_type == "noticia" && defined(slug.current)][].slug.current`;
    const sanitySlugs: string[] = await client.fetch(query);
    if (sanitySlugs && sanitySlugs.length > 0) {
      return sanitySlugs.map((slug) => ({ slug }));
    }
    return [{ slug: 'comunicado-institucional' }];
  } catch (err) {
    return [{ slug: 'comunicado-institucional' }];
  }
}

// Configuración de renderizado de texto enriquecido (PortableText)
const portableTextComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[#1E2D3B]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <u className="underline decoration-current underline-offset-4 decoration-2">{children}</u>
    ),
    'strike-through': ({ children }) => <del className="line-through text-slate-400">{children}</del>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200">
        {children}
      </code>
    ),
    alignLeft: ({ children }) => <span className="block text-left w-full">{children}</span>,
    alignCenter: ({ children }) => <span className="block text-center w-full">{children}</span>,
    alignRight: ({ children }) => <span className="block text-right w-full">{children}</span>,
    alignJustify: ({ children }) => <span className="block text-justify w-full">{children}</span>,
    textColor: ({ value, children }) => {
      const color = value?.customColor || value?.color;
      return <span style={color ? { color } : undefined}>{children}</span>;
    },
    textSize: ({ value, children }) => {
      const sizeClasses: Record<string, string> = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl font-bold',
        '3xl': 'text-3xl font-black',
      };
      return <span className={sizeClasses[value?.size] || 'text-base'}>{children}</span>;
    },
    link: ({ value, children }) => {
      const isExternal = value?.blank ?? true;
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[#6F8FA6] hover:text-[#1E2D3B] font-semibold underline decoration-[#A8DADC] underline-offset-2 transition-colors inline-flex items-center gap-1"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-black text-[#1E2D3B] mt-10 mb-5 tracking-tight border-b-2 border-[#A8DADC]/40 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2D3B] mt-8 mb-4 border-b border-slate-200 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-[#1E2D3B] mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl font-bold text-[#1E2D3B] mt-5 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base sm:text-lg font-bold text-[#1E2D3B] mt-4 mb-2">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm sm:text-base font-bold text-[#6F8FA6] mt-3 mb-1 uppercase tracking-wider">
        {children}
      </h6>
    ),
    lead: ({ children }) => (
      <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed mb-6 bg-slate-50 p-4 sm:p-5 rounded-2xl border-l-4 border-[#6F8FA6]">
        {children}
      </p>
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
      if (!value?.asset) return null;
      const percent = Number(value.sizePercent) || 100;
      const targetWidth = Math.max(120, Math.round(1200 * (percent / 100)));
      const imgUrl = urlForImage(value).width(targetWidth).url();

      return (
        <div
          className="my-8 mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-md clear-both"
          style={{ width: `${percent}%`, maxWidth: '100%' }}
        >
          <img
            src={imgUrl}
            alt={value.alt || 'Imagen de la publicación'}
            className="w-full h-auto object-cover"
          />
          {value.alt && (
            <p className="text-xs text-center text-slate-500 py-2 bg-slate-50 border-t border-slate-100 italic">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
    alignedImage: ({ value }) => {
      if (!value?.image?.asset) return null;
      const alignment = value.alignment || 'center';
      const percent = Number(value.sizePercent) || 100;
      const targetWidth = Math.max(120, Math.round(1200 * (percent / 100)));
      const imgUrl = urlForImage(value.image).width(targetWidth).url();

      if (alignment === 'left') {
        return (
          <figure
            className="my-6 md:float-left md:mr-6 md:mb-4 rounded-2xl overflow-hidden border border-slate-200 shadow-md"
            style={{ width: `${percent}%`, maxWidth: '100%' }}
          >
            <img src={imgUrl} alt={value.alt || ''} className="w-full h-auto object-cover" />
            {value.caption && (
              <figcaption className="text-xs text-center text-slate-500 py-2 px-3 bg-slate-50 border-t border-slate-100 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      if (alignment === 'right') {
        return (
          <figure
            className="my-6 md:float-right md:ml-6 md:mb-4 rounded-2xl overflow-hidden border border-slate-200 shadow-md"
            style={{ width: `${percent}%`, maxWidth: '100%' }}
          >
            <img src={imgUrl} alt={value.alt || ''} className="w-full h-auto object-cover" />
            {value.caption && (
              <figcaption className="text-xs text-center text-slate-500 py-2 px-3 bg-slate-50 border-t border-slate-100 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      if (alignment === 'full') {
        return (
          <figure className="my-10 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-lg clear-both">
            <img src={imgUrl} alt={value.alt || ''} className="w-full max-h-[550px] object-cover" />
            {value.caption && (
              <figcaption className="text-xs text-center text-slate-500 py-2.5 px-4 bg-slate-50 border-t border-slate-100 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      return (
        <figure
          className="my-8 mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-md clear-both"
          style={{ width: `${percent}%`, maxWidth: '100%' }}
        >
          <img src={imgUrl} alt={value.alt || ''} className="w-full h-auto object-cover" />
          {value.caption && (
            <figcaption className="text-xs text-center text-slate-500 py-2 px-3 bg-slate-50 border-t border-slate-100 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    carousel: ({ value }) => {
      return <PostCarousel title={value?.title} images={value?.images || []} />;
    },
    callout: ({ value }) => {
      const type = value?.type || 'info';
      const configs: Record<string, { bg: string; border: string; text: string; icon: React.ReactNode }> = {
        info: {
          bg: 'bg-sky-50/70',
          border: 'border-sky-300',
          text: 'text-sky-950',
          icon: <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />,
        },
        warning: {
          bg: 'bg-amber-50/80',
          border: 'border-amber-300',
          text: 'text-amber-950',
          icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
        },
        success: {
          bg: 'bg-emerald-50/80',
          border: 'border-emerald-300',
          text: 'text-emerald-950',
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />,
        },
        tip: {
          bg: 'bg-[#F0F7F9]',
          border: 'border-[#A8DADC]',
          text: 'text-[#1E2D3B]',
          icon: <Lightbulb className="w-5 h-5 text-[#6F8FA6] shrink-0 mt-0.5" />,
        },
        danger: {
          bg: 'bg-rose-50/80',
          border: 'border-rose-300',
          text: 'text-rose-950',
          icon: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />,
        },
      };

      const style = configs[type] || configs.info;

      return (
        <div className={`my-8 p-5 rounded-2xl border ${style.border} ${style.bg} ${style.text} shadow-sm clear-both`}>
          <div className="flex items-start space-x-3.5">
            {style.icon}
            <div className="space-y-1 w-full">
              {value?.title && (
                <h4 className="font-bold text-base leading-snug">
                  {value.title}
                </h4>
              )}
              <p className="text-sm leading-relaxed whitespace-pre-line font-normal">
                {value?.text}
              </p>
            </div>
          </div>
        </div>
      );
    },
    quoteBlock: ({ value }) => {
      return (
        <div className="my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1E2D3B] to-[#2A3F55] text-white shadow-xl relative overflow-hidden clear-both">
          <Quote className="w-16 h-16 text-[#A8DADC]/15 absolute -bottom-3 -right-3 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <p className="text-lg sm:text-xl font-serif italic text-slate-100 leading-relaxed">
              “{value?.quote}”
            </p>
            {(value?.author || value?.role) && (
              <div className="pt-2 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-300 gap-1">
                {value.author && <span className="font-bold text-[#A8DADC] text-sm">{value.author}</span>}
                {value.role && <span className="text-slate-400 font-light">{value.role}</span>}
              </div>
            )}
          </div>
        </div>
      );
    },
    table: ({ value }) => {
      const rows = value?.rows || [];
      if (rows.length === 0) return null;
      const headerRow = rows[0];
      const bodyRows = rows.slice(1);

      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm clear-both">
          <table className="w-full text-left border-collapse text-sm text-[#1E2D3B]">
            {headerRow && (
              <thead className="bg-[#1E2D3B] text-white uppercase text-xs tracking-wider">
                <tr>
                  {headerRow.cells?.map((cell: string, idx: number) => (
                    <th key={idx} className="py-3.5 px-4 font-bold border-b border-[#1E2D3B]">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-slate-200">
              {bodyRows.map((row: any, rIdx: number) => (
                <tr
                  key={row._key || rIdx}
                  className={rIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-[#F0F7F9]/40 hover:bg-slate-50'}
                >
                  {row.cells?.map((cell: string, cIdx: number) => (
                    <td key={cIdx} className="py-3 px-4 font-normal">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
      showCoverImage,
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
        {/* Banner Superior con Gradiente (Siempre fijo y visible) */}
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

        {/* Cuerpo del Artículo protegido por ScheduledPostGuard si la publicación es futura */}
        <ScheduledPostGuard publishedAt={post.publishedAt}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
            <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#A8DADC]/40 shadow-xl space-y-8">
              {/* Imagen de Portada al inicio del artículo (Opcional según showCoverImage) */}
              {imageUrl && post.showCoverImage !== false && (
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full max-h-[500px] object-cover"
                  />
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
        </ScheduledPostGuard>
      </main>

      <Footer />
    </div>
  );
}
