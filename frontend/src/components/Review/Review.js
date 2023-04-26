import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
import "./Review.css"


const Review = (props) => {
  const {productId} = props;
  const [reviews, setReviews] = useState([])
  const [reviewLoading, setReviewLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:7000/api/productReview/${productId}`).then((response) => {
      setReviews(response.data);
    });
  }, []);




  return (
    <div class="container">
<<<<<<< Updated upstream
    <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h4 class="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">Not Yet Convinced?</h4>
        <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">Read Customer Reviews</h1>
=======

      <div className='h2 d-flex justify-content-start'>Customers Feedbacks!</div>
      <div>
        {reviewLoading && <div>Loading</div>}
        {!reviewLoading && (
          <div class="grid-container">
            {reviews.map((review) => (
              <div className='row my-4 bg-light text-dark h6 d-flex direction-col justify-content-between align-items-center border p-2'>
                <div className='col-sm d-flex justify-content-center'>
                  {review.userid}
                </div>
                <div className='col-sm d-flex justify-content-center'>
                  {review.review}
                </div>
                <div className='col-sm d-flex justify-content-center'>
                  {moment(review.review_date).format("YYYY/MM/DD hh:mm:ss", true)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

>>>>>>> Stashed changes
    </div>
  )
}

export default Review
