import React from 'react';
import {useLocalStorage} from '../../utils/useLocalStore';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';

import './style.scss';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  const btnRef = React.useRef(null);
  

  React.useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');

      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
    
  }, [darkMode]);

  React.useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);
  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };
  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <>
      <button
        ref={btnRef}
        className={darkMode === 'dark' ? btnActive : btnNormal}
        onClick={toggleDarkMode}
      >
        <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
        <img className="dark-mode-btn__icon" src={moon} alt="Dark mode" />
      </button>
    </>
  );
};


export default BtnDarkMode;


