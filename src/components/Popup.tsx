import { memo } from 'react';
import useSettingDataStore from '../store/setting-store';
import usePopupStore from '../store/popup-store';
import { LuClipboard } from 'react-icons/lu';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Popup = memo(() => {
  const { settingData } = useSettingDataStore();
  const { togglePopup } = usePopupStore();

  const copyToClipboard = () => {
    let text = `; This configuration file is a sample of the default server settings.
; Changes to this file will NOT be reflected on the server.
; To change the server settings, modify Pal/Saved/Config/WindowsServer/PalWorldSettings.ini.
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(`;

    settingData.forEach(item => {
      if (typeof item.value === "number") {
        if (![32, 33, 34, 35, 39].includes(item.id) && item.id < 42) {
          text += `${item.titleName}=${item.value.toFixed(6)},`;
        } else {
          text += `${item.titleName}=${item.value},`;
        }
      } else if (typeof item.value === "string" && item.id !== 62) {
        text += `${item.titleName}=${item.value},`;
      } else if (item.value === null) {
        text += `${item.titleName}="",`;
      }
    });

    text += `BanListURL="https://api.palworldgame.com/api/banlist.txt")`;

    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('복사되었습니다.');
  };
  return (
    <div
      className='absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 break-words bg-zinc-900 bg-opacity-60'
    // style={{ backgroundImage: 'url(images/background.webp)' }}
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-700 bg-opacity-60 rounded-3xl'>
        <div className='relative w-[1100px] m-auto bg-slate-300 dark:bg-zinc-800 p-6 rounded-3xl'>
          <h2 className='text-xl mb-3'>WorldSetting</h2>
          <div
            className='bg-slate-100 dark:bg-zinc-700 text-sm p-6 relative'>
            <span>
              ; This configuration file is a sample of the default server settings.<br />
              ; Changes to this file will NOT be reflected on the server.<br />
              ; To change the server settings, modify Pal/Saved/Config/WindowsServer/PalWorldSettings.ini.<br />
              [/Script/Pal.PalGameWorldSettings]<br />
            </span>
            <span>OptionSettings=(</span>
            {settingData.map(item => {
              if (typeof item.value === "number") {
                if (![32, 33, 34, 35, 39].includes(item.id) && item.id < 42) {
                  return (
                    <span key={item.id}>{item.titleName}={item.value.toFixed(6)},</span>
                  );
                } else {
                  return (
                    <span key={item.id}>{item.titleName}={item.value},</span>
                  );
                }
              }
              if (typeof item.value === "string" && item.id !== 62) {
                return (
                  <span>{item.titleName}={item.value},</span>
                )
              }
              if (item.value === null) {
                return (
                  <span>{item.titleName}="",</span>
                )
              }
            })}
            <span>BanListURL="https://api.palworldgame.com/api/banlist.txt")</span>
            <button
              onClick={copyToClipboard}
              className='absolute top-2 right-4 w-6 h-6 text-center hover:text-gray-400 dark:hover:text-black'
            >
              <i className='text-[30px]'><LuClipboard /></i>
            </button>
          </div>
          <button
            onClick={togglePopup}
            className='absolute top-4 right-4 text-center hover:text-gray-400 dark:hover:text-black'
          ><i className='text-[30px]'><IoMdCloseCircleOutline /></i></button>
        </div>
      </div>
    </div>
  );
});

export default Popup;