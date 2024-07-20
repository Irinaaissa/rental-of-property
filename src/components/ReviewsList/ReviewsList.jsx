import Reviews from "../Reviews/Reviews";
import css from './ReviewsList.module.css';

export default function ReviewsList({ reviews }) {
    return (
        <div>
            <div className={css.list}>
                {reviews.map((review, index) => (
                    <Reviews key={index} review={review} />
                )

                )}
            </div>
        </div>
    )
}