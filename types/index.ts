import { PortableTextBlock } from 'sanity';

export type PostPreviewType = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  image: {
    alt: string;
    src: string;
  };
  publishedAt: string;
  categories: {
    _id: string;
    title: string;
  }[];
};

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  categories: {
    _id: string;
    title: string;
  }[];
  image: {
    alt: string;
    src: string;
  };
  publishedAt: string;
  body: PortableTextBlock[];
};

export type ProfileType = {
  _id: string;
  name: string;
  headline: string;
  image: {
    alt: string;
    src: string;
  };
  introduction: string;
  fullBio: PortableTextBlock[];
};
