import React, { useState } from 'react';
import css from "./WindowCard.module.css";
import ReviewsList from '../ReviewsList/ReviewsList';
import BookingForm from '../BookingForm/BookingForm';
import Features from '../Features/Features';
import { formatPrice } from '../Helpers/equipmentList';
import spritePath from '../../assets/react.svg';

export default function WindowCard({
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
    catalogs,
    onClose
}) {
    const [activeWin, setActiveWin] = useState(null);

    return (
        <div className={css.container}>
            <div>
                <h2>{name}</h2>
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
            <div className={css.price}>
                <p>{formatPrice(price)}</p>
            </div>
            <div className={css.img}>
                {gallery && gallery.length > 0 && gallery.map((image, index) => (
                    <img key={index} src={image} alt={`${name} image ${index + 1}`} className={css.galleryImage} />
                ))}
            </div>
            <div className={css.description}>
                <p>{description}</p>
            </div>
            <div className={css.details}>
                <ul className={css.list}>
                    <li>
                        <button className={css.listButton} onClick={() => setActiveWin('features')}>Features</button>
                    </li>
                    <li>
                        <button className={css.listButton} onClick={() => setActiveWin('reviews')}>Reviews</button>
                    </li>
                </ul>

                {activeWin === 'features' && (
                    <div className={css.featuresContainer}>
                        <div>
                            <Features
                                form={form}
                                length={length}
                                width={width}
                                height={height}
                                tank={tank}
                                consumption={consumption}
                                adults={adults}
                                children={children}
                                engine={engine}
                                transmission={transmission}
                                details={details}
                            />
                        </div>

                        <div>
                            <BookingForm />
                        </div>
                    </div>
                )}

                {activeWin === 'reviews' && (
                    <div className={css.reviewsContainer}>
                        {reviews && reviews.length > 0 ? (
                            <div className={css.reviewsList}>
                                <ReviewsList reviews={reviews} />
                            </div>
                        ) : (
                            <p>No reviews available.</p>
                        )}

                        <div>
                            <BookingForm />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
