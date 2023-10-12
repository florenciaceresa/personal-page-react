import React from 'react';
import './About.css';
import BtnPrimary from './BtnPrimary';
import imagen from '../assets/fotoperfil1.png';
import LinkToContact from './LinkToContact';
import Footer from './Footer';

function About() {
    return (
        <div>
            <section className='section-about' id='about'>
             <div className="container-about-1">
                <div className="about-info">
                <h2>SOBRE MÍ</h2>
                    <p>Comencé a formarme en diseño gráfico, carrera en la cual estoy cursando las últimas materias, y de manera autodidacta y a través de recursos gratuitos descubrí el mundo del diseño UX/UI y el desarrollo web, que es lo que realmente me apasiona y a lo que quiero dedicarme.</p>
                    <p>Me gusta participar en todas las etapas de la creación de un producto digital, desde el UX Research, pasando por todos los procesos de diseño, hasta la fase de desarrollo, en donde aplico mis conocimientos en programación.</p>
                    <p>Lo que más me atrae de la tecnología es que brinda la oportunidad de implementar todos los conocimientos y crear cosas increíbles e innovadoras.</p>
                </div>
                <div className='about-img'>
                    <img src={imagen} alt="Florencia Ceresa" />
                </div>
            </div>
        </section>
        <section className='section-about' id='about'>
             <div className="container-about-2">
                <div className='about-img'>
                    <img src={imagen} alt="Florencia Ceresa" />
                </div>
                <div className="about-info">
                    <p>Actualmente me desempeño como diseñadora de manera freelance y participo en proyectos de desarrollo para conocer nuevas personas, hacer networking y ganar experiencia. </p>
                    <p>Uno de mis principales objetivos a mediano plazo es dominar el inglés, idioma que me encanta y que estudio a diario, y a largo plazo me gustaría formarme en una carrera en sistemas. </p>
                    <p>Me caracterizo por ser una persona dedicada, organizada, responsable, curiosa y perseverante con mis objetivos, en búsqueda de mi primera oportunidad laboral en la industria IT 🙌🏻</p>
                    <p>¡Muchas gracias por leerme! ¡Seguime en mis redes!</p>
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