import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from './pages/Registro';
import Home from './pages/Home';
import Departamentos from './pages/Departamento';
import Informes from './pages/Informe';
import Alertas from './pages/Alerta';
import Graficas from './pages/Grafica';

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Departamentos" element={<Departamentos />} />
            <Route path="/Informes" element={<Informes />} />
            <Route path="/Alertas" element={<Alertas />} />
            <Route path="/Graficas" element={<Graficas />} />
        </Routes>
    </Router>
  );
}
  export default App;