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
      title: 'Contenido Completo',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Descripción de la imagen',
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
