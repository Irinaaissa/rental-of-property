import React from 'react';
import css from "./StarRating.module.css";

const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div className={css.starRating}>
            {[...Array(totalStars)].map((star, index) => {
                const starClass = index < rating ? css.filledStar : css.emptyStar;
                return <span key={index} className={`${css.star} ${starClass}`}>&#9733;</span>;
            })}
        </div>
    );
};

export default StarRating;
