import React, { useState } from "react";

export default function CallToAction() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function onChangeFirstName(event: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(event.target.value);
    }
    function onChangeLastName(event: React.ChangeEvent<HTMLInputElement>) {
        setLastName(event.target.value);
    }
    function onChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await userCallback(); //triggers the callback that would usually be an asynchronous function
    }

    async function userCallback() {
        alert(`Thanks for signing up ${firstName}!`);
        setFirstName("");
        setLastName("");
        setEmail("");
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

                        <form onSubmit={onSubmit}>
                            <div className="name-input">
                                <input type="text" 
                                    name="first name"
                                    id="first-name"
                                    onChange={onChangeFirstName}
                                    value={firstName} 
                                    placeholder="First Name"
                                    required />
                                <input type="text" 
                                    name="last name"
                                    id="last-name"
                                    onChange={onChangeLastName}
                                    value={lastName} 
                                    placeholder="Last Name"
                                    autoComplete="none"
                                    required />
                            </div>
                            <input type="email" 
                                name="email"
                                className="email-input"
                                id="email"
                                onChange={onChangeEmail}
                                value={email} 
                                placeholder="Email Address"
                                autoComplete="none"
                                required />
                            <br />
                            <button type="submit" 
                                name="Submit"
                                className="submit-btn"
                            >I love Free Food!</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}