import { memo } from 'react';

import list from '../assets/settingList.json'

import Slider from '../components/Slider';

import languageStore from '../store/language-store';

const SettingServer = memo(() => {
  const { language } = languageStore()
  return (
    <main className='w-[1200px] m-auto font-semibold'>
      <h2 className='text-4xl font-thin mb-5'>World Setting</h2>
      <div className='h-[700px] overflow-auto'>
        {list.map(item => {
          if (item.type === "range") {
            return (
              <Slider
                key={item.id}
                defaultValue={item.defaultValue}
                min={item.min}
                max={item.max}
                step={item.step}
                selectedLanguage={language === "Korean" ? item.kor : item.eng}
              />
            )
          }
        })}
      </div>


    </main>
  );
});

export default SettingServer;