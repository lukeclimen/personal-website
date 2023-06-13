'use client';

import Image from 'next/image';

import Headshot from '../../public/assets/Headshot.jpg';
import { useState } from 'react';

interface cardContent {
  cardTitle: string;
  cardText: string;
}
export default function Card({ cardTitle, cardText }: cardContent) {
  const [flip, setFlip] = useState(false);
  const handleFlip = () => setFlip(!flip);

  return (
    <div className='flex flex-col md:flex-row' onClick={handleFlip}>
      <Image
        src={Headshot}
        alt='Headshot'
        className={
          flip
            ? 'relative z-10 w-60 h-60 md:w-96 md:h-96 translate-x-5 translate-y-5 transition-all shadow-gray-600 shadow-xl'
            : 'relative z-10 w-60 h-60 md:w-96 md:h-96 -translate-x-5 translate-y-5 md:translate-x-5 md:-translate-y-5 transition-all shadow-gray-600 shadow-xl'
        }
      />
      <div
        className={
          flip
            ? 'relative bg-black text-cyan-200 w-60 h-60 md:w-96 md:h-96 p-3 z-20 -translate-x-5 -translate-y-5 transition-all shadow-black shadow-2xl'
            : 'relative bg-black text-cyan-200 w-60 h-60 md:w-96 md:h-96 p-3 z-20 translate-x-5 -translate-y-5 md:-translate-x-5 md:translate-y-5 transition-all shadow-black shadow-2xl'
        }
      >
        <h2 className='text-2xl pb-5'>{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
}
