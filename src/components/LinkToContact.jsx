import React from "react";
import './LinkToContact.css'
import { Link } from "react-router-dom";
import BtnPrimary from "./BtnPrimary";

function LinkToContact() {
    return(
        <section className="section-linktocontact">
            <div className="container-linktocontact">
                <h2>CONTACTAME</h2>
                <p>Completá el formulario o contactame a través de mi email <a href="mailto:soyflorenciaceresa@gmail.com">soyflorenciaceresa@gmail.com</a>. ¡Espero tu mensaje!</p>
                <Link to="/contacto" className="btn-primary">Formulario</Link>
            </div>
        </section>
        

    );
}
export default LinkToContact