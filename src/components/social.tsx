import React from "react";

const reviews = [
    {
        name: "Sarah Jane",
        review: "I found my neighborhood's go-to spot! The atmosphere is cozy and welcoming, the coffee is incredible and pastries are the cherry on top. I love coming here with friends and family for relaxing afternoons.",
        image: "https://user-images.githubusercontent.com/65358991/170904756-dbff2bdd-5a8a-4c92-a6f1-646ea66863f0.png"
    },
    {
        name: "Rachel Smith",
        review: "Coffee House is truly a community gem! It’s intimate, comfortable and I’m able to accomplish my remote work or meet-up with clients in this peaceful setting. All with the wonderful aroma of their quality coffee.",
        image: "https://user-images.githubusercontent.com/65358991/170904767-f384a18f-77ab-409b-a82f-b7d77d030d1f.png"
    }
]

export default function Social() {
    return (
        <section id="social">
            <div className="container">
                <h2 className="social-header">We love serving our community! Nice things people are saying:</h2>

                <div className="social-content">

                    {
                        reviews.map(review => (
                            <div className="review">
                                <img src={review.image} alt={review.name} />
                                <p>"{review.review}"<br /><br />-{review.name}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}