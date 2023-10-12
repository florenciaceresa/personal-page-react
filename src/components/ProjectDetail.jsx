import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProjectDetail.css'

function ProjectDetail() {
    const { id } = useParams();
    const [proyecto, setProyecto] = useState(null);
  
    // Simula una lista de proyectos (esto podría venir de una API o base de datos)
    const proyectos = [
      { id: 1, nombre: "Proyecto 1", descripcion: "Descripción del proyecto 1" },
      { id: 2, nombre: "Proyecto 2", descripcion: "Descripción del proyecto 2" },
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
        <h2>Detalles del Proyecto {proyecto.id}</h2>
        <h3>{proyecto.nombre}</h3>
        <p>{proyecto.descripcion}</p>
      </div>
    );
  }
  
  export default ProjectDetail;