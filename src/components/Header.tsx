import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <img
        className="Header__profilePhoto"
        src="https://via.placeholder.com/210"
        alt="Profile"
      />
      <div className="Header__bio">
        <h1 className="Header__headline">
          Hey, I'm Ymir{' '}
          <span role="img" aria-label="wave-emoji">
            👋
          </span>
        </h1>
        <div className="Header__text">
          <p>
            Before becoming a software developer I worked as a digital marketer.
            I really enjoyed creating small scripts and tools that I used in my
            work. Eventually creating scripts were more fun to me than anything
            else, so I started programming as much as possible.
          </p>
          <p>
            This is around the time I heard about{' '}
            <a className="Header__links" href="https://salt.dev/">
              School of Applied Technology
            </a>
            . Which is a bootcamp with 500+ coding hours. Test driven
            development, daily standups as well as weekly retrospectives and demos.
          </p>
          <p>
            What I love about programming is being able to be creative and build
            things that are useful to other people.
          </p>
        </div>
      </div>
    </header>
  );
}
