import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="contact-header">Where to Find Us:</h2>
                <div className="contact-info">
                    <i className="ai-location"></i>
                    <a href="#">123 Main St.<br />Blueville, CA 112233</a>
                </div>
                <div className="contact-info">
                    <i className="ai-phone"></i>
                    <a href="#">555-555-5555</a>
                </div>
                <div className="contact-info">
                    <i className="ai-send"></i>
                    <a href="#">info@coffeehouse.com</a>
                </div>
                <div className="social-media">
                    <a href="#"><i className="ai-facebook-fill"></i></a>
                    <a href="#"><i className="ai-instagram-fill"></i></a>
                    <a href="#"><i className="ai-twitter-fill"></i></a>
                    <a href="#"><i className="ai-pinterest-fill"></i></a>
                </div>
            </div>
        </section>
    )
}