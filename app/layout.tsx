import Navbar from '../components/Navbar/ClassicNavbar';
import './globals.css';
import { Inter } from 'next/font/google';
import MobileNavbar from '../components/Navbar/ClassicMobileNavbar';

const inter = Inter({ subsets: ['latin'] });

export const navLinks = [
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
