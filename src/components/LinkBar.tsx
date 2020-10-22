import React from 'react';
import github from '../assets/logo-github.svg';
import linkedin from '../assets/logo-linkedin.svg';
import './LinkBar.css';

export default function Links() {
  return (
    <ul className="LinkBar">
      <a className="LinkBar__item--link" href="https://www.linkedin.com/in/ymirke/">
        <li className="LinkBar__item">
          <img
            className="LinkBar__item--image"
            src={linkedin}
            height="60px"
            alt="LinkedIn Logo"
          />
          LinkedIn
        </li>
      </a>

      <a className="LinkBar__item--link" href="https://github.com/ymirke">
        <li className="LinkBar__item">
          <img
            className="LinkBar__item--image"
            src={github}
            height="60px"
            alt="GitHub Logo"
          />
          GitHub
        </li>
      </a>
    </ul>
  );
}
