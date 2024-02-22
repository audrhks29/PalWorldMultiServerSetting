import { memo, useState } from 'react';

import useLanguageStore from '../store/language-store';

import languageList from '../assets/languages.json'

import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const ChooseLanguage = memo(() => {
  const { language, setLanguage } = useLanguageStore()

  const [isChooseLanguage, setIsChooseLanguage] = useState(false)

  const handleChooseLanguage = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setIsChooseLanguage(false);
  };

  return (
    <div className='relative'>
      <div
        onClick={() => setIsChooseLanguage(!isChooseLanguage)}
        className='cursor-pointer px-2 w-44 h-8 glassCardLight dark:glassCardDark flex items-center justify-between'
      >
        <span>{language}</span>
        <span>
          {isChooseLanguage ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </span>
      </div>

      {isChooseLanguage &&
        <ul className='absolute w-44 top-9 glassCardLight dark:glassCardDark'>
          {languageList.map(item => (
            <li
              key={item.id}
              className='h-8 leading-8 cursor-pointer hover:font-semibold px-2'
              onClick={() => handleChooseLanguage(item.language)}>
              {item.language}
            </li>
          ))}
        </ul>}
    </div>
  );
});

export default ChooseLanguage;