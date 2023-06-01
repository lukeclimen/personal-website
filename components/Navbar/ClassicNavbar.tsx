import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '../../app/layout';

import logoNormal from '../../public/assets/logo-light.png';

export default function ClassicNavbar() {
  return (
    <nav className='hidden md:flex justify-between h-fit items-center w-full sticky top-0 bg-black text-cyan-200'>
      <Link href='/'>
        <Image
          src={logoNormal}
          alt='Personal LC logo'
          height={55}
          className='mx-5 my-3'
        />
      </Link>
      {/* Dashboard menu */}
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
