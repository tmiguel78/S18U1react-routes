import { Routes, Route } from "react-router-dom";
import Home from './paginas/Home';
import Projects from './paginas/Projects';
import Resume from './paginas/Resume';

function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/resume" element={<Resume key="1" />} />           
        </Routes>
        </>
    );
};

export default AppRoutes;