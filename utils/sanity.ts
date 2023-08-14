import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Image } from './types';

const client = createClient({
    projectId: 'minkpbjk',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-08-31',
});

const builder = imageUrlBuilder(client);

export const urlFor = (src: Image) => builder.image(src);
export default client;
