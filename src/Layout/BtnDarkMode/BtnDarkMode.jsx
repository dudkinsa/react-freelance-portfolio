import React from 'react';
import lightMode from '../../assets/icons/sun.svg';
import darkMode from '../../assets/icons/moon.svg';
import './style.scss'

const BtnDarkMode = () => {
  return (
    <button className="dark-mod-btn dark-mod-btn--active">
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