import React from 'react';
import Card from './Card';
import { pick } from 'ramda'

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((_, i) => (
          <Card
            key={i}
            {...pick(['id', 'name', 'email'], robots[i])}
            />
        ))
      }
    </div>
  );
}

export default CardList;