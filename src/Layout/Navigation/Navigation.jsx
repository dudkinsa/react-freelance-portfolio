import React from 'react';
import lightMode from '../../assets/icons/sun.svg';
import darkMode from '../../assets/icons/moon.svg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	
	const activeLink ="nav-list__link nav-list__link--active";
	const normalLink ="nav-list__link";


  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__row">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>

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

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  className={({isActive}) => isActive ? activeLink : normalLink}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
