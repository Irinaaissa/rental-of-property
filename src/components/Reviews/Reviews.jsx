import React from 'react';


export default function Reviews({ review }) {
    return (
        <div>
            <div>
                <p>{review.reviewer_name}</p>
                <p>{review.reviewer_rating}</p>
                <p>{review.comment}</p>
            </div>

            <div>
                
            </div>


        </div>
    );
}
