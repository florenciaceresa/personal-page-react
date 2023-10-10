import React from 'react';
import './Home.css'; 
import Skills from './Skills';
import LinkToContact from './LinkToContact';
import Hero from './Hero';
import Footer from './Footer';

function Home() {
  return (
    <section>
      <div className="hero" id='home'>
      <div className="hero-content">
        <Hero/>
      </div>
    </div>
    <Skills/>
    <LinkToContact/>
    <Footer/>



    </section>
  );
}

export default Home;