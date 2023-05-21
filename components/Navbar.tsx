import Link from 'next/link';
import Image from 'next/image';
import logoNormal from '../public/assets/logo-light.png';

export default function Navbar() {
  const navLinks = [
    {
      linkName: 'About',
      linkKey: 'about-link',
      linkExtension: '/about',
    },
    {
      linkName: 'Blog',
      linkKey: 'blog-link',
      linkExtension: '/blog',
    },
    {
      linkName: 'Portfolio',
      linkKey: 'portfolio-link',
      linkExtension: '/portfolio',
    },
    {
      linkName: 'Contact',
      linkKey: 'contact-link',
      linkExtension: '/contact',
    },
  ];

  return (
    <nav className='flex justify-between h-fit items-center w-full sticky top-0 bg-black text-cyan-200'>
      <Link href='/'>
        <Image
          src={logoNormal}
          alt='Personal LC logo'
          height={55}
          className='mx-5 my-3'
        />
      </Link>
      <ul className='space-x-10 px-12 hidden md:flex'>
        {navLinks.map((element) => (
          <li
            key={element.linkKey}
            className='text-2xl transition-all hover:-translate-y-1 border-b-2 border-black pb-2 hover:border-white hover:scale-110 cursor-pointer'
          >
            <Link href={element.linkExtension}>{element.linkName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
