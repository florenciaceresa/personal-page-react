import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProjectDetail.css'
import Imagen1 from '../assets/donata2.png';
import Imagen2 from '../assets/veterinaria.png';
import Imagen3 from '../assets/kinesiologia.png';
import BtnPrimary from "./BtnPrimary";



function ProjectDetail() {
    const { id } = useParams();
    const [proyecto, setProyecto] = useState(null);
  
    // Simula una lista de proyectos (esto podría venir de una API o base de datos)
    const proyectos = [
      { id: 1, 
        imagen: Imagen1,
        nombre: "Donata", 
        type: "PERSONAL PROJECT", 
        tecnologias: "HTML, CSS.",
        descripcion1: "Donata is a project made for the final integrative work of the web design module (NUCBA).", 
        descripcion2: "The brief was to create a landing page that contained a main page with its respective sections and two pages linked to it, one for entry and the other for registration.", 
        descripcion3: "As a graphic designer, and since I like to incorporate my knowledge into each project whenever I can, I was first in charge of designing the visual identity of the brand. If you are interested, you can see it on my behance profile.", 
        descripcion4: "I also took into account UX aspects, such as correct information architecture, usability, minimalism, etc." , 
        descripcion5: "In development, I focused on incorporating into this project all the knowledge acquired in the module, and on creating an organized, clean code structure that was easy to understand by other developers. I will continue to iterate this work, improving it and adding new features." , 
        descripcion6: "You can see the project code by " , 
        descripcion7: "I hope you liked it, thank you very much for reading!",
        github: <a href="https://github.com/florenciaceresa/integrator-nucba-web-design" target="_blank" className="link-github">clicking here.</a>,
        seeproject: <a href="https://integrator-nucba-web-design.vercel.app/" target="_blank" className="btn-primary">Live demo</a>},
      
        { id: 2, 
        imagen: Imagen2,
        nombre: "PetCareShop - Veterinaria", descripcion: "Descripción del proyecto 2", 
        type: "PERSONAL PROJECT", 
        tecnologias: "HTML, CSS, Bootstrap, React js.",
        descripcion1: "PetCareShop is a project carried out with a group of 15 developers in order to practice skills and gain experience.", 
        descripcion2: "The brief was to create a web application where users can find veterinarians and professionals can register information about their clients.", 
        descripcion3: "Within the project there were different teams (design, frontend development, backend development, testing). I participated in the design area with other colleagues where we designed the interface and also participated in frontend development.",
        descripcion4: "It was my first experience working as a team and I really liked it. I learned a lot about methodologies for developing a project, organization, communication, among other things.", 
        descripcion5: "The first stage of the project lasted two months and will continue to be iterated in the future.",
        descripcion6: "I hope you liked it, thank you very much for reading!",
        seeproject: <a href="http://www.petcareshop.com.ar/" target="_blank" className="btn-primary">Live demo</a>
        



       },
      { id: 3, 
        imagen: Imagen3,
        nombre: "Centro de kinesiología",
        type: "PROFESIONAL PROJECT", 
        tecnologias: "HTML, CSS, Bootstrap, Vanila JavaScript.",
        descripcion1: "This project is a landing page for a kinesiology center that contains different sections with information about it.", 
        descripcion2: "This was my first project with javascript without any framework. The challenge was to add functionality to different parts of the website such as the menu, which changes color when scrolling, a modal window that opens", 
        descripcion3: "when clicking on a button, a carousel that changes images every 3 seconds. This project allowed me to learn the basics of this programming language.",
        descripcion4: "I also took into account UX aspects, such as correct information architecture, usability, minimalism, etc.", 
        descripcion6: "You can see the project code by " , 
        descripcion7: "I hope you liked it, thank you very much for reading!",
        github: <a href="https://github.com/florenciaceresa/martin-maurizi-personal-page" target="_blank" className="link-github">clicking here.</a>,
        seeproject: <a href="https://martin-maurizi-kinesiologia.vercel.app/" target="_blank" className="btn-primary">Live demo</a>,



    },
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
            <img src={proyecto.imagen} alt="" />
          </div>
          <div className="description-project">
            <h2>{proyecto.nombre}</h2>
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
          <p>{proyecto.descripcion7}</p>
          {proyecto.seeproject}

        </div>
      </div>
    );
  }
  
  export default ProjectDetail;