import { Link } from 'react-router-dom';

export interface ButtonProps {
  buttonText: string;
  ghost?: boolean;
}

export default function Button({ buttonText, ghost }: ButtonProps) {
  if (ghost) {
    return (
      <button
        className={
          'bg-gray-700 border-2 border-cyan-200  text-cyan-200 font-semibold text-xs md:text-base px-4 py-2 rounded-full hover:bg-cyan-200 hover:text-gray-700 active:translate-y-0.5'
        }
      >
        {buttonText}
      </button>
    );
  } else {
    return (
      <button
        className={
          'bg-cyan-200 border-2 border-cyan-200  text-gray-700 font-semibold text-xs md:text-base px-4 py-2 rounded-full hover:bg-transparent hover:text-cyan-200 active:translate-y-0.5'
        }
      >
        {buttonText}
      </button>
    );
  }
}
