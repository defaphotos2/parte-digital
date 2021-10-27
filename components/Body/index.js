import React from 'react';
import ReactCountDown from 'react-countdown'

const Body = () => {
    return (
        <div className="body">
            <div data-aos="fade-up" className="body__info">
                <div className="body__title">
                    Queridos Familiares y Amigos
                </div>
                <div className="body__thanks-icon-container">
                    <i className="body__thanks-icon fas fa-heart"></i>
                </div>
                <div className="body__thanks">
                    Estamos muy contentos de invitarlos a nuestra ceremonia de matrimonio que se 
                    realizara el día 13 de febrero del 2022 en el centro de eventos La Casita de Cuentos ubicada 
                    en la comuna de Buin, en donde podrán disfrutar de la celebración llena de felicidad junto con nosotros.
                </div>
            </div>


            <div data-aos="fade-up" className="body__gifts">
                <div className="body__title">
                    ¿Quieres hacer un regalo?
                </div>
                <div className="body__gift-icon-container">
                    <i className="body__thanks-icon fas fa-gift"></i>
                </div>
                <div className="body__gifts-text">
                    Puedes darnos un pequeño regalo monetario realizando un aporte en nuestra cuenta corriente, te lo agradeceremos mucho!!!
                </div>
                <div className="body__bank">
                    <div className="body__bank-field">
                        <div className="body__bank-text">Nombre Titular:</div>
                        <div className="body__bank-data">Daniel Enrique Farias Aravena</div>
                    </div>
                    <div className="body__bank-field">
                        <div className="body__bank-text">Tipo Cuenta:</div>
                        <div className="body__bank-data">Corriente</div>
                    </div>
                    <div className="body__bank-field">
                        <div className="body__bank-text">Nro. Cuenta:</div>
                        <div className="body__bank-data">73661978</div>
                    </div>
                    <div className="body__bank-field">
                        <div className="body__bank-text">Banco:</div>
                        <div className="body__bank-data">Santander</div>
                    </div>
                    
                    
                    <div className="body__bank-field">
                        <div className="body__bank-text">RUT:</div>
                        <div className="body__bank-data">19.572.663-9</div>
                    </div>
                    <div className="body__bank-field">
                        <div className="body__bank-text">Correo:</div>
                        <div className="body__bank-data">defaphotos@gmail.com</div>
                    </div>

                </div>
            </div>

            <div data-aos="fade-up" className="body__location">
                <div className="body__title">
                    Como Llegar
                </div>
                <img className="body__image" src="/static/img/como-llegar.png" />
            </div>
        </div>
    );
};

export default Body;