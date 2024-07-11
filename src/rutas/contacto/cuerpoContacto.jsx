
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CuerpoContacto() {
    const form = useRef();
    const [status, setStatus] = useState(null); // null, 'success', 'error'
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        const formElements = form.current.elements;

        if (!formElements.from_name.value) {
            errors.from_name = <p style={{backgroundColor:"red", borderRadius:"5px"}}>El nombre es requerido</p>;
        }
        if (!formElements.email.value) {
            errors.email = 'Correo es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formElements.email.value)) {
            errors.email = <p style={{backgroundColor:"red", borderRadius:"5px"}}>El correo no es válido</p>;
        }
        if (!formElements.message.value) {
            errors.message = <p style={{backgroundColor:"red", borderRadius:"5px"}}>El mensaje es requerido</p>;
        }

        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        emailjs.sendForm('service_hbcf0pc', 'template_vjn5jkj', form.current, 'cgBID5GSQ7CE6GgyR')
            .then(() => {
                setStatus('success');
                setFormErrors({});
                form.current.reset();
            }).catch(() => setStatus('error'));
    };

    const renderNotification = () => {
        if (status === 'success') {
            setTimeout(() => setStatus(null), 5000);
            return (
                <div style={{ display: "flex", animation: "aparecer 5s 1 ease-in-out" }} className="result">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} fill={"green"}>
                        <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 style={{ fontWeight: "normal" }}>Tu Correo ha sido enviado con Éxito</h4>
                    <div style={{ backgroundColor: "green" }} className="barra"></div>
                </div>
            );
        } else if (status === 'error') {
            setTimeout(() => setStatus(null), 5000);
            return (
                <div style={{ display: "flex", animation: "aparecer 5s 1 ease-in-out" }} className="result">
                    <h4 style={{ fontWeight: "normal" }}>❌ Error al enviar el correo, intenta más tarde</h4>
                    <div style={{ backgroundColor: "red" }} className="barra"></div>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className="paraFondo">
                <hr style={{ marginTop: "0", zIndex: "1" }} />
                <img src="/mundo.png" alt="Mundo" />
                <div className="contactContainer">
                    <div className="form-container">
                        <form className="form" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" id="nombre" name="from_name" />
                                {formErrors.from_name && <span className="error">{formErrors.from_name}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo:</label>
                                <input type="text" id="email" name="email" />
                                {formErrors.email && <span className="error">{formErrors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea">Mensaje:</label>
                                <textarea name="message" id="textarea" rows="30" cols="50"></textarea>
                                {formErrors.message && <span className="error">{formErrors.message}</span>}
                            </div>
                            <button className="boton" style={{ width: "150px", height: "40px", marginTop: "0px", color: "white", fontFamily: "inherit" }} type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="contactInfo">
                        <h1>Contáctanos</h1>
                        <hr />
                        <p>Mantente informado de cualquier novedad y asegúrate de no perderte ningún detalle importante.</p>
                        <hr />
                        <div className="separar">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} fill={"none"}>
                                <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <h2>Ubicación</h2>
                            <p>Tv. 21 Bis #60-35, Bogotá</p>
                        </div>
                        <div className="separar">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} fill={"none"}>
                                <path d="M9.1585 5.71223L8.75584 4.80625C8.49256 4.21388 8.36092 3.91768 8.16405 3.69101C7.91732 3.40694 7.59571 3.19794 7.23592 3.08785C6.94883 3 6.6247 3 5.97645 3C5.02815 3 4.554 3 4.15597 3.18229C3.68711 3.39702 3.26368 3.86328 3.09497 4.3506C2.95175 4.76429 2.99278 5.18943 3.07482 6.0397C3.94815 15.0902 8.91006 20.0521 17.9605 20.9254C18.8108 21.0075 19.236 21.0485 19.6496 20.9053C20.137 20.7366 20.6032 20.3131 20.818 19.8443C21.0002 19.4462 21.0002 18.9721 21.0002 18.0238C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8362C20.0826 15.6393 19.7864 15.5077 19.194 15.2444L18.288 14.8417C17.6465 14.5566 17.3257 14.4141 16.9998 14.3831C16.6878 14.3534 16.3733 14.3972 16.0813 14.5109C15.7762 14.6297 15.5066 14.8544 14.9672 15.3038C14.4304 15.7512 14.162 15.9749 13.834 16.0947C13.5432 16.2009 13.1588 16.2403 12.8526 16.1951C12.5071 16.1442 12.2426 16.0029 11.7135 15.7201C10.0675 14.8405 9.15977 13.9328 8.28011 12.2867C7.99738 11.7577 7.85602 11.4931 7.80511 11.1477C7.75998 10.8414 7.79932 10.457 7.90554 10.1663C8.02536 9.83828 8.24905 9.56986 8.69643 9.033C9.14586 8.49368 9.37058 8.22402 9.48939 7.91891C9.60309 7.62694 9.64686 7.3124 9.61719 7.00048C9.58618 6.67452 9.44362 6.35376 9.1585 5.71223Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <h2>Teléfono</h2>
                            <p>+57 601 755 9135</p>
                        </div>
                        <div className="separar">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} fill={"none"}>
                                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            <h2>Correo</h2>
                            <p>fcv@fedevoleicol.com</p>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.695826670511!2d-74.07306639020997!3d4.648238042092215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a499323a2f9%3A0xd23afd5e6a3a33c1!2sFederaci%C3%B3n%20colombiana%20De%20Voleibol!5e0!3m2!1sen!2sco!4v1719888232558!5m2!1sen!2sco" width="80%" height="400px" style={{ border: "0", borderRadius: "10px", marginBlock: "20px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {renderNotification()}
        </>
    );
}
