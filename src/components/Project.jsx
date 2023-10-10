import React from "react";
import './Project.css'
import { Link } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

function Project({ id, nombre, imagen }) {
  return (
    <div className="container-portfolio">
      <div className="container-project">
        <img src={imagen} className="img-project"/>
        <h2>{nombre}</h2>
        <Link to={`/proyecto/${id}`}>VER PROYECTO</Link>
      </div>
    </div>
  );
}

export default Project;