import React from "react";

export default function CallToAction() {
    
    function handleSubmit() {

    }

    return (
        <section id="callToAction">
            <div className="container">
                <div className="img-wrapper">
                    <img src="https://user-images.githubusercontent.com/65358991/170585737-f02cf6a4-2d71-4f53-8a4e-6f26e884a9fe.jpg" alt="pastry picture" />
                </div>

                <div className="form-wrapper">
                    <div className="form-container">
                        <div className="promo-message">
                            <h2>Don't miss out on promotions and events!</h2>
                            <p>Sign up for our monthly newsletter and receive a downloadable coupon for a FREE housemade scone!</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}