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
                    <img src={imagen} alt="Florencia Ceresa"/>
                </div>
                <div className="info">
                    <h1>Hi! I am Florencia</h1>
                    <p className='description'>Designer and frontend developer</p>
                    <p>I am passionate about technology and design in all its forms. I started my studies in graphic design and entered the world of experience and interface design and Frontend development, which allowed me to learn what I really like: designing and developing digital products.</p>
                    <p>In this place you will learn a little about me and the things I do, welcome!</p>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Hero;