import { useState } from 'react';
import BoardList from "../BoardList/BoardList";
import cardsData from '../Data/initialContacts.json';
import css from "./Board.module.css";

export default function Board() {
    const [visibleCardsCount, setVisibleCardsCount] = useState(4); // Початкова кількість видимих карток
    const [cards] = useState(cardsData);
    const visibleCards = cards.slice(0, visibleCardsCount); // Вибираємо тільки видимі картки

    const handleLoadMore = () => {
        setVisibleCardsCount(prevCount => prevCount + 4); // Збільшуємо кількість видимих карток на 4
    };

    return (
        <div className={css.board}>
            <BoardList cards={visibleCards} />
            {visibleCardsCount < cards.length && (
                <button onClick={handleLoadMore}>Дивитися ще</button>
            )}
        </div>
    );
}
