import React from "react";

export default function NavBar() {
    return (
        <section id="navbar">
            <ul>
                <li><a href="#" className="menu">menu</a></li>
                <li><a href="#" className="home"><img src="https://user-images.githubusercontent.com/65358991/170405348-83059607-8530-43bf-9887-6a175293109c.png" alt="logo" /></a></li>
                <li><a href="#" className="contact">contact</a></li>
                <li className="mobile-menu"><i className="ai-three-line-horizontal"></i></li>
            </ul>
        </section>
    )
}