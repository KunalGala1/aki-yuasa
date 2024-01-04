import Image from 'next/image';
import Subheader from './Subheader';
import MainText from './MainText';
import Link from 'next/link';
import Category from './Category';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

type BlogPostPreviewProps = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: {
    alt: string;
    src: string;
  };
  publishedAt: string;
  author: string;
  categories: {
    _id: string;
    title: string;
  }[];
};

const BlogPostPreview = ({
  _id,
  title,
  slug,
  description,
  image,
  publishedAt,
  author,
  categories,
}: BlogPostPreviewProps) => {
  return (
    <div className='bg-slate-200 rounded shadow  md:max-w-[328px]'>
      <div className='p-4 bg-slate-300/50'>
        <Link href={'/posts/' + slug}>
          <Subheader>{title}</Subheader>
        </Link>
        <div className='flex gap-2'>
          {categories.map((category) => (
            <Category id={category._id}>{category.title}</Category>
          ))}
        </div>
      </div>
      <div className='p-4'>
        <MainText>{description}</MainText>
      </div>
      <Link href={'/posts/' + slug}>
        <Image
          src={image.src}
          alt={image.alt}
          width={100}
          height={100}
          className='w-full'
          unoptimized={true}
        ></Image>
      </Link>
      <div className='p-4'>
        <p className='font-sans text-xs text-gray-600 font-extralight'>
          <FontAwesomeIcon icon={faUser} className='mr-1' /> {author}{' '}
          {new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
};
export default BlogPostPreview;
