import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <h2 className="Footer__headline">Thank you for looking through my portfolio</h2>
      <p className="Footer__text">
        If you need more developers, some of my colleagues and I are available
        to hire through &lt;Salt/&gt;
      </p>
      <p className="Footer__text">
        If that sounds interesting contact{' '}
        <a
          className="Footer__link"
          href="mailto:richard.kallstrom@appliedtechnology.se"
        >
          Richard through email.
        </a>{' '}
      </p>
      <a className="Footer__link" href="https://salt.dev/">
        <button className="Footer__button">
          Learn more about &lt;Salt/&gt;
        </button>
      </a>
    </footer>
  );
}
