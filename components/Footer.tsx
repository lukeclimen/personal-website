import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { ReactElement } from 'react';

interface socialLink {
  siteName: string;
  siteLink: string;
  icon: ReactElement;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks: socialLink[] = [
    {
      siteName: 'Github',
      siteLink: 'https://github.com/lukeclimen',
      icon: <FaGithub size={30} />,
    },
    {
      siteName: 'LinkedIn',
      siteLink: 'https://www.linkedin.com/in/lclimenh/',
      icon: <FaLinkedinIn size={30} />,
    },
  ];

  return (
    <div className='flex justify-around bg-gray-300 text-gray-800 py-5 items-center px-3'>
      <h2 className='text-md md:text-xl'>
        &copy; {currentYear} Lucas Climenhage
      </h2>
      <ul className='flex space-x-5 md:space-x-10'>
        {socialLinks.map((element) => (
          <li>
            <Link
              href={element.siteLink}
              target='_blank'
              className='flex items-center space-x-3'
            >
              <h2 className='hidden md:visible text-xl'>{element.siteName}</h2>
              {element.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
