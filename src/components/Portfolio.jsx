import React from "react";
import Project from "./Project";
import Imagen1 from '../assets/diseñoweb.jpg';
import LinkToContact from "./LinkToContact";
import './Portfolio.css'
import Footer from "./Footer";

function Portfolio() {
  const proyectos = [
    { id: 1, nombre: "Donata - Landing page", imagen: Imagen1 },
    { id: 2, nombre: "Proyecto 2", imagen: Imagen1 },
    { id: 3, nombre: "Proyecto 3", imagen: Imagen1 },
    // Agrega más proyectos aquí
  ];

  return (
    <div>
       <section className="section-portfolio">
        <div className="container-portfolio">
          <div className="description-portfolio">
            <h2>MIS PROYECTOS</h2>
            <p>Integro mis conocimientos en diferentes disciplinas como el desarrollo, diseño y marketing para crear proyectos más completos que respondan a las necesidades de manera integral.</p>
          </div>
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="container-project">
              <Project {...proyecto} />
            </div>
          ))}
        </div>
    </section>
    <LinkToContact/>
    <Footer/>
    </div>
   
  );
}

export default Portfolio;