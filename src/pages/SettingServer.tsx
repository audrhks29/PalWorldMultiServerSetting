import { memo, useRef } from 'react';

import list from '../assets/settingList.json'

import Slider from '../components/Slider';

const SettingServer = memo(() => {
  const sliderRef = useRef()

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
                kor={item.kor}
                eng={item.eng}
                ref={sliderRef}
              />
            )
          }
        })}
      </div>


    </main>
  );
});

export default SettingServer;