import React from "react";
import AppRoutes from "../routes";
import { Link } from "react-router-dom";
import projects from "../data/projects";    

function Projects() {
    return (
    <>  
        <Link to="/">Home</Link>
        <h1>Te presento mis proyectos:</h1>
        {projects.map((e)=> {
            return (
            <React.Fragment key={e.id}>
                <h3>Nombre: {e.name}</h3>
                <h4>Descripción: {e.description}</h4>
                <img src={e.image} alt={e.name} />
                <p><a href={e.url} target="_blank">Página web</a></p>
                <hr/>
            </React.Fragment>
            )
        })}
    </>
    )
};

export default Projects;