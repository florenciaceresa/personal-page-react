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
        type: "PROYECTO PERSONAL", 
        descripcion1: "Donata es un proyecto realizado para el trabajo integrador final del módulo de diseño web (NUCBA).", 
        descripcion2: "La consigna consistía en crear una landing page que contuviera una página principal con sus respectivas secciones y dos páginas enlazadas a la misma, una de ingreso y otra de registro.", 
        descripcion3: "Como diseñadora gráfica, y como me gusta incorporar mis conocimientos en cada proyecto siempre que pueda, me encargué en primer lugar de diseñar la identidad visual de la marca. Si te interesa, podés verla en mi perfil de behance.", 
        descripcion4: "Además, tuve en cuenta aspectos de UX, como una correcta arquitectura de la información, usabilidad, minimalismo, entre otros. " , 
        descripcion5: "En cuanto al desarrollo, me centré en incorporar en este proyecto todos los conocimientos adquiridos en el módulo, y en realizar una estructura de código organizada, limpia, fácil de entender por otros desarrolladores. Seguiré iterando este trabajo, mejorándolo y añadiéndole nuevas funcionalidades." , 
        descripcion6: "Podés ver el código del proyecto haciendo " , 
        Imagen1,
        tecnologias: "HTML, CSS.",
        github: <a href="https://github.com/florenciaceresa/integrator-nucba-web-design" target="_blank" className="link-github">click aquí.</a>,
        seeproject: <a href="https://integrator-nucba-web-design.vercel.app/" target="_blank" className="btn-primary">Ver proyecto</a>},
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
            <p>Tecnonolgías utilizadas: <span className="technologies">{proyecto.tecnologias}</span></p>
            <p>{proyecto.descripcion1}</p>
            <p>{proyecto.descripcion2}</p>
          </div>
        </div>
        <div className="container-project-detail-2">
          <p>{proyecto.descripcion3}</p>
          <p>{proyecto.descripcion4}</p>
          <p>{proyecto.descripcion5}</p>
          <p>{proyecto.descripcion6}{proyecto.github}</p>
          <p>Espero que te haya gustado, ¡Muchas gracias por leer!</p>
          {proyecto.seeproject}

        </div>
      </div>
    );
  }
  
  export default ProjectDetail;