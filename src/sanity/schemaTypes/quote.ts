import { defineField, defineType } from 'sanity';

export const quoteType = defineType({
  name: 'quoteBlock',
  title: 'Cita Destacada / Declaración',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Texto de la Cita',
      type: 'text',
      rows: 3,
      placeholder: 'Escribe la frase o declaración aquí...',
      validation: (Rule) => Rule.required().error('El texto de la cita es obligatorio'),
    }),
    defineField({
      name: 'author',
      title: 'Autor de la Cita (Opcional)',
      type: 'string',
      placeholder: 'Ej: Lic. Juan Pérez Ramos',
    }),
    defineField({
      name: 'role',
      title: 'Cargo, Especialidad o Institución (Opcional)',
      type: 'string',
      placeholder: 'Ej: Director General de CETPRO 01 Abancay',
    }),
  ],
  preview: {
    select: {
      title: 'quote',
      subtitle: 'author',
    },
    prepare({ title, subtitle }) {
      return {
        title: `“${title ? (title.length > 50 ? title.substring(0, 50) + '...' : title) : 'Cita sin texto'}”`,
        subtitle: subtitle ? `— ${subtitle}` : 'Autor anónimo',
      };
    },
  },
});
