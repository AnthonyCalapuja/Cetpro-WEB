import { defineField, defineType } from 'sanity';

export const calloutType = defineType({
  name: 'callout',
  title: 'Cuadro de Llamada / Alerta Informativa',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Tipo de Llamada',
      type: 'string',
      options: {
        list: [
          { title: 'ℹ️ Información General (Azul Institucional)', value: 'info' },
          { title: '⚠️ Advertencia / Atención (Ámbar)', value: 'warning' },
          { title: '✅ Éxito / Confirmación (Verde)', value: 'success' },
          { title: '💡 Consejo / Recomendación (Celeste)', value: 'tip' },
          { title: '🚨 Urgente / Importante (Rojo Coral)', value: 'danger' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título del Cuadro (Opcional)',
      type: 'string',
      placeholder: 'Ej: Requisito indispensable para la matrícula',
    }),
    defineField({
      name: 'text',
      title: 'Contenido del Mensaje',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().error('El mensaje es obligatorio'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
      type: 'type',
    },
    prepare({ title, subtitle, type }) {
      const typeIcons: Record<string, string> = {
        info: 'ℹ️',
        warning: '⚠️',
        success: '✅',
        tip: '💡',
        danger: '🚨',
      };
      return {
        title: title || `${typeIcons[type] || '📌'} Llamada informativa (${type})`,
        subtitle: subtitle || 'Sin descripción',
      };
    },
  },
});
