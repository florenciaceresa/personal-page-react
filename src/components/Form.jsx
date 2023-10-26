import React, { useRef, useState, useEffect} from "react";
import emailjs from '@emailjs/browser'
import './Form.css'

const Form = () => {

    const refForm = useRef();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [messageErrorMessage, setMessageErrorMessage] = useState("");



    const handleSubbmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const message = event.target.message.value;


        if (!validateEmail(email)) {
            setEmailErrorMessage('El correo electrónico no es válido.');
            return;
        } else {
            setEmailErrorMessage('');
        }

        if (message.length >= 250) {
            setMessageErrorMessage('El mensaje no debe tener más de 250 caracteres.');
            return;
        } else {
            setMessageErrorMessage('');
        }
        

        // Limpiar el mensaje de error si no hay errores
        setEmailErrorMessage("");
        setMessageErrorMessage("");

        const serviceId = "service_7kpjogu"
        const templateId = "template_cosvxy3"
        const apikey = "0_15aayPoLLVqQgzc"

        

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then(result => {
            console.log(result.text);
            setIsFormSubmitted(true);
            setSubmitMessage('¡El formulario se ha enviado, muchas gracias!');
            event.target.reset(); // Restablece el formulario

        })
        .catch(error => {
            console.error(error);
            setIsFormSubmitted(true);
            setSubmitMessage('Ha ocurrido un error al enviar el formulario.');
        });
}

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};


// Utiliza useEffect para eliminar el mensaje después de 5 segundos
useEffect(() => {
    if (isFormSubmitted) {
        const timer = setTimeout(() => {
            setIsFormSubmitted(false);
            setSubmitMessage('');
        }, 3000);

        return () => clearTimeout(timer);
    }
}, [isFormSubmitted]);



return (
    <div>
        <form ref={refForm} action="" onSubmit={handleSubbmit} className="form">
            <div>
                <label htmlFor="name">Nombre completo</label>
                <input type="text" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" required />
                {emailErrorMessage && (
                        <div className="error-message">{emailErrorMessage}</div>
                    )}
            </div>
            <div className="input-message">
                <label htmlFor="message">Mensaje</label>
                <input type="text" name="message" required />
                {messageErrorMessage && (
                        <div className="error-message">{messageErrorMessage}</div>
                    )}
            </div>
            <button className="btn-primary" type="submit">Enviar</button>
        </form>
        {isFormSubmitted && (
            <div className="submit-message">{submitMessage}</div>
        )}
    </div>
);
}

export default Form