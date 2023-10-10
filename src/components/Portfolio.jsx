import React from "react";
import Project from "./Project";
import Imagen1 from '../assets/diseñoweb.jpg'
import LinkToContact from "./LinkToContact";

function Portfolio() {
  const proyectos = [
    { id: 1, nombre: "Proyecto 1", imagen: Imagen1 },
    { id: 2, nombre: "Proyecto 2", imagen: Imagen1 },
    { id: 3, nombre: "Proyecto 3", imagen: Imagen1 },
    { id: 4, nombre: "Proyecto 4", imagen: Imagen1 },
    { id: 5, nombre: "Proyecto 5", imagen: Imagen1 },
    { id: 6, nombre: "Proyecto 6", imagen: Imagen1 },
    // Agrega más proyectos aquí
  ];

  return (
    <div>
       <section className="section-portfolio">
        <div className="container-portfolio">
          <div className="description-portfolio">
            <h2>CONOCIMIENTOS Y HABILIDADES</h2>
            <p>Me encanta aprender sobre diferentes áreas y fusionarlas para crear soluciones innovadoras y creativas. Trabajo día a día para que este abanico de conocimientos se amplíe cada vez más.</p>
          </div>
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="container-project">
              <Project {...proyecto} />
            </div>
          ))}
        </div>
    </section>
    <LinkToContact/>
    </div>
   
  );
}

export default Portfolio;