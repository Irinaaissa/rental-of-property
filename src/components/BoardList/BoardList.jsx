import React from 'react';
import css from './BoardList.module.css';
import Card from '../Card/Card.jsx';

export default function BoardList({ catalogs }) {
  // if (!catalogs || catalogs.length === 0) { // Додайте перевірку на наявність інформації в catalogs
    // console.error('No catalogs provided to BoardList');
    // return null;
  // }

  return (
    <div className={css.cardList}>
      <ul className={css.list}>
        {catalogs.map(catalog => (
          <li className={css.item} key={catalog._id}>
            <Card {...catalog} /> {/* Передайте кожен елемент каталогу як окремий елемент Card */}
          </li>
        ))}
      </ul>
    </div>
  );
}
