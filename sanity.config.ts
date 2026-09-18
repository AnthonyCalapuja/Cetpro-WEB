import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { table } from '@sanity/table';
import { schemaTypes } from './src/sanity/schemaTypes';
import { NoticiaLivePreview } from './src/sanity/components/NoticiaLivePreview';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wio7pxvt';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'CETPRO 01 - Panel de Noticias y Eventos',
  projectId,
  dataset,
  plugins: [
    structureTool({
      defaultDocumentNode: (S, { schemaType }) => {
        if (schemaType === 'noticia') {
          return S.document().views([
            S.view.form().title('Editor de Contenido'),
            S.view.component(NoticiaLivePreview).title('Vista Previa en Vivo'),
          ]);
        }
        return S.document().views([S.view.form()]);
      },
    }),
    visionTool(),
    table(),
  ],
  schema: {
    types: schemaTypes,
  },
});
