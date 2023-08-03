import React from 'react';
import lightMode from '../../assets/icons/sun.svg';
import darkMode from '../../assets/icons/moon.svg';
import './style.scss'

const BtnDarkMode = () => {

  const toggleDarkMode = () => {
    console.log('+');
  }

  return (
    <button className="dark-mod-btn" onClick={toggleDarkMode}>
              <img
                className="dark-mod-btn__icon"
                src={lightMode}
                alt="Light mode"
              />
              <img
                className="dark-mod-btn__icon"
                src={darkMode}
                alt="Dark mode"
              />
            </button>
  )
}

export default BtnDarkMode;