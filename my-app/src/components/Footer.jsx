import React from 'react';
import MainButton from "./UI/buttons/MainButton";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-col">
                    <div className="footer-nav">
                        <ul className="footer-nav-links">
                            <li className="footer-links-list"><a href="#">Поддержка</a></li>
                            <li className="footer-links-list"><a href="#">Контакты</a></li>
                            <li className="footer-links-list"><a href="#">Instagram</a></li>
                            <li className="footer-links-list"><a href="#">Telegram</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <div className="footer-nav-text">
                            <h4 className="footer-title">Новости</h4>
                            <p className="footer-text">Подписывайся и первым узнавай о новых постах</p>
                            <MainButton>Подписаться на рассылку</MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;