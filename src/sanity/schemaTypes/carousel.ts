import { defineField, defineType } from 'sanity';

export const carouselType = defineType({
  name: 'carousel',
  title: 'Carrusel / Galería de Imágenes',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Galería (Opcional)',
      type: 'string',
      placeholder: 'Ej: Galería fotográfica del taller demostrativo',
    }),
    defineField({
      name: 'images',
      title: 'Fotografías del Carrusel',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'slideImage',
          title: 'Foto',
          fields: [
            defineField({
              name: 'image',
              title: 'Archivo de Imagen',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required().error('La foto es obligatoria'),
            }),
            defineField({
              name: 'alt',
              title: 'Texto Alternativo (Alt)',
              type: 'string',
              placeholder: 'Descripción de la foto para accesibilidad',
            }),
            defineField({
              name: 'caption',
              title: 'Pie de Foto / Leyenda (Opcional)',
              type: 'string',
              placeholder: 'Ej: Presentación de proyectos finales',
            }),
          ],
          preview: {
            select: {
              media: 'image',
              title: 'caption',
              subtitle: 'alt',
            },
            prepare({ media, title, subtitle }) {
              return {
                title: title || 'Fotografía de la galería',
                subtitle: subtitle || 'Sin texto alternativo',
                media,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(2).error('El carrusel debe contener al menos 2 imágenes'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({ title, images }) {
      const count = Array.isArray(images) ? images.length : 0;
      return {
        title: title || 'Carrusel de Fotografías',
        subtitle: `${count} imagen${count === 1 ? '' : 'es'} en la galería`,
      };
    },
  },
});
