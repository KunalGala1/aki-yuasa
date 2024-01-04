'use client';
import { useState, useEffect } from 'react';
import { getPostBySlug } from '@/sanity/sanity.query';
import type { PostType } from '@/types';
import { PortableText } from '@portabletext/react';

import Nav from '@/app/components/Nav';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Subheader from '@/app/components/Subheader';
import MainText from '@/app/components/MainText';
import Footer from '@/app/components/Footer';

export default function Page({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<PostType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPostBySlug(params.slug)
      .then((res) => {
        setPost(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <main>
        {post && (
          <>
            <div className='max-w-96 mx-auto py-16 space-y-4'>
              <h1 className='font-extrabold text-4xl'>{post.title}</h1>
              <p className='text-xl'>{post.description}</p>
            </div>
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={500}
              height={500}
              unoptimized={true}
              className='w-full'
            ></Image>
            <p className='px-4 pt-1 text-gray-400'>{post.image.alt}</p>
            <section className='max-w-96 mx-auto py-16 space-y-4'>
              <div className='font-sans text-xs text-slate-600'>
                <h2 className='font-bold'>By {post.author}</h2>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </span>
              </div>
              <div>
                <PortableText value={post.body} />
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
