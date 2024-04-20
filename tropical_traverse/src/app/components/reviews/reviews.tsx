'use client';
import "./reviews.css";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from "react";

export default function Page() {
    const reviews = [

        {
            name: 'Yohan',
            review: `I had an amazing experience with John, my driver for the day. 
            He was incredibly courteous and punctual. Not only did he arrive right on time, 
            but he also ensured that I reached my destination safely and comfortably. John's 
            professionalism and friendliness made my journey enjoyable. I highly recommend 
            him to anyone looking for a reliable and friendly driver!`,
        },
        {
            name: 'Issa',
            review: `I cannot thank Sarah enough for the fantastic service she provided as my driver. 
            From the moment she picked me up, I felt at ease. She was professional, courteous, 
            and went above and beyond to ensure that my journey was smooth and stress-free. Sarah's 
            attention to detail and friendly demeanor made me feel valued as a customer. I highly 
            recommend her to anyone in need of a reliable and professional driver.`,
        },
        {
            name: 'Jim',
            review: `I recently used Mark's driving service, and I must say, I was thoroughly impressed. 
            Mark was not only an excellent driver but also very knowledgeable about the area. 
            He provided great recommendations for places to visit and eat. Moreover, his car 
            was clean and well-maintained, providing a comfortable ride throughout the journey. 
            I would definitely book Mark again for my future travels.`,
        }
    ]

    const [value, setValue] = useState<number | null>(5);

    return (
        <>
        <div className="review-wrapper">
            <h3 className="reviews-title">Customer Reviews</h3>
            <div className="reviews">
                {reviews.map((review, i) =>(
                    <div className="rev-item" key={i}>
                        <div className="item-title-review">
                            <h2 className="client-name">{review.name}</h2>
                            <div className="rating-star"><Rating name="read-only" value={value} readOnly /></div>
                        </div>
                        <div className="item-content-review">{review.review}</div>
                    </div>
                    
                ))}
            </div>
        </div>
        </>
    );
  }
  