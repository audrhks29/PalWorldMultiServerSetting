import { memo, useState } from 'react';

interface Props extends Pick<SettingListRadioTypes,
  "id" | "defaultValue" | "range1" | "range2" | "range3" | "range4"> {
  selectedLanguage: string;
}

const Radio = memo((props: Props) => {
  const [radioValue, setRadioValue] = useState(props.defaultValue);
  const rangeArray = [
    props.range1, props.range2, props.range3, props.range4
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  return (
    <div className='flex glassCardLight dark:glassCardDark p-1 m-1'>
      <p className='w-[600px] text-left'>
        {props.selectedLanguage}
      </p>

      <ul>
        {rangeArray.map((item, index) => {
          if (item !== "") {
            return (
              <li key={index}>
                <input
                  type="radio"
                  name={`range${props.id}`}
                  value={item}
                  checked={item === radioValue}
                  onChange={handleChange}
                />
                <label>{item}</label>
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
