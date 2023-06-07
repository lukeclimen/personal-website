import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '../../app/layout';

import logoNormal from '../../public/assets/logo-light.png';
import { useState } from 'react';

interface props {
  defaultSelected: string;
}

export default function SoftNavbar({ defaultSelected }: props) {
  const [selected, setSelected] = useState(defaultSelected);

  const handleClick = () => setSelected('/');

  return (
    <nav className='flex flex-col bg-gray-700 w-5/6 mx-8 my-2 rounded-xl items-center .custom-shadow md:mx-auto'>
      <Link href='/'>
        <Image
          src={logoNormal}
          alt='Personal LC logo'
          height={55}
          className='py-4'
        />
      </Link>
      <ul className='flex flex-row flex-wrap gap-x-4 text-lg font-semibold text-cyan-200 mb-2 justify-center items-center'>
        {navLinks.map((element) => (
          <li
            key={element.linkKey}
            className={
              element.linkExtension === selected
                ? 'bg-cyan-200 text-gray-700 px-4 py-2 rounded-full'
                : 'px-4 py-2 hover:bg-cyan-200 hover:text-gray-700 hover:px-4 hover:py-2 hover:rounded-full'
            }
            onClick={() => setSelected(element.linkExtension)}
          >
            <Link href={element.linkExtension}>{element.linkName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
