import React from 'react';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import './style.scss';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = React.useState('light');

  React.useEffect(() => {
    console.log('useEffect Fired');
    console.log({ darkMode });

    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };
  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <>
      {darkMode}
      <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
        <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
        <img className="dark-mode-btn__icon" src={moon} alt="Dark mode" />
      </button>
    </>
  );
};

export default BtnDarkMode;
