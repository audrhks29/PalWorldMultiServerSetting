import React, { memo, useState } from 'react';

const Slider = React.forwardRef((props, sliderRef) => {
  const [sliderValue, setSliderValue] = useState(props.defaultValue);
  const [isEdit, setIsEdit] = useState(false);

  const aa = (e) => {
    if (isEdit) setIsEdit(false)
    setSliderValue(e.target.value)
  }

  const bb = () => {
    if (isEdit) setIsEdit(false)
  }

  return (
    <div
      className='flex glassCardLight dark:glassCardDark p-1 m-1'
      onMouseLeave={bb}
      ref={sliderRef}
    >
      <p className='w-[600px] text-left '>{props.kor}</p>

      {!isEdit &&
        <p
          onClick={() => setIsEdit(true)}
          className='w-10 text-center mr-2 cursor-pointer'>
          {sliderValue}
        </p>
      }

      {isEdit &&
        <input
          type="text"
          value={sliderValue}
          className='w-10 text-center mr-2'
          onChange={(e) => setSliderValue(e.target.value)}
        />
      }

      <input
        type="range"
        className='w-[400px]'
        min={props.min}
        max={props.max}
        onChange={aa}
        value={sliderValue}
        step={props.step}
      />

    </div >
  );
});

export default Slider;