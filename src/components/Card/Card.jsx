import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, deleteFromFavorite } from '../../redux/catalog/slice'; // Імпортуйте action
import css from "./Card.module.css";
import spritePath from '../../assets/react.svg';
import ModalWindow from '../ModalWindow/ModalWindow';
import { formatPrice, iconCard } from '../Helpers/equipmentList';
import { selectFavoriteIds } from '../../redux/catalog/selectors'; // Імпортуйте селектор
import EllipsisText from '../EllipsisText/EllipsisText';

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
    description,
    details,
    gallery,

    reviews,
}) {

    const dispatch = useDispatch();
    const favoriteIds = useSelector(selectFavoriteIds);
    const isFavorite = favoriteIds.includes(_id);

    const handleClick = () => {
        if (isFavorite) {
            dispatch(deleteFromFavorite(_id));
        } else {
            dispatch(addToFavorite(_id));
        }
    };

    const [isModalActive, setModalActive] = useState(false);

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
                        <p>{formatPrice(price)}</p>
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
                    <p>
                        <svg
                            className={css.icon}
                            width="16"
                            height="16"
                            aria-label="btn icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <use href={`${spritePath}#icon1-star`} />
                        </svg>
                        {rating}
                    </p>
                    <p className={css.reviews}>({reviews.length} Reviews)</p>
                    <p className={css.location}>
                        <svg
                            className={css.icon}
                            width="16"
                            height="16"
                            aria-label="location icon"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <use href={`${spritePath}#map-pin`} />
                        </svg>
                        {location}
                    </p>
                </div>

                <EllipsisText
                    text={description}
                    maxLines={1}
                    className={css.text}
                />
                <div>
                    <ul className={css.list}>
                        {iconCard.map((item, index) => (
                            (item.key in details || ['adults', 'children', 'engine', 'transmission'].includes(item.key)) &&
                            (details[item.key] !== 0 || item.key === 'adults' || item.key === 'children' || item.key === 'engine' || item.key === 'transmission') && (
                                <li key={index}>
                                    <button className={css.listButton}>
                                        <svg
                                            className={css.icon}
                                            width="16"
                                            height="16"
                                            aria-label="btn icon"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <use href={`${spritePath}#${item.icon}`} />
                                        </svg>
                                        {(item.key === 'airConditioner' || item.key === 'kitchen')
                                            ? (details[item.key] > 0 ? item.label : '')
                                            : (details[item.key] || (item.key === 'adults' && adults) || (item.key === 'children' && children) || (item.key === 'engine' && engine) || (item.key === 'transmission' && transmission))}
                                        {(item.key !== 'airConditioner' && item.key !== 'kitchen') && item.label}
                                    </button>
                                </li>
                            )
                        ))}
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
