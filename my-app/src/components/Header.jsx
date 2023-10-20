import React from 'react';
import MainButton from "./UI/buttons/MainButton";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <span className="app-name"><a href="#" className="header-btn-link">BlogBridges</a></span>
                <nav className="header-nav">
                    <ul className="header-nav-links">
                        <li><a href="#" className="header-btn-link">Посты</a></li>
                        <li><a href="#" className="header-btn-link">Найти друзей</a></li>
                        <li><a href="#" className="header-btn-link">Мои посты</a></li>
                        <li><a href="#" className="header-btn-link">О нас</a></li>
                    </ul>
                </nav>
                <div className="header-buttons">
                    <MainButton>Войти</MainButton>
                    <MainButton>Регистрация</MainButton>
                </div>
            </div>
        </header>
    );
};

export default Header;