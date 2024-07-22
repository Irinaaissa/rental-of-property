import React, { useState, useEffect } from 'react';
import css from "./ModalWindow.module.css";
import spritePath from '../../assets/react.svg';
import WindowCard from '../WindowCard/WindowCard';
import cardsData from '../Data/initialContacts.json';

export default function ModalWindow({ handleModalClose, activeCardId }) {
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        const card = cardsData.find(card => card._id === activeCardId);
        setActiveCard(card);
    }, [activeCardId]);

    useEffect(() => {
        // Додаємо обробник події для закриття модального вікна при натисканні клавіші Escape
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleModalClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Видаляємо обробник події при демонтажі компонента
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleModalClose]);

    const handleCloseModal = () => {
        handleModalClose();
    };

    return (
        <div className={css.fixedOverlay} onClick={handleCloseModal}>
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
                <div className={css.modalContainer}>
                    <div className={css.button}>
                        <button
                            className={css.btn}
                            type="button"
                            onClick={handleCloseModal}
                        >
                            <svg
                                className={css.icon}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                            >
                                <use href={`${spritePath}#icon-cross`} />
                            </svg>
                        </button>
                    </div>
                    <div className={css.img}>
                        {activeCard && <WindowCard {...activeCard} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
