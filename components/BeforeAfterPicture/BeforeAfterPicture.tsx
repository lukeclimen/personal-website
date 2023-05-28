import Image from 'next/image';
import './styles.css';
import { useState } from 'react';

export default function BeforeAfterPicture() {
  const [sliderWidth, setSliderWidth] = useState('50');
  const handleSliderChange = (value: string) => {
    setSliderWidth(value);
  };

  return (
    <div className='img-container'>
      <div className='img bottom-img'></div>
      <div className='img top-img' style={{ width: sliderWidth + '%' }}></div>
      <input
        type='range'
        min='1'
        max='100'
        value={sliderWidth}
        className='slider'
        name='slider'
        id='slider'
        onChange={(event) => handleSliderChange(event.target.value)}
      ></input>
    </div>
  );
}
