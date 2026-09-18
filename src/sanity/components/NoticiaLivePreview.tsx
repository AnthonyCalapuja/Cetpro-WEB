'use client';

import React, { useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PostCarousel } from '@/components/PostCarousel';
import {
  Calendar,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Quote,
  Eye,
  Layers,
} from 'lucide-react';

interface NoticiaLivePreviewProps {
  document: {
    displayed: any;
    draft?: any;
    published?: any;
  };
}

// Configuración de componentes de PortableText optimizados para la vista previa
const previewComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[#1E2D3B]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <u className="underline decoration-current underline-offset-4 decoration-2">{children}</u>
    ),
    'strike-through': ({ children }) => <del className="line-through text-slate-400">{children}</del>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-200">
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
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6F8FA6] hover:text-[#1E2D3B] font-semibold underline decoration-[#A8DADC] underline-offset-2"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl sm:text-3xl font-black text-[#1E2D3B] mt-8 mb-4 border-b-2 border-[#A8DADC]/40 pb-2">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E2D3B] mt-6 mb-3 border-b border-slate-200 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg sm:text-xl font-bold text-[#1E2D3B] mt-5 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base sm:text-lg font-bold text-[#1E2D3B] mt-4 mb-2">
        {children}
      </h4>
    ),
    lead: ({ children }) => (
      <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-5 bg-slate-50 p-4 rounded-xl border-l-4 border-[#6F8FA6]">
        {children}
      </p>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#A8DADC] bg-[#F0F7F9] p-4 rounded-r-xl my-4 text-[#1E2D3B] italic font-medium text-sm sm:text-base">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-1.5 mb-5 text-slate-700 text-sm sm:text-base pl-3">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1.5 mb-5 text-slate-700 text-sm sm:text-base pl-3">
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
          className="my-6 mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-md clear-both"
          style={{ width: `${percent}%`, maxWidth: '100%' }}
        >
          <img src={imgUrl} alt={value.alt || ''} className="w-full h-auto object-cover" />
          {value.alt && (
            <p className="text-xs text-center text-slate-500 py-1.5 bg-slate-50 border-t border-slate-100 italic">
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
            className="my-4 sm:float-left sm:mr-6 sm:mb-4 rounded-2xl overflow-hidden border border-slate-200 shadow-md"
            style={{ width: `${percent}%`, maxWidth: '100%' }}
          >
            <img src={imgUrl} alt={value.alt || ''} className="w-full h-auto object-cover" />
            {value.caption && (
              <figcaption className="text-xs text-center text-slate-500 py-1.5 px-3 bg-slate-50 border-t border-slate-100 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      if (alignment === 'right') {
        return (
          <figure
            className="my-4 sm:float-right sm:ml-6 sm:mb-4 rounded-2xl overflow-hidden border border-slate-200 shadow-md"
            style={{ width: `${percent}%`, maxWidth: '100%' }}
          >
            <img src={imgUrl} alt={value.alt || ''} className="w-full h-auto object-cover" />
            {value.caption && (
              <figcaption className="text-xs text-center text-slate-500 py-1.5 px-3 bg-slate-50 border-t border-slate-100 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      if (alignment === 'full') {
        return (
          <figure className="my-8 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg clear-both">
            <img src={imgUrl} alt={value.alt || ''} className="w-full max-h-[480px] object-cover" />
            {value.caption && (
              <figcaption className="text-xs text-center text-slate-500 py-2 px-3 bg-slate-50 border-t border-slate-100 italic">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      return (
        <figure
          className="my-6 mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-md clear-both"
          style={{ width: `${percent}%`, maxWidth: '100%' }}
        >
          <img src={imgUrl} alt={value.alt || ''} className="w-full h-auto object-cover" />
          {value.caption && (
            <figcaption className="text-xs text-center text-slate-500 py-1.5 px-3 bg-slate-50 border-t border-slate-100 italic">
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
          bg: 'bg-sky-50',
          border: 'border-sky-300',
          text: 'text-sky-950',
          icon: <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />,
        },
        warning: {
          bg: 'bg-amber-50',
          border: 'border-amber-300',
          text: 'text-amber-950',
          icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
        },
        success: {
          bg: 'bg-emerald-50',
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
          bg: 'bg-rose-50',
          border: 'border-rose-300',
          text: 'text-rose-950',
          icon: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />,
        },
      };

      const style = configs[type] || configs.info;

      return (
        <div className={`my-6 p-4 rounded-xl border ${style.border} ${style.bg} ${style.text} shadow-sm clear-both`}>
          <div className="flex items-start space-x-3">
            {style.icon}
            <div className="space-y-1 w-full text-sm">
              {value?.title && <h4 className="font-bold">{value.title}</h4>}
              <p className="whitespace-pre-line leading-relaxed font-normal">{value?.text}</p>
            </div>
          </div>
        </div>
      );
    },
    quoteBlock: ({ value }) => {
      return (
        <div className="my-6 p-6 rounded-2xl bg-[#1E2D3B] text-white shadow-lg relative overflow-hidden clear-both">
          <Quote className="w-12 h-12 text-[#A8DADC]/15 absolute -bottom-2 -right-2 pointer-events-none" />
          <p className="text-base sm:text-lg font-serif italic text-slate-100 mb-3">
            “{value?.quote}”
          </p>
          {(value?.author || value?.role) && (
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              {value.author && <span className="font-bold text-[#A8DADC]">{value.author}</span>}
              {value.role && <span className="text-slate-400">{value.role}</span>}
            </div>
          )}
        </div>
      );
    },
    table: ({ value }) => {
      const rows = value?.rows || [];
      if (rows.length === 0) return null;
      const headerRow = rows[0];
      const bodyRows = rows.slice(1);

      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-sm clear-both">
          <table className="w-full text-left border-collapse text-xs sm:text-sm text-[#1E2D3B]">
            {headerRow && (
              <thead className="bg-[#1E2D3B] text-white uppercase text-[11px] tracking-wider">
                <tr>
                  {headerRow.cells?.map((cell: string, idx: number) => (
                    <th key={idx} className="py-2.5 px-3.5 font-bold border-b border-[#1E2D3B]">
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
                    <td key={cIdx} className="py-2 px-3.5 font-normal">
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

export const NoticiaLivePreview: React.FC<NoticiaLivePreviewProps> = ({ document }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const post = document.displayed || {};

  const title = post.title || 'Título de la Noticia (Sin título aún)';
  const category = post.category || 'comunicados';
  const showCoverImage = post.showCoverImage !== false;
  const slug = post.slug?.current;
  const publishedAt = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Fecha actual';

  const categoryMeta: Record<string, { label: string; color: string }> = {
    comunicados: { label: 'Comunicado Oficial', color: 'bg-[#1E2D3B] text-[#A8DADC]' },
    academico: { label: 'Talleres y Académico', color: 'bg-[#6F8FA6]/20 text-[#1E2D3B]' },
    institucional: { label: 'Eventos y Comunidad', color: 'bg-[#F8C8C8]/60 text-[#1E2D3B]' },
    empleo: { label: 'Convenios y Empleo', color: 'bg-emerald-100 text-emerald-800' },
  };

  const categoryInfo = categoryMeta[category] || categoryMeta.comunicados;
  const coverUrl = post.mainImage?.asset ? urlForImage(post.mainImage).width(1200).url() : null;

  const deviceWidths = {
    desktop: 'w-full max-w-4xl',
    tablet: 'w-[768px]',
    mobile: 'w-[390px]',
  };

  return (
    <div className="min-h-full bg-slate-900/10 flex flex-col items-center">
      {/* Barra Superior de Control de Vista Previa */}
      <div className="sticky top-0 z-30 w-full bg-[#1E2D3B] text-white px-4 py-2.5 shadow-md flex items-center justify-between gap-3 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4 text-[#A8DADC]" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200 hidden sm:inline">
            Vista Previa en Vivo
          </span>
          <span className="flex items-center space-x-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Tiempo Real</span>
          </span>
          <span className="hidden lg:inline-flex items-center space-x-1 text-[11px] text-slate-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
            <Layers className="w-3 h-3 text-[#A8DADC]" />
            <span>Portada: {showCoverImage ? 'Visible' : 'Oculta'}</span>
          </span>
        </div>

        {/* Selector de Dispositivos */}
        <div className="flex items-center space-x-1 bg-white/10 p-1 rounded-xl">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-lg text-xs flex items-center space-x-1 transition-all ${
              device === 'desktop' ? 'bg-[#A8DADC] text-[#1E2D3B] font-bold shadow' : 'text-slate-300 hover:text-white'
            }`}
            title="Vista Escritorio (100%)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Escritorio</span>
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded-lg text-xs flex items-center space-x-1 transition-all ${
              device === 'tablet' ? 'bg-[#A8DADC] text-[#1E2D3B] font-bold shadow' : 'text-slate-300 hover:text-white'
            }`}
            title="Vista Tablet (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-lg text-xs flex items-center space-x-1 transition-all ${
              device === 'mobile' ? 'bg-[#A8DADC] text-[#1E2D3B] font-bold shadow' : 'text-slate-300 hover:text-white'
            }`}
            title="Vista Móvil (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Móvil</span>
          </button>
        </div>

        {/* Enlace a la Web */}
        {slug ? (
          <a
            href={`/noticias/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-xs text-[#A8DADC] hover:text-white bg-white/10 px-2.5 py-1 rounded-lg transition-colors"
          >
            <span>Ver en Web</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[11px] text-slate-400 italic">Asigna un slug para ver en web</span>
        )}
      </div>

      {/* Contenedor del Artículo con Dispositivo Seleccionado */}
      <div className="w-full flex-grow p-4 sm:p-6 flex justify-center overflow-y-auto">
        <div
          className={`${deviceWidths[device]} transition-all duration-300 bg-[#F0F7F9] rounded-3xl overflow-hidden shadow-2xl border border-slate-300 flex flex-col`}
        >
          {/* Header Banner Superior (Siempre visible) */}
          <div className="bg-gradient-to-r from-[#1E2D3B] via-[#2A3F55] to-[#1E2D3B] text-white p-6 sm:p-8 border-b border-[#A8DADC]/30">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide ${categoryInfo.color}`}>
                  {categoryInfo.label}
                </span>
                <span className="flex items-center space-x-1 text-slate-300 text-xs">
                  <Calendar className="w-3 h-3 text-[#A8DADC]" />
                  <span>{publishedAt}</span>
                </span>
                {post.featured && (
                  <span className="flex items-center space-x-1 text-amber-300 text-xs font-semibold bg-amber-950/40 px-2 py-0.5 rounded-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Noticia Destacada</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                {title}
              </h1>

              {post.excerpt && (
                <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed border-l-2 border-[#A8DADC] pl-3 italic">
                  {post.excerpt}
                </p>
              )}
            </div>
          </div>

          {/* Cuerpo del Artículo */}
          <div className="p-6 sm:p-10 bg-white flex-grow space-y-6">
            {/* Imagen Principal de Portada al inicio de la tarjeta (Opcional según showCoverImage) */}
            {coverUrl && showCoverImage && (
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md mb-6">
                <img src={coverUrl} alt={title} className="w-full max-h-[420px] object-cover" />
              </div>
            )}

            {/* Contenido en Bloques de PortableText */}
            <div className="prose prose-slate max-w-none clear-both">
              {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
                <PortableText value={post.body} components={previewComponents} />
              ) : (
                <div className="py-12 text-center text-slate-400 italic bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p>Comienza a escribir contenido en el editor para previsualizarlo aquí en vivo.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
