import React from "react";
import './Skills.css';

function Skills() {
    return(
        <section className="section-skills">
            <div className="container-skills">
                <h2>CONOCIMIENTOS Y HABILIDADES</h2>
                <p>Me encanta aprender sobre diferentes áreas y fusionarlas para crear soluciones innovadoras y creativas. Trabajo día a día para que este abanico de conocimientos se amplíe cada vez más.</p>
                <div className="skills">
                <div>
                    <div><i className="bi bi-magic"></i></div>
                    <h3>DISEÑO</h3>
                    <p>Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Figma, Lightroom</p>
                    </div>
                    <div>
                        <div><i className="bi bi-code"></i></div>
                        <h3>DESARROLLO</h3>
                        <p>HTML, CSS, Bootstrap, JavaScript, JQuery, Git</p>
                    </div>
                    <div>
                        <div><i className="bi bi-bar-chart-line"></i></div>
                        <h3>MARKETING</h3>
                        <p>Gestión y estrategia en redes sociales, análisis de datos, SEO, SEM</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Skills