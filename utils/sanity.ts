import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'minkpbjk',
    dataset: 'production',
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (src: string) => builder.image(src);
export default client;
