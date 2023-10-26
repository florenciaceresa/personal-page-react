import React from 'react';
import './Hero.css';
import BtnPrimary from './BtnPrimary';
import imagen from '../assets/img-hero.svg';



function Hero() {
    return (
        <div>
            <section className='section-hero'>
             <div className="container-hero">
                <div className='hero-img'>
                    <img src={imagen} alt="Florencia Ceresa" />
                </div>
                <div className="info">
                    <h1>Hola! Soy Florencia</h1>
                    <p className='description'>Diseñadora y desarrolladora web Frontend</p>
                    <p>Me apasiona la tecnología y el diseño en todas sus formas. Comencé mis estudios en diseño gráfico e incursioné en el mundo del diseño de experiencias e interfaces y el desarrollo Frontend, que me permitió conocer lo que realmente me gusta: diseñar y desarrollar productos digitales.</p>
                    <p>En este espacio vas a conocer un poco sobre mí y sobre las cosas que hago, ¡bienvenido!</p>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Hero;