import './styles.css';
import { useState } from 'react';

export interface Images {
  beforeImageLink: string;
  afterImageLink: string;
}

export default function BeforeAfterPicture({
  beforeImageLink,
  afterImageLink,
}: Images) {
  const [sliderWidth, setSliderWidth] = useState('50');
  const handleSliderChange = (value: string) => {
    setSliderWidth(value);
  };

  return (
    <div className='img-container'>
      <div
        className='img bottom-img'
        style={{ backgroundImage: `url(${afterImageLink})` }}
      />
      <div
        className='img top-img'
        style={{
          width: sliderWidth + '%',
          backgroundImage: `url(${beforeImageLink})`,
        }}
      />
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
