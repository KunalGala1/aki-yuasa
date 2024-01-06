'use client';
import { useState, useEffect } from 'react';
import { getPostPreviews } from '@/sanity/sanity.query';
import { getProfile } from '@/sanity/sanity.query';
import type { PostPreviewType } from '@/types';
import type { ProfileType } from '@/types';

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import BlogPostPreview from './components/BlogPostPreview';

const HomePage = () => {
  const [profile, setProfile] = useState<ProfileType>();
  const [posts, setPosts] = useState<PostPreviewType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const posts: PostPreviewType[] = await getPostPreviews();
        setPosts(posts);
        const profile: ProfileType = await getProfile();
        setProfile(profile);
        setIsLoading(false);
        console.log(posts);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <section className='bg-hero bg-cover bg-center h-[75vh] relative'>
        <Link href='/' className='p-4 block'>
          <Image
            src={'/logo.svg'}
            alt={'Logo - Aki Yuasa'}
            width={230}
            height={100}
          ></Image>
        </Link>
        <div className='absolute bottom-0 left-0 m-4 p-4 bg-slate-50/75 rounded sm:w-1/2 space-y-4'>
          <Header>{profile && profile.headline}</Header>
          <p>{profile && profile.introduction}</p>
        </div>
      </section>
      <section>
        <div className='flex justify-center gap-8 m-8 flex-wrap'>
          {posts.map((post) => (
            <BlogPostPreview
              key={post._id}
              title={post.title}
              slug={post.slug}
              categories={post.categories}
              description={post.description}
              image={post.image}
              author={post.author}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default HomePage;
