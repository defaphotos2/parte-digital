import React, { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('user_9uUUAZ45Xf1Tnnh4WZfmX');
const Form = () => {

    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [loading, setLoading] = useState(false)
    const [estadoMensaje, setEstadoMensaje] = useState('')

    const sendEmail = () => {
        if (loading) {
            return;
        }
        setEstadoMensaje('')
        setLoading(true)
        emailjs.send("service_0maf8jx","template_03bdvne",{
            nombre,
            mensaje,
        }).then((response) => {
            console.log(response);
            setEstadoMensaje('exito')
            setLoading(false)
        }, (err) => {
            console.log(err);
            setLoading(false)
            setEstadoMensaje('error')
        });

    }

    return (
        <div data-aos="fade-up" className="form">
            <div className={`form__wrapper ${loading ? 'form__wrapper--loading' : ''}`}>
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
                    <button disabled={loading} onClick={() => sendEmail()} className="form__button">Enviar Tu Confirmación</button>
                </div>
            </div>
            <div className={`form__loader ${loading ? 'form__loader--active' : ''}`}>

            </div>

            <div className={`form__message ${estadoMensaje !== '' ? 'form__message--active' : ''}`}>
                <div className="form__title-message">
                    {estadoMensaje === 'exito' ? 'Mensaje Enviado' : 'No se ha enviado el mensaje'}
                </div>
                <div className="form__message-container">
                    <div className="form__message-icon-container">
                        <i className="form__message-icon fas fa-heart"></i>
                    </div>
                    <div className="form__message-text">
                        {estadoMensaje === 'exito' ? 'Muchas gracias por haber confirmado la invitación, nos estaremos viendo en la fiesta.' : 'Intentalo nuevamente'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;