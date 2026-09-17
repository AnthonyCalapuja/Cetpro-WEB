import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wio7pxvt';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // En false para obtener siempre las noticias más recientes
});
