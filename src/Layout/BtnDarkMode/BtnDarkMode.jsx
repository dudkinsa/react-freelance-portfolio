import React from 'react';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import './style.scss';

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = React.useState('light');

  const toggleDarkMode = () => {
    console.log('+');
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <>
    {darkMode}
      <button className="dark-mod-btn" onClick={toggleDarkMode}>
        <img className="dark-mod-btn__icon" src={sun} alt="Light mode" />
        <img className="dark-mod-btn__icon" src={moon} alt="Dark mode" />
      </button>
    </>
  );
};

export default BtnDarkMode;
