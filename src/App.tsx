import { memo } from 'react';

import Header from './layout/Header';

import SettingServer from './pages/SettingServer';

const App = memo(() => {
  console.log(window.innerHeight);
  return (
    <div
      className='relative dark:bg-black dark:bg-opacity-70 dark:text-gray-300'
      style={{ height: window.innerHeight }}
    >
      <img
        src="images/background.webp"
        className='absolute -z-10 opacity-65 w-full h-full object-cover' />
      <Header />
      <SettingServer />
    </div>
  );
});

export default App;