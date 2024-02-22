import { memo, useEffect, useRef, useState } from 'react';
import useSettingDataStore from '../store/setting-store';

interface Props extends Pick<SettingListSliderTypes, "id" | "defaultValue" | "min" | "max" | "step"> {
  selectedLanguage: string;
  titleName: string;
}

const Slider = memo((props: Props) => {
  const { handleSliderChange } = useSettingDataStore();

  const [isEdit, setIsEdit] = useState(false);
  const [sliderValue, setSliderValue] = useState<number | string>(
    props.defaultValue !== null ? props.defaultValue : ""
  );

  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      setIsEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (isEdit) setIsEdit(false)
    setSliderValue(value)
    handleSliderChange(props.id, value);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSliderValue(value)
    if (props.min !== undefined && props.max !== undefined) {
      if (props.min <= value && value <= props.max) {
        setSliderValue(value);
        handleSliderChange(props.id, value);
      } else {
        setSliderValue(props.defaultValue !== null ? props.defaultValue : "");
      }
    }
  }

  return (
    <div
      ref={node}
      className='flex h-12 glassCardLight dark:glassCardDark p-1 m-1 items-center'
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
        <>
          <input
            type="number"
            id={String(props.id) + "number"}
            value={sliderValue}
            className='w-10 text-center mr-2 glassCardDark text-white dark:text-black'
            onChange={handleInputChange}
            step={props.step}
          />
          <label
            className='hidden'
            htmlFor={String(props.id) + "number"}
          >{props.selectedLanguage}</label>
        </>
      }

      <input
        type="range"
        className='w-[400px]'
        min={props.min}
        max={props.max}
        id={String(props.id) + "range"}
        onChange={handleRangeChange}
        value={sliderValue}
        step={props.step}
      />
      <label
        className='hidden'
        htmlFor={String(props.id) + "range"}>
        {props.selectedLanguage}</label>
    </div >
  );
});

export default Slider;
