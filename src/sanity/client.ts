import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Environment variable'lardan okuyacak
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: true, // Cache kullanımı için true, anlık veri için false
  apiVersion: '2023-05-03',
});

// Görsel URL oluşturucu
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
