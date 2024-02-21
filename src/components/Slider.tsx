import { memo, useState } from 'react';

interface Props extends Pick<SettingListSliderTypes, "id" | "defaultValue" | "min" | "max" | "step"> {
  selectedLanguage: string;
  titleName: string;
  handleSliderChange: (id: number, titleName: string, value: number) => void;
}

const Slider = memo((props: Props) => {
  const [sliderValue, setSliderValue] = useState<number | string>(
    props.defaultValue !== null ? props.defaultValue : ""
  );

  const [isEdit, setIsEdit] = useState(false);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (isEdit) setIsEdit(false)
    setSliderValue(value)
    props.handleSliderChange(props.id, props.titleName, value);
  }

  const handleIsEdit = () => {
    if (isEdit) setIsEdit(false)
  }

  return (
    <div
      className='flex glassCardLight dark:glassCardDark p-1 m-1 items-center'
      onMouseLeave={handleIsEdit}
    >
      <p className='w-[600px] text-left'>
        {props.selectedLanguage}
      </p>

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
          onChange={(e) => setSliderValue(Number(e.target.value))}
        />
      }

      <input
        type="range"
        className='w-[400px]'
        min={props.min}
        max={props.max}
        onChange={handleRangeChange}
        value={sliderValue}
        step={props.step}
      />

    </div >
  );
});

export default Slider;