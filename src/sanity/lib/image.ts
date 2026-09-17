import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from './client';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'wio7pxvt',
  dataset: dataset || 'production',
});

export const urlForImage = (source: any) => {
  return imageBuilder.image(source);
};
