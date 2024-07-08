import React, { useState, useEffect } from 'react';
import css from "./Card.module.css";
import spritePath from '../../assets/react.svg';
import ModalWindow from '../ModalWindow/ModalWindow';

export default function Card({
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
}) {
    const [isModalActive, setModalActive] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (storedFavorites.includes(_id)) {
            setIsFavorite(true);
        }
    }, [_id]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            if (!storedFavorites.includes(_id)) {
                storedFavorites.push(_id);
            }
        } else {
            const index = storedFavorites.indexOf(_id);
            if (index !== -1) {
                storedFavorites.splice(index, 1);
            }
        }
        localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    }, [isFavorite, _id]);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleModalOpen = () => {
        setModalActive(true);
    };

    const handleModalClose = () => {
        setModalActive(false);
    };

    return (
        <div className={css.card}>
            <div>
                {gallery && gallery.length > 0 && (
                    <img src={gallery[0]} alt={`${name} image`} className={css.galleryImage} />
                )}
            </div>
            <div className={css.cardInfo}>
                <div className={css.name}>
                    <h2>{name}</h2>
                    <div className={css.price}>
                        <p>{price}</p>
                        <button onClick={handleClick} className={css.iconButton}>
                            <svg
                                className={`${css.icon} ${isFavorite ? css.favorite : ''}`}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <use href={`${spritePath}#icon-heart`} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={css.rating}>
                    <p>{rating}</p>
                    <p>(Reviews)</p>
                    <p>{location}</p>
                </div>
                <p className={css.text}>The pictures shown here are example vehicles of the respective.</p>
                <div>
                    <ul className={css.list}>
                        <li><button className={css.listButton}>
                            <svg
                                className={css.icon}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <use href={`${spritePath}#icon-Vertical-container`} />
                            </svg>
                            {adults} adults</button></li>
                        <li><button className={css.listButton}><svg
                            className={css.icon}
                            width="16"
                            height="16"
                            aria-label="btn icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <use href={`${spritePath}#icon-Container`} />
                        </svg>{transmission}</button></li>
                        <li><button className={css.listButton}>
                            <svg
                                className={css.icon}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <use href={`${spritePath}#icon-Vertical-container-1`} />
                            </svg>
                            {engine}</button></li>
                        <li><button className={css.listButton}>
                            <svg
                                className={css.icon}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <use href={`${spritePath}#icon-Horizontal-container`} />
                            </svg>
                            {details.kitchen} kitchen</button></li>
                        <li><button className={css.listButton}><svg
                            className={css.icon}
                            width="16"
                            height="16"
                            aria-label="btn icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <use href={`${spritePath}#icon-beds`} />
                        </svg>{details.beds} beds</button></li>
                        <li><button className={css.listButton}>
                            <svg
                                className={css.icon}
                                width="16"
                                height="16"
                                aria-label="btn icon"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <use href={`${spritePath}#icon-Route`} />
                            </svg>
                            {details.airConditioner} AC</button></li>
                    </ul>
                </div>
                <button className={css.button} type="button" onClick={handleModalOpen}>Show more</button>
            </div>
            <div>
                {isModalActive && (
                    <ModalWindow handleModalClose={handleModalClose} activeCardId={_id} />
                )}
            </div>
        </div>
    );
}
