import React, { useState } from 'react';
import technologies from '../assets/technologies';
import TechnologyList from './TechnologyList';
import './Technologies.css';

export default function Technologies() {
  const getDisplayItems = (
    arr: { name: string; imageUrl: string }[],
    num: number,
  ) => {
    if (arr.length < num) return [];
    return arr.slice(0, num);
  };

  const [languages, setLanguages] = useState(
    getDisplayItems(technologies.languages, 3),
  );
  const [frontend, setFrontend] = useState(
    getDisplayItems(technologies.frontend, 3),
  );
  const [backend, setBackend] = useState(
    getDisplayItems(technologies.backend, 3),
  );

  const [tools, setTools] = useState(getDisplayItems(technologies.tools, 3));

  const statesHasMoreThanTwoItems = () => {
    if (frontend.length > 3 && backend.length > 3 && tools.length > 3) {
      return true;
    }
    return false;
  };

  const toggleTech = () => {
    if (statesHasMoreThanTwoItems()) {
      setLanguages(getDisplayItems(technologies.languages, 3));
      setFrontend(getDisplayItems(technologies.frontend, 3));
      setBackend(getDisplayItems(technologies.backend, 3));
      setTools(getDisplayItems(technologies.tools, 3));
    } else {
      setLanguages(technologies.languages);
      setFrontend(technologies.frontend);
      setBackend(technologies.backend);
      setTools(technologies.tools);
    }
  };

  return (
    <section className="Technologies">
      <h3 className="Technologies__headline">
        Technologies I&apos;m working with:
      </h3>
      <div className="Technologies_list">
        <TechnologyList heading="Languages" array={languages} />
        <TechnologyList heading="Frontend" array={frontend} />
        <TechnologyList heading="Backend" array={backend} />
        <TechnologyList heading="Tools" array={tools} />
      </div>
      <button
        type="button"
        className="Technologies__button"
        onClick={() => {
          toggleTech();
        }}
      >
        {statesHasMoreThanTwoItems() ? 'Minimize' : 'Show all'}
        {' '}
        technologies
      </button>
    </section>
  );
}
