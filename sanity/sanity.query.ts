import { groq } from 'next-sanity';
import client from './sanity.client';

export const getPostPreviews = async () => {
  return client.fetch(
    groq`*[_type == 'post'] | order(publishedAt desc){
        _id,
        title,
          'slug':slug.current,
          'categories':categories[]->{
          _id,
            title
          },
        description,
         "image":{
          "alt":mainImage.alt,
            "src":mainImage.asset->url
         },
          'author':author->name,
          publishedAt            
      }`
  );
};

export const getPostBySlug = async (slug: string) => {
  return client.fetch(
    groq`*[_type == 'post' && slug.current == $slug][0]{
        _id,
        title,
        'slug':slug.current,
        description,
        'author':author->name,
        'categories':categories[]->{
          _id,
          title
        },
        "image":{
          "alt":mainImage.alt,
            "src":mainImage.asset->url
         },
        publishedAt,
        body
      }`,
    { slug }
  );
};
