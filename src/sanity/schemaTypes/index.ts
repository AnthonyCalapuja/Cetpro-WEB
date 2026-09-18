import { type SchemaTypeDefinition } from 'sanity';
import { noticiaType } from './noticia';
import { calloutType } from './callout';
import { quoteType } from './quote';
import { alignedImageType } from './alignedImage';
import { carouselType } from './carousel';

export const schemaTypes: SchemaTypeDefinition[] = [
  noticiaType,
  calloutType,
  quoteType,
  alignedImageType,
  carouselType,
];
