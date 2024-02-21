import { memo } from 'react';
import useLanguageStore from '../store/language-store';
import usePopupStore from '../store/popup-store';

const Button = memo(() => {
  const { language } = useLanguageStore();
  const { togglePopup } = usePopupStore();

  const reset = () => window.location.reload();

  return (
    <div className='w-[400px] m-auto mt-5 flex justify-between h-12'>

      <button
        className='w-48 font-bold glassCardLight hover:glassCardDark dark:glassCardDark dark:hover:glassCardLight hover:text-white dark:hover:text-black'
        onClick={reset}
      >
        {language === "Korean" ? "초기화" : "RESET"}
      </button>

      <button
        className='w-48 font-bold glassCardLight hover:glassCardDark dark:glassCardDark dark:hover:glassCardLight hover:text-white dark:hover:text-black'
        onClick={togglePopup}
      >
        {language === "Korean" ? "저장" : "SAVE"}
      </button>
    </div>
  );
});

export default Button;