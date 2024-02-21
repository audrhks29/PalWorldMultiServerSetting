import { memo, useEffect, useState } from 'react';

import Header from './layout/Header';

import SettingServer from './pages/SettingServer';
import Button from './components/Button';
import Popup from './components/Popup';

import useLanguageStore from './store/language-store';
import useSettingDataStore from './store/setting-store';
import usePopupStore from './store/popup-store';

const App = memo(() => {
  const { getLanguage } = useLanguageStore();
  const { initializeData, settingData } = useSettingDataStore();
  const { popupState } = usePopupStore();

  const browserHeight = window.innerHeight;
  console.log(settingData);
  const [height, setHeight] = useState(browserHeight);

  useEffect(() => {
    getLanguage();
    initializeData();
  }, [getLanguage, initializeData]);

  useEffect(() => {
    setHeight(browserHeight);
  }, [browserHeight]);

  return (
    <div
      className='relative dark:bg-black dark:bg-opacity-70 dark:text-gray-300'
      style={{ height: height }}
    >
      <img
        src="images/background.webp"
        className='absolute -z-10 opacity-65 w-full h-full object-cover' />
      <Header />
      <SettingServer />
      <Button />
      {popupState && <Popup />}
    </div>
  );
});

export default App;