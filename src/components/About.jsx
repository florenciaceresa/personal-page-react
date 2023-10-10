import React from 'react';
import './About.css';
import BtnPrimary from './BtnPrimary';
import imagen from '../assets/fotoperfil1.png';
import LinkToContact from './LinkToContact';

function About() {
    return (
        <div>
            <section className='section-about' id='about'>
             <div className="container-about">
                <div className="about-info">
                <h2>SOBRE MÍ</h2>
                    <p>¡Hola! Soy Florencia, diseñadora y desarrolladora web Frontend, apasionada de la tecnología y el diseño en todas sus formas.</p>
                    <p>Comencé mi carrera estudiando diseño gráfico e incursioné en el mundo del diseño de experiencias e interfaces y el desarrollo Frontend, que me permitió conocer lo que realmente me apasiona: el diseño y desarrollo de productos digitales.</p>
                    <p>Me encantan las infinitas oportunidades que ofrece la tecnología, el aprendizaje continuo y el poder fusionar todos los conocimientos adquiridos.</p>
                    <BtnPrimary/>
                </div>
                <div className='about-img'>
                    <img src={imagen} alt="Florencia Ceresa" />
                </div>
            </div>
        </section>
        <LinkToContact/>
        </div>
    );
}
export default About;