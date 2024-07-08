import { useState } from 'react';
import BoardList from "../BoardList/BoardList";
import cardsData from '../Data/initialContacts.json';
import css from "./Board.module.css";

export default function Board() {
    const [visibleCardsCount, setVisibleCardsCount] = useState(4);
    const [cards] = useState(cardsData);
    const visibleCards = cards.slice(0, visibleCardsCount);

    const handleLoadMore = () => {
        setVisibleCardsCount(prevCount => prevCount + 4);
    };

    return (
        <div className={css.board}>
            <BoardList cards={visibleCards} />
            {visibleCardsCount < cards.length && (
                <div className={css.buttonContainer}>
                    <button className={css.buttonLoad} onClick={handleLoadMore}>
                        Load more
                    </button>
                </div>
            )}
        </div>
    );
}
