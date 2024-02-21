import { memo, useState } from 'react';

import list from '../assets/settingList.json'

import Slider from '../components/Slider';

import useLanguageStore from '../store/language-store';
import Radio from '../components/Radio';

interface SaveTextItem {
  id: number;
  titleName: string;
  value: number | string;
}

const SettingServer = memo(() => {
  const { language } = useLanguageStore();
  const [saveText, setSaveText] = useState<SaveTextItem[]>([])

  const handleSliderChange = (id: number, titleName: string, value: number | string) => {

    if (saveText.some(data => data.id === id)) {
      setSaveText(prevData => prevData.map(
        data => data.id === id
          ? { ...data, value: value }
          : data
      ));
    } else {
      setSaveText(prevData => [
        ...prevData,
        { id: id, titleName: titleName, value: value }
      ]);
    }
  };
  console.log(saveText);

  return (
    <main className='w-[1200px] m-auto font-semibold'>
      <h2 className='text-4xl font-thin mb-5'>World Setting</h2>
      <div className='h-[700px] overflow-auto'>
        {list.map((item, index) => {

          if (item.type === "range") {
            return (
              <Slider
                key={index}
                id={item.id}
                defaultValue={item.defaultValue}
                min={item.min}
                max={item.max}
                step={item.step}
                selectedLanguage={language === "Korean" ? item.kor : item.eng}
                titleName={item.eng}
                handleSliderChange={(id, titleName, value) => handleSliderChange(id, titleName, value)}
              />
            )
          }

          if (item.type === "radio" && !item.fixed) {
            return (
              <Radio
                key={index}
                id={item.id}
                defaultValue={item.defaultValue}
                range1={item.range1}
                range2={item.range2}
                range3={item.range3}
                range4={item.range4}
                selectedLanguage={language === "Korean" ? item.kor : item.eng}
                titleName={item.eng}
                handleSliderChange={(id, titleName, value) => handleSliderChange(id, titleName, value)}
              />
            )
          }

        })}
      </div>
      <button>데이터 가져오기</button>
    </main>
  );
});

export default SettingServer;