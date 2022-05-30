import React from "react";

export default function Offerings() {
    return (
        <section id="offerings">
            <div className="container">
                <div className="menu">
                    <img className="offering-img" src="https://user-images.githubusercontent.com/65358991/170901260-bef9f2d0-c5d8-4e7a-bdbc-a5a9c9b457f2.png" alt="coffee" />
                    <img className="offering-img" src="https://user-images.githubusercontent.com/65358991/170901270-fd90e1d9-c9ec-4669-8623-273cb1739586.png" alt="tea" />
                    <div className="menu-content">
                        <img src="https://user-images.githubusercontent.com/65358991/170889544-3900cb98-77ab-4be5-bd70-a665f57fd6da.png" alt="tea cup" />
                        <p>Our signature house blend coffees and organic teas comes in three sizes!</p>
                    </div>
                </div>

                <div className="products">
                    <img className="offering-img" src="https://user-images.githubusercontent.com/65358991/170901262-8c36a73f-2194-4da0-9882-5f95c9fff8e1.png" alt="pastry" />
                    <img className="offering-img" src="https://user-images.githubusercontent.com/65358991/170901267-c2385538-d9ac-4052-b2a4-2cffe2ddc884.png" alt="sandwich" />
                    <div className="products-content">
                        <img src="https://user-images.githubusercontent.com/65358991/170889545-4ef9bba1-2ab7-48ac-b364-b6587a64a088.png" alt="tea cup" />
                        <p>We offer a variety of organic coffees, teas, homemade sandwiches and pastries - using ingredients from local farms!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}