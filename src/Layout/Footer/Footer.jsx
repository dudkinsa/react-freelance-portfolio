import React from 'react';
import vk from '../../assets/icons/vk.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import gitHub from '../../assets/icons/gitHub.svg';
import linkedIn from '../../assets/icons/linkedIn.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="VK" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="gitHub" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
