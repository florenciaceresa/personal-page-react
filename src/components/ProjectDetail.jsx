import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProjectDetail.css'
import Imagen1 from '../assets/donata2.png';
import BtnPrimary from "./BtnPrimary";



function ProjectDetail() {
    const { id } = useParams();
    const [proyecto, setProyecto] = useState(null);
  
    // Simula una lista de proyectos (esto podría venir de una API o base de datos)
    const proyectos = [
      { id: 1, 
        nombre: "Donata", 
        type: "PERSONAL PROJECT", 
        descripcion1: "Donata is a project made for the final integrative work of the web design module (NUCBA).", 
        descripcion2: "The brief was to create a landing page that contained a main page with its respective sections and two pages linked to it, one for entry and the other for registration.", 
        descripcion3: "As a graphic designer, and since I like to incorporate my knowledge into each project whenever I can, I was first in charge of designing the visual identity of the brand. If you are interested, you can see it on my behance profile.", 
        descripcion4: "I also took into account UX aspects, such as correct information architecture, usability, minimalism, etc." , 
        descripcion5: "In development, I focused on incorporating into this project all the knowledge acquired in the module, and on creating an organized, clean code structure that was easy to understand by other developers. I will continue to iterate this work, improving it and adding new features." , 
        descripcion6: "You can see the project code by " , 
        Imagen1,
        tecnologias: "HTML, CSS.",
        github: <a href="https://github.com/florenciaceresa/integrator-nucba-web-design" target="_blank" className="link-github">clicking here.</a>,
        seeproject: <a href="https://integrator-nucba-web-design.vercel.app/" target="_blank" className="btn-primary">Live demo</a>},
      { id: 2, nombre: "Proyecto 2", descripcion: "Descripción del proyecto 2", Imagen1 },
      { id: 3, nombre: "Proyecto 3", descripcion: "Descripción del proyecto 2", Imagen1 },
      // Agrega más proyectos aquí
    ];
  
    useEffect(() => {
      // Buscar el proyecto por ID y establecerlo en el estado local
      const proyectoEncontrado = proyectos.find((p) => p.id === parseInt(id));
      if (proyectoEncontrado) {
        setProyecto(proyectoEncontrado);
      }
    }, [id, proyectos]);
  
    if (!proyecto) {
      return <div>Cargando...</div>; // Puedes mostrar un indicador de carga aquí
    }
  
    return (
      <div>
        <div className="container-project-detail">
          <div className="img-project-detail">
            <img src={Imagen1} alt="" />
          </div>
          <div className="description-project">
            <h2>Donata - Landing page</h2>
            <p className="project-type">{proyecto.type}</p>
            <p>Technologies: <span className="technologies">{proyecto.tecnologias}</span></p>
            <p>{proyecto.descripcion1}</p>
            <p>{proyecto.descripcion2}</p>
          </div>
        </div>
        <div className="container-project-detail-2">
          <p>{proyecto.descripcion3}</p>
          <p>{proyecto.descripcion4}</p>
          <p>{proyecto.descripcion5}</p>
          <p>{proyecto.descripcion6}{proyecto.github}</p>
          <p>I hope you liked it, thank you very much for reading!</p>
          {proyecto.seeproject}

        </div>
      </div>
    );
  }
  
  export default ProjectDetail;