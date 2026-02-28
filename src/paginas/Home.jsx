import AppRoutes from "../routes";
import { Link } from "react-router-dom";    

function Home() {
    return (
    <>
        <h1>Bienvenid@ a mi página web,</h1>
        <h2>donde os voy a presentar quién y soy y mis trabajos.</h2>
        <h3>Aquí hay unos enlaces a mi resume y proyectos:</h3>
        <Link to="/resume">Resume</Link><br/>
        <Link to="/projects">Proyectos</Link>
    </>
    )
};

export default Home;