import React from "react";
import './LinkToContact.css'
import { Link } from "react-router-dom";
import BtnPrimary from "./BtnPrimary";

function LinkToContact() {
    return(
        <section className="section-linktocontact">
            <div className="container-linktocontact">
                <h2>CONTACT ME</h2>
                <p>Complete the form or contact me through my email <a href="mailto:soyflorenciaceresa@gmail.com">soyflorenciaceresa@gmail.com</a>. Wait for your message!</p>
                <Link to="/contacto" className="btn-primary">Form</Link>
            </div>
        </section>
        

    );
}
export default LinkToContact