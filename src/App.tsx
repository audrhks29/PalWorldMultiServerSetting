import { memo } from 'react';

import Header from './layout/Header';
import SettingServer from './pages/SettingServer';

const App = memo(() => {

  return (
    <div className='h-[1000px] relative dark:bg-black dark:bg-opacity-70 dark:text-gray-300'>
      <img src="images/background.webp" alt="" className='absolute -z-10 opacity-65' />
      <Header />
      <SettingServer />
    </div>
  );
});

export default App;