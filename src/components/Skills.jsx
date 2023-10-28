import React from "react";
import './Skills.css';

function Skills() {
    return(
        <section className="section-skills">
            <div className="container-skills">
                <h2>SKILLS</h2>
                <p>I love learning about different areas and merging them to create innovative and creative solutions. I work every day so that this range of knowledge expands more and more.</p>
                <div className="skills">
                <div>
                    <div><i className="bi bi-magic"></i></div>
                    <h3>DESIGN</h3>
                    <p>Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Figma, Lightroom</p>
                    </div>
                    <div>
                        <div><i className="bi bi-code"></i></div>
                        <h3>DEVELOPMENT</h3>
                        <p>HTML, CSS, Bootstrap, SASS, JavaScript, React js, JQuery, Node js, Express, Git</p>
                    </div>
                    <div>
                        <div><i className="bi bi-bar-chart-line"></i></div>
                        <h3>MARKETING</h3>
                        <p>Management and strategy in social networks, analysis of data, SEO, SEM</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Skills