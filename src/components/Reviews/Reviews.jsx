import React from 'react';
import css from "./Reviews.module.css";
import StarRating from '../StarRating/StarRating';

export default function Reviews({ review }) {
    const firstLetter = review.reviewer_name.charAt(0).toUpperCase();

    return (
        <div className={css.reviewContainer}>
            <div className={css.avatarContainer}>
                <div className={css.avatar}>
                    {firstLetter}
                </div>
                <div>
                    <p className={css.text}>{review.reviewer_name}</p>
                    <StarRating rating={review.reviewer_rating} />
                </div>
            </div>
            <div>
                <p>{review.comment}</p>
            </div>
        </div>
    );
}
