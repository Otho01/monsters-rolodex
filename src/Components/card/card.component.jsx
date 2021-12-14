import React from 'react';
import { CardWrapper } from './card.styles';

export const Card = (props) => (
  <CardWrapper>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </CardWrapper>
);
