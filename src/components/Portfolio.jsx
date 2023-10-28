import React from "react";
import Project from "./Project";
import Imagen1 from '../assets/fondo.png';
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
            <h2>MY PROJECTS</h2>
            <p>I integrate my skills in different disciplines such as development, design and marketing to create more complete projects that respond to needs comprehensively.</p>
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