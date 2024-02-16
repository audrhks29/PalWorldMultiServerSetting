import { memo, useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Header = memo(() => {
  const localStorageChecker = (): boolean => {
    if (!localStorage.theme) return false;
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
    <div className='h-10 w-full flex items-center'>

      <h1>LOGO</h1>

      <nav>
        <ul className="flex">

        </ul>
      </nav>

      <div
        className='w-[70px] h-[30px] bg-gray-400 rounded-full cursor-pointer relative flex justify-around items-center dark:bg-white'
        onClick={darkSetButton}
      >
        <i className='dark:text-black'><MdLightMode /></i>
        <i><MdDarkMode /></i>
        <div
          className='w-[30px] h-[25px] bg-gray-600 absolute top-1/2 -translate-y-1/2 rounded-full'
          style={{ right: dark ? "5px" : 'auto', left: dark ? 'auto' : "5px" }}>
        </div>
      </div>

    </div>
  );
});

export default Header;