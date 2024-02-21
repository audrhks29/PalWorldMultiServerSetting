import { memo, useState } from 'react';
import useLanguageStore from '../store/language-store';

interface Props extends Pick<SettingListRadioTypes,
  "id" | "defaultValue" | "range1" | "range2" | "range3" | "range4"> {
  selectedLanguage: string;
  titleName: string;
  handleSliderChange: (id: number, titleName: string, value: string) => void;
}

const Radio = memo((props: Props) => {
  const { language } = useLanguageStore();
  const [radioValue, setRadioValue] = useState(props.defaultValue);

  const rangeArray = [
    props.range1, props.range2, props.range3, props.range4
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, titleName: string) => {
    const value = e.target.value
    setRadioValue(value);
    console.log(titleName);
    props.handleSliderChange(props.id, props.titleName, value);
  };

  return (
    <div className='flex glassCardLight dark:glassCardDark p-1 m-1 items-center'>
      <p className='w-[600px] text-left'>
        {props.selectedLanguage}
      </p>

      <ul className='flex text-center'>
        {rangeArray.map((item, index) => {
          const rangeLanguage = language == "Korean" ? item?.kor : item?.eng

          if (rangeLanguage !== "") {
            return (
              <li key={index} className='border h-9 w-36 inputListLight dark:inputListDark flex'>

                <input
                  id={`id${props.id}${index}`}
                  type="radio"
                  name={`range${props.id}`}
                  className='hidden'
                  value={item?.eng}
                  checked={item?.eng === radioValue}
                  onChange={(e) => handleChange(e, item?.eng ?? "")}
                />

                <label htmlFor={`id${props.id}${index}`}
                  className='cursor-pointer font-semibold text-[12px] w-full h-full leading-[30px] glassCardLight dark:glassCardDark'>
                  {rangeLanguage}
                </label>

              </li>
            );
          }
          return null;
        })}

      </ul>
    </div>
  );
});

export default Radio;
