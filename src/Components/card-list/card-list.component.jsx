import React from 'react';
import { CardListContainer } from './card-list.styles';
import { Card } from '../card/card.component';

export const CardList = (props) => {
  return (
    <CardListContainer>
      {props.monsters.map((monster, i) => (
        <Card key={i} monster={monster} />
      ))}
    </CardListContainer>
  );
};
