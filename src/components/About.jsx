import React from 'react';
import './About.css';
import BtnPrimary from './BtnPrimary';
import imagen from '../assets/fotoperfil3.png';
import LinkToContact from './LinkToContact';
import Footer from './Footer';

function About() {
    return (
        <div>
            <section className='section-about' id='about'>
             <div className="container-about-1">
                <div className="about-info">
                <h2>ABOUT ME</h2>
                    <p>I began training in graphic design, a career in which I am studying the latest subjects, and self-taught and through free resources I discovered the world of UX/UI design and web development, which is what I am really passionate about and where I want to go direct me.</p>
                    <p>I like to participate in all stages of creating a digital product, from UX Research, through all the design processes, to the development phase, where I apply my programming skills.</p>
                    <p>What I like most about technology is that it provides the opportunity to implement all the knowledge and create incredible and innovative things.</p>
                    <p>I currently work as a freelance designer and participate in development projects to meet new people, network and gain experience.</p>
                    <p>One of my main medium-term goals is to master English, a language that I love and that I study daily, and in the long term I would like to train in a career in systems.</p>
                </div>
                <div className='about-img'>
                    <img src={imagen} alt="Florencia Ceresa" />
                </div>
            </div>
        </section>
        <section className='section-about' id='about'>
             <div className="container-about-2">
                <div className="about-info">
                    <p>I am characterized by being a dedicated, organized, responsible, curious and persevering person with my goals, in search of my first job opportunity in the IT industry 🙌🏻</p>
                    <p>Thank you very much for reading me! Follow me on my social networks!</p>
                    <div className='social-media'>
                        <a href="https://www.linkedin.com/in/florenciaceresa/" target='_blank'><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/florenciaceresa" target='_blank'><i className="bi bi-github"></i></a>
                        <a href="https://www.behance.net/florenciaceresa" target='_blank'><i className="bi bi-behance"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <LinkToContact/>
        <Footer/>
        </div>
    );
}
export default About;