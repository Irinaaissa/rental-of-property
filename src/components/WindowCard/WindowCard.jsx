import React from 'react';
import css from "./WindowCard.module.css";

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
}) {
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

                <li> <button className={css.listButton}>Features</button></li>
                <li> <button className={css.listButton}>Reviews</button></li>
            </ul>
            </div>
        </div>
    );
}
