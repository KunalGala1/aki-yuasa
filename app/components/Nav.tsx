import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='p-4 bg-slate-200 flex justify-center'>
      <Link href='/'>
        <Image
          src={'/logo.svg'}
          alt={'Logo - Aki Yuasa'}
          width={230}
          height={100}
        ></Image>
      </Link>
    </nav>
  );
};
export default Nav;
