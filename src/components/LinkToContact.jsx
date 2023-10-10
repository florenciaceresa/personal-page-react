import React from "react";
import './LinkToContact.css'
import { Link } from "react-router-dom";

function LinkToContact() {
    return(
        <section className="section-linktocontact">
            <div className="container-linktocontact">
                <h2>Enviame un mensaje!</h2>
                <Link to="/contacto">Enviar mensaje</Link>
            </div>
        </section>
        

    );
}
export default LinkToContact