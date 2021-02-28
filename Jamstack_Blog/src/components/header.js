import React from 'react';

export default () => (
    <header id="header">
        <nav className="nav">
        <h1 className="nav__title">
            <a href="/">TITLE</a>
        </h1>
        <ul className="nav__items">
            <li className="nav__items__item">
                <a href="/profile">PROFILE</a>
            </li>
            <li className="nav__items__item">
                <a href="/blog">BLOG</a>
            </li>
            <li className="nav__items__item">
                <a href="/contact">CONTACT</a>
            </li>
        </ul>
        </nav>
    </header>
)