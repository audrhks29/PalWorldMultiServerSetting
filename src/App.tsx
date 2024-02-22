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
  const { initializeData } = useSettingDataStore();
  const { popupState } = usePopupStore();

  const contentsHeight = document.documentElement.scrollHeight;
  const contentsWidth = document.documentElement.scrollWidth;

  const [height, setHeight] = useState(contentsHeight);
  const [width, setWidth] = useState(contentsWidth);

  useEffect(() => {
    getLanguage();
    initializeData();
  }, [getLanguage, initializeData]);

  useEffect(() => {
    setHeight(contentsHeight);
  }, [contentsHeight]);

  useEffect(() => {
    setWidth(contentsWidth)
  }, [contentsWidth])

  return (
    <div
      className='relative dark:bg-black dark:bg-opacity-70 dark:text-gray-300 w-screen h-screen'
      style={{ minHeight: height, minWidth: width }}
    >
      <img
        src="images/background.webp"
        className='absolute -z-10 opacity-65 w-screen h-screen object-cover'
        style={{ minHeight: height, minWidth: width }}
      />
      <Header />
      <SettingServer />
      <Button />
      {popupState && <Popup />}
    </div>
  );
});

export default App;