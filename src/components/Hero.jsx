import React from 'react';
import './Hero.css'; 
import Skills from './Skills';
import LinkToContact from './LinkToContact';

function Hero() {
  return (
    <section>
      <div className="hero" id='home'>
      <div className="hero-content">
      </div>
    </div>
    <Skills/>
    <LinkToContact/>



    </section>
  );
}

export default Hero;