import React from 'react';
import css from './BoardList.module.css';
import Card from '../Card/Card.jsx';

export default function BoardList({ cards }) {
  if (!cards) {
    console.error('No cards provided to BoardList');
    return null;
  }

  return (
    <div className={css.cardList}>
      <ul className={css.list}>
        {cards.map(card => (
          <li className={css.item} key={card._id}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
}