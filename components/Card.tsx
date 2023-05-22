'use client';

import Image from 'next/image';

import Headshot from '../public/assets/Headshot.jpg';
import { useState } from 'react';

export default function Card({ cardTitle, cardText }) {
  const [flip, setFlip] = useState(false);
  const handleFlip = () => setFlip(!flip);

  return (
    <div className='flex flex-col md:flex-row' onClick={handleFlip}>
      <Image
        src={Headshot}
        alt='Headshot'
        className={
          flip
            ? 'relative z-10 w-72 h-72 md:w-96 md:h-96 translate-x-5 translate-y-5 transition-all'
            : 'relative z-10 w-72 h-72 md:w-96 md:h-96 -translate-x-5 translate-y-5 md:translate-x-5 md:-translate-y-5 transition-all'
        }
      />
      <div
        className={
          flip
            ? 'relative bg-black text-cyan-200 w-72 h-72 md:w-96 md:h-96 p-3 z-20 -translate-x-5 -translate-y-5 transition-all'
            : 'relative bg-black text-cyan-200 w-72 h-72 md:w-96 md:h-96 p-3 z-20 translate-x-5 -translate-y-5 md:-translate-x-5 md:translate-y-5 transition-all'
        }
      >
        <h2 className='text-2xl pb-5'>{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
}
