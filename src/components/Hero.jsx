import React from 'react';
import './Hero.css';
import BtnPrimary from './BtnPrimary';


function Hero() {
    return (
        <div>
            <section className='section-hero'>
             <div className="container-hero">
                <div className='hero-img'>
                    
                </div>
                <div className="info">
                <h1>Hola! Soy Florencia</h1>
                    <p className='description'>Diseñadora y desarrolladora web Frontend</p>
                    <p>Comencé mi carrera estudiando diseño gráfico e incursioné en el mundo del diseño de experiencias e interfaces y el desarrollo Frontend, que me permitió conocer lo que realmente me apasiona: el diseño y desarrollo de productos digitales.</p>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Hero;