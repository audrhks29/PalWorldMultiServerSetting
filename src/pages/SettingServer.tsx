import { memo } from 'react';

import list from '../assets/settingList.json'

import Slider from '../components/Slider';
import Radio from '../components/Radio';

import useLanguageStore from '../store/language-store';

const SettingServer = memo(() => {
  const { language } = useLanguageStore();

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
              />
            )
          }

        })}
      </div>
    </main>
  );
});

export default SettingServer;