import React from 'react';
import TechnologyCard from './TechnologyCard';

type technology = {
  name: string;
  imageUrl: string;
};

type TechnologyListProps = {
  heading: string;
  array: technology[];
};

export default function TechnologyList({
  heading,
  array,
}: TechnologyListProps) {
  return (
    <div>
      <h3 className="Technologies__subhead">{heading}</h3>
      <div className="Technology__list">
        {array.map(({ name, imageUrl }: technology) => (
          <TechnologyCard
            name={name}
            imageUrl={imageUrl}
            key={name.toString()}
          />
        ))}
      </div>
    </div>
  );
}
