import React from "react";
import './Portfolio.css';

function Portfolio() {
    return(
        <section className="section-portfolio" id="portfolio">
            <div className="container-portfolio">
                <h2>MIS PROYECTOS</h2>
                <p>Integro mis conocimientos en diferentes disciplinas como el desarrollo, diseño y marketing para crear proyectos más completos que respondan a las necesidades de manera integral.</p>
                <div className="projects">
                <div>
                    <div>
                        <img src="#" alt="" />
                    </div>
                    <h3>Proyecto 1</h3>
                    <a href="#">VER PROYECTO</a>
                </div>
                <div>
                    <div>
                        <img src="#" alt="" />
                    </div>
                    <h3>Proyecto 1</h3>
                    <a href="#">VER PROYECTO</a>
                </div><div>
                    <div>
                        <img src="#" alt="" />
                    </div>
                    <h3>Proyecto 1</h3>
                    <a href="#">VER PROYECTO</a>
                </div>
                    
                </div>
            </div>
        </section>

    )
}
export default Portfolio