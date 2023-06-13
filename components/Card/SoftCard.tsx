import Button, { ButtonProps } from "../Button";

interface Props {
  cardTitle: string;
  cardText: string;
  cardButton?: ButtonProps;
}

export default function Card({ cardButton, cardText, cardTitle }: Props) {
  
  return (
    <div className='bg-gray-700 text-cyan-200 w-5/6 max-w-2xl p-4 md:p-8 lg:p-10 mx-auto rounded-lg overflow-hidden'>
      <h2 className='text-lg md:text-xl mb-2 font-bold'>{cardTitle}</h2>
      <p className="text-sm md:text-base font-thin mb-4">{cardText}</p>
    {
      cardButton && <Button buttonText="Hey Jennie wassup" />
    }
    </div>
  );
}
