import { defineField, defineType } from 'sanity';

export const noticiaType = defineType({
  name: 'noticia',
  title: 'Noticias y Comunicados',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Noticia o Comunicado',
      type: 'string',
      validation: (Rule) => Rule.required().error('El título es obligatorio'),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('El slug es obligatorio para los enlaces'),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Comunicados Oficiales', value: 'comunicados' },
          { title: 'Talleres y Académico', value: 'academico' },
          { title: 'Eventos y Comunidad', value: 'institucional' },
          { title: 'Convenios y Empleo', value: 'empleo' },
        ],
      },
      initialValue: 'comunicados',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: '¿Marcar como Noticia Destacada?',
      type: 'boolean',
      description: 'Aparecerá en la parte superior con un diseño destacado',
      initialValue: false,
    }),
    defineField({
      name: 'showCoverImage',
      title: '¿Mostrar Imagen de Portada en el Artículo?',
      type: 'boolean',
      description: 'Activa o desactiva la imagen de portada al inicio de la tarjeta del artículo. La imagen seguirá utilizándose como miniatura en el catálogo de noticias.',
      initialValue: true,
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto descriptivo (Alt)',
          description: 'Importante para accesibilidad y SEO',
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen Breve',
      type: 'text',
      rows: 3,
      description: 'Resumen que se muestra en las tarjetas de la sección Noticias',
      validation: (Rule) => Rule.max(300).warning('Procura que el resumen no exceda los 300 caracteres'),
    }),
    defineField({
      name: 'body',
      title: 'Contenido Completo de la Publicación',
      type: 'array',
      description: 'Crea tu publicación con textos enriquecidos, enlaces, llamadas, citas, tablas, imágenes alineadas y carruseles.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Párrafo Normal', value: 'normal' },
            { title: 'Encabezado 1 (H1)', value: 'h1' },
            { title: 'Encabezado 2 (H2)', value: 'h2' },
            { title: 'Encabezado 3 (H3)', value: 'h3' },
            { title: 'Encabezado 4 (H4)', value: 'h4' },
            { title: 'Encabezado 5 (H5)', value: 'h5' },
            { title: 'Encabezado 6 (H6)', value: 'h6' },
            { title: 'Texto Introductorio (Lead)', value: 'lead' },
            { title: 'Cita en Bloque (Blockquote)', value: 'blockquote' },
          ],
          lists: [
            { title: 'Lista con Viñetas', value: 'bullet' },
            { title: 'Lista Numerada', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita (Strong)', value: 'strong' },
              { title: 'Cursiva (Emphasis)', value: 'em' },
              { title: 'Subrayado (Underline)', value: 'underline' },
              { title: 'Tachado (Strike)', value: 'strike-through' },
              { title: 'Código en Línea (Code)', value: 'code' },
              { title: '⬅️ Alinear Izquierda', value: 'alignLeft' },
              { title: '↔️ Centrar Texto', value: 'alignCenter' },
              { title: '➡️ Alinear Derecha', value: 'alignRight' },
              { title: '🟰 Justificar Texto', value: 'alignJustify' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Enlace Web (URL)',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Dirección URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                        allowRelative: true,
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Abrir en nueva pestaña',
                    initialValue: true,
                  },
                ],
              },
              {
                name: 'textColor',
                type: 'object',
                title: '🎨 Color del Texto',
                fields: [
                  {
                    name: 'color',
                    type: 'string',
                    title: 'Paleta Institucional y Alertas',
                    options: {
                      list: [
                        { title: '🟦 Azul Oscuro Institucional (#1E2D3B)', value: '#1E2D3B' },
                        { title: '💠 Celeste Institucional (#A8DADC)', value: '#A8DADC' },
                        { title: '🔷 Azul Acero (#6F8FA6)', value: '#6F8FA6' },
                        { title: '🔴 Rojo Coral / Alerta (#E63946)', value: '#E63946' },
                        { title: '🟢 Verde Éxito (#10B981)', value: '#10B981' },
                        { title: '🟡 Ámbar Atención (#F59E0B)', value: '#F59E0B' },
                        { title: '🟣 Morado Destacado (#8B5CF6)', value: '#8B5CF6' },
                        { title: '⚫ Negro Puro (#000000)', value: '#000000' },
                        { title: '⚪ Gris Neutro (#64748B)', value: '#64748B' },
                      ],
                    },
                  },
                  {
                    name: 'customColor',
                    type: 'string',
                    title: 'O Color Personalizado (Código Hexadecimal)',
                    placeholder: 'Ej: #0077B6',
                  },
                ],
              },
              {
                name: 'textSize',
                type: 'object',
                title: '🔤 Tamaño del Texto',
                fields: [
                  {
                    name: 'size',
                    type: 'string',
                    title: 'Tamaño de Fuente',
                    options: {
                      list: [
                        { title: 'Muy pequeño (12px)', value: 'xs' },
                        { title: 'Pequeño (14px)', value: 'sm' },
                        { title: 'Normal (16px)', value: 'base' },
                        { title: 'Mediano (18px)', value: 'lg' },
                        { title: 'Grande (20px)', value: 'xl' },
                        { title: 'Muy grande (24px)', value: '2xl' },
                        { title: 'Titular Destacado (30px)', value: '3xl' },
                      ],
                    },
                    initialValue: 'base',
                  },
                ],
              },
            ],
          },
        },
        { type: 'alignedImage' },
        { type: 'carousel' },
        { type: 'callout' },
        { type: 'quoteBlock' },
        { type: 'table' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Descripción de la imagen (Alt)',
            },
            {
              name: 'sizePercent',
              title: 'Tamaño de la Imagen (% del ancho)',
              type: 'number',
              options: {
                list: [
                  { title: '10% (Miniatura)', value: 10 },
                  { title: '20%', value: 20 },
                  { title: '30%', value: 30 },
                  { title: '40%', value: 40 },
                  { title: '50% (Mitad de ancho)', value: 50 },
                  { title: '60%', value: 60 },
                  { title: '70%', value: 70 },
                  { title: '80%', value: 80 },
                  { title: '90%', value: 90 },
                  { title: '100% (Ancho completo)', value: 100 },
                ],
              },
              initialValue: 100,
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
});
