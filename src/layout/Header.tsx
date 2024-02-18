import { memo, useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import ChooseLanguage from './ChooseLanguage';

const Header = memo(() => {
  // dark mode check
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const localStorageChecker = (): boolean => {
    if (!localStorage.theme) return isDarkMode;
    return localStorage.theme === 'dark' ? true : false;
  };

  const [dark, setDark] = useState(localStorageChecker());

  const darkSetButton = () => {
    setDark((state) => {
      const update = !state;
      if (update) localStorage.theme = 'dark';
      else localStorage.theme = 'light';
      return update;
    });
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className='h-12 w-[1400px] m-auto flex items-center justify-between'>
      <h1>Logo</h1>

      <div className='flex items-center'>
        <div
          className='w-[70px] h-[30px] bg-white rounded-full cursor-pointer relative flex justify-around items-center dark:bg-gray-400 mr-4'
          onClick={darkSetButton}
        >
          <i className='dark:text-black'><MdDarkMode /></i>
          <i ><MdLightMode /></i>
          <div
            className='w-[30px] h-[25px] bg-gray-600 absolute top-1/2 -translate-y-1/2 rounded-full'
            style={{ right: dark ? "5px" : 'auto', left: dark ? 'auto' : "5px" }}>
          </div>
        </div>
        <ChooseLanguage />
      </div>
    </div>
  );
});

export default Header;