import React from "react";
import './Project.css'
import { Link } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

function Project({ id, nombre, imagen }) {
  return (
    <div className="container-portfolio">
      <div className="container-project">
        <img src={imagen} className="img-project"/>
        <h3>{nombre}</h3>
        <Link to={`/proyecto/${id}`} className="see-project">SEE PROJECT</Link>
      </div>
    </div>
  );
}

export default Project;