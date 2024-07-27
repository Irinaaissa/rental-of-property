import React from 'react';
import css from './BoardList.module.css';
import Card from '../Card/Card.jsx';

export default function BoardList({ catalogs }) {
    return (
        <div className={css.cardList}>
            <ul className={css.list}>
                {catalogs.map(catalog => (
                    <li className={css.item} key={catalog._id}>
                        <Card {...catalog} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
