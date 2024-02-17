import { memo, useEffect, useState } from 'react';
import languageStore from '../store/language-store';

const ChooseLanguage = memo(() => {
  const { language, setLanguage } = languageStore()
  const [isChooseLanguage, setIsChooseLanguage] = useState(false)
  useEffect(() => {
    setLanguage()
  }, [setLanguage])

  const handleChooseLanguage = () => {
    setIsChooseLanguage(!isChooseLanguage)
  }

  return (
    <>
      <div
        onClick={handleChooseLanguage}
        className='cursor-pointer'
      >
        {language}
      </div>
      {
        isChooseLanguage &&
        <ul>
          <li
            onClick={handleChooseLanguage}>
            Korean</li>
          <li
            onClick={handleChooseLanguage}>
            English
          </li>
        </ul>
      }
    </>
  );
});

export default ChooseLanguage;