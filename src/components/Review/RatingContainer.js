import React from 'react';
import './Rating.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const RatingContainer = ({ review, index }) => {
    const { name, description, rating } = review;
    return (
        <div className='servicing-container pb-3 card w-100 m-2 d-flex justify-content-center'>


            <div className="card-body">

                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-container"
                    fullSymbol="fas fa-star icon-container"
                />
            </div>
        </div>
    );
};

export default RatingContainer;