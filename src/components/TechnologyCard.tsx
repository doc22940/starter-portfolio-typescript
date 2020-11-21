import React from 'react';
import './TechnologyCard.css';

type technology = {
  name: string;
  imageUrl: string;
}

export default function TechnologyCard({ name, imageUrl }: technology) {
  return (
    <div className="TechnologyCard">
      <img className="TechnologyCard__image" src={imageUrl} alt={`${name} logo`} />
      <p className="TechnologyCard__name">{name}</p>
    </div>
  );
}
