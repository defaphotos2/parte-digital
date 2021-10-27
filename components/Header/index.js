import React from 'react';
import ReactCountDown from 'react-countdown'

const Header = () => {
    return (
        <div className="header">
            <div className="header__image-container">
                <img className="header__image" src="/static/img/image.jpeg" />
            </div>
            <div className="header__title">
                MICHEL HIDALGO & DANIEL FARIAS
            </div>
            <div className="header__principal-info">
                <div className="header__date">
                    <div className="header__date-icon-container">
                        <i className="header__date-icon far fa-calendar"></i>
                    </div>
                    <div className="header__date-text">
                        13 de Febrero
                    </div>
                </div>
                <div className="header__location">
                    <div className="header__location-icon-container">
                        <i className="header__location-icon fas fa-home"></i>
                    </div>
                    <div className="header__location-text">
                        La Casita de Cuentos
                    </div>
                </div>
            </div>

            <div className="header__countdown-container">
                <div className="header__countdown-title">Faltan</div>
                <ReactCountDown className="header__countdown" date={new Date('2022/02/13')} />
                <div className="header__countdown-title">Dias</div>
            </div>
        </div>
    );
};

export default Header;