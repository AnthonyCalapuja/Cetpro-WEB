import { defineField, defineType } from 'sanity';

export const alignedImageType = defineType({
  name: 'alignedImage',
  title: 'Imagen con Alineación y Tamaño',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Archivo de Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Debes seleccionar una imagen'),
    }),
    defineField({
      name: 'sizePercent',
      title: 'Tamaño de la Imagen (% del ancho)',
      description: 'Elige el porcentaje de reducción para que la imagen se adapte adecuadamente al artículo.',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alignment',
      title: 'Alineación en la Publicación',
      type: 'string',
      options: {
        list: [
          { title: 'Centrada', value: 'center' },
          { title: 'Alineada a la Izquierda (Texto alrededor)', value: 'left' },
          { title: 'Alineada a la Derecha (Texto alrededor)', value: 'right' },
          { title: 'Ancho Completo Expandido (Banner)', value: 'full' },
        ],
        layout: 'radio',
      },
      initialValue: 'center',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texto Alternativo (Alt)',
      type: 'string',
      description: 'Describe brevemente qué se observa en la imagen (para accesibilidad y SEO).',
      validation: (Rule) => Rule.required().warning('Se recomienda incluir un texto descriptivo para SEO'),
    }),
    defineField({
      name: 'caption',
      title: 'Pie de Foto / Leyenda (Opcional)',
      type: 'string',
      placeholder: 'Ej: Estudiantes participando en la feria técnica regional',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'caption',
      subtitle: 'alignment',
      size: 'sizePercent',
    },
    prepare({ media, title, subtitle, size }) {
      const alignMap: Record<string, string> = {
        center: 'Centrada',
        left: 'Izquierda',
        right: 'Derecha',
        full: 'Ancho Completo',
      };
      return {
        title: title || 'Imagen sin pie de foto',
        subtitle: `${alignMap[subtitle] || subtitle || 'Centrada'} • ${size || 100}% de tamaño`,
        media,
      };
    },
  },
});
