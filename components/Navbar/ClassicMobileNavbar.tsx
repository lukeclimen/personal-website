'use client';

import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { navLinks } from '../../app/layout';

import logoNormal from '../../public/assets/logo-light.png';

export default function MobileNavbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    console.log('Before ', menuVisible);
    setMenuVisible(!menuVisible);
    console.log('After ', menuVisible);
  };

  return (
    <>
      <nav className='flex md:hidden justify-between h-fit items-center w-full sticky top-0 bg-black text-cyan-200 z-50'>
        <Link href='/'>
          <Image
            src={logoNormal}
            alt='Personal LC logo'
            height={55}
            className='mx-5 my-3'
          />
        </Link>
        <button className='mx-5' onClick={handleMenuClick}>
          <BiMenu size={55} className='text-cyan-200' />
        </button>
      </nav>
      <div
        className={
          menuVisible
            ? 'block transition-all duration-300'
            : '-translate-y-96 transition-all overflow-hidden'
        }
      >
        <div className=' bg-black border-t-2 border-white pt-5'>
          <ul className='flex flex-col space-y-5 text-cyan-200'>
            {navLinks.map((element) => (
              <li
                key={element.linkKey}
                className='flex w-full justify-center text-2xl cursor-pointer border-b-2 border-white pb-2'
              >
                <Link href={element.linkExtension}>{element.linkName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
