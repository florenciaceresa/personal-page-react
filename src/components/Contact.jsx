import React from "react";
import './Contact.css';
import Footer from "./Footer";
import Formulario from "./Form";

function Contact() {
    const footerColor = {
        backgroundColor: '#e7c4bb', // Cambia este valor al color deseado
    };
    return(
        <div>
            <section className="section-contact">
            <div className="container-contact">
                <h2>CONTACTAME</h2>
                <p>Completá el formulario o contactame a través de mi email. ¡Tengo muchas ganas de seguir sumando nuevas experiencias y creciendo en este hermoso mundo IT! ¡Espero tu mensaje!</p>
                <div className="contact-item">
                        <div className="information">
                            <i className="bi bi-geo-alt-fill location"><a href="https://goo.gl/maps/CQzhxm2fiYZLmGFCA" target="_blank">&nbsp; Inriville, Córdoba, Argentina</a></i>
                            <i className="bi bi-envelope-fill email"><a href="mailto:soyflorenciaceresa@gmail.com" target="_blank">&nbsp; soyflorenciaceresa@gmail.com</a></i> 
                            <div>
                                <a href="https://www.linkedin.com/in/florencia-ceresa-20b76120a/" target="_blank"><i className="bi bi-linkedin fs-3 me-4"></i></a>
                                <a href="https://github.com/florenciaceresa" target="_blank"><i className="bi bi-github fs-3 me-4"></i></a>
                                <a href="https://www.behance.net/florenciaceresa" target="_blank"><i className="bi bi-behance fs-3"></i></a>
                            </div>
                        </div>
                        <Formulario/>
                    </div>
            </div>
        </section>
        <Footer style={footerColor}/>
        </div>
        
    )
}
export default Contact



