import React, { useState } from 'react';
import css from "./WindowCard.module.css";
import ReviewsList from '../ReviewsList/ReviewsList';
import BookingForm from '../BookingForm/BookingForm';
import Features from '../Features/Features';

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
                <p>{rating}</p>
                <p>({reviews.length} Reviews)</p>
                <p>{location}</p>
            </div>
            <div className={css.price}>
                <p>{price}</p>
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
