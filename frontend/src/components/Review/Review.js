import React from 'react'
import "./Review.css"
import moment from "moment";

const Review = ({reviewLoading, reviews}) => {
  return (
    <div class="container">

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

        </div>
  )
}

export default Review
