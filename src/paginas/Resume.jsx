import React from "react";
import AppRoutes from "../routes";
import { Link } from "react-router-dom";    
import { studies, experiences } from "../data/resume";

function Resume() {
    return (
    <>     
        <Link to="/">Home</Link>
        <h1>Este es mi Resume:</h1>
        <h2>Estudios:</h2>
        {studies.map((e) => { 
            return (
                <React.Fragment key={e.id}>
                    <h3>Fecha: {e.date}</h3>
                    <h4>Institucion: {e.institution}</h4>
                    <h4>Título: {e.title}</h4>
                    <p>----------------</p>
                </React.Fragment>
            )
        })}
        <hr/>
        <h2>Experiencia profesional:</h2>
        {experiences.map((e) => { 
            return (
                <React.Fragment key={e.id}>
                    <h3>Compañía: {e.company}</h3>
                    <h4>Fecha: {e.date}</h4>
                    <h4>Puesto: {e.title}</h4>
                    <p>----------------</p>
                </React.Fragment>
            )
        })}
    </>
    )
};

export default Resume;