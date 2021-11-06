import React, { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('user_9uUUAZ45Xf1Tnnh4WZfmX');
const Form = () => {

    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')

    const sendEmail = () => {
        emailjs.send("service_0maf8jx","template_03bdvne",{
            nombre,
            mensaje,
        }).then((response) => {
            console.log(response);
        }, (err) => {
            console.log(err);
        });
    }

    return (
        <div data-aos="fade-up" className="form">
            <div className="form__title">
                Déjanos Tu Confirmación
            </div>
            <div className="form__container">
                
                <div className="form__input-container">
                    <label className="form__label">¿Cuál es tu nombre?</label>
                    <input className="form__input" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form__input-container">
                    <label className="form__label">Escríbenos un mensaje</label>
                    <textarea className="form__text-area" onChange={(e) => setMensaje(e.target.value)} />
                </div>
                <button onClick={() => sendEmail()} className="form__button">Enviar Tu Confirmación</button>
            </div>
        </div>
    );
};

export default Form;