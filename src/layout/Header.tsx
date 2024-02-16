import { memo, useEffect, useState } from 'react';

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
    <div className='h-10 w-full flex items-center dark:text-gray-400'>
      <h1 className='h-full'>로고영역</h1>
      <nav>
        <ul className="flex">
          <li className="justify-center">it goes Work!!</li>
          <li className="">Dark Mode 토글</li>
          <li onClick={darkSetButton}>{dark ? '현재 Dark모드' : '현재 light모드'}</li>
        </ul>
      </nav>
      <div className='w-[80px] h-[30px] bg-gray-400 rounded-full'>
        <div className=''></div>
      </div>
    </div>
  );
});

export default Header;