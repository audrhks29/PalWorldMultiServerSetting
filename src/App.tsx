import { memo, useEffect, useState } from 'react';

import Header from './layout/Header';

import SettingServer from './pages/SettingServer';
import useLanguageStore from './store/language-store';
import Button from './components/Button';

const App = memo(() => {
  const { getLanguage } = useLanguageStore()

  const browserHeight = window.innerHeight

  const [height, setHeight] = useState(browserHeight)

  useEffect(() => {
    getLanguage()
  }, [getLanguage])

  useEffect(() => {
    setHeight(browserHeight)
  }, [browserHeight])

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
    </div>
  );
});

export default App;