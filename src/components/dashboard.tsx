import React from 'react';
import { NavLink } from 'react-router-dom';

import inicio from '../assets/inicio.png';
import reportes from '../assets/reportes.png';
import estadisticas from '../assets/estadisticas.png';
import graficas from '../assets/graficas.png';
import notificaciones from '../assets/notificacion.png';
import cerrarsesion from '../assets/cerrarsesion.png';

const Dashboard = () => {
  return (
    <div className="fixed top-15 left-0 h-screen w-64 bg-gray-500 p-4 flex flex-col" role="navigation" aria-label="Main Navigation">
      <nav className="flex flex-col">
        <NavLink to="/Home" className="flex items-center text-white mb-4">
          <img src={inicio} alt="Inicio" className="w-10 h-10 mr-2" />
          Inicio
        </NavLink>
        <NavLink to="/Informes" className="flex items-center text-white mb-4">
          <img src={reportes} alt="Reportes" className="w-10 h-10 mr-2" />
          Reportes
        </NavLink>
        <NavLink to="/Estadisticas" className="flex items-center text-white mb-4">
          <img src={estadisticas} alt="Estadisticas" className="w-10 h-10 mr-2" />
          Estadisticas
        </NavLink>
        <NavLink to="/Graficas" className="flex items-center text-white mb-4">
          <img src={graficas} alt="Gráficas" className="w-10 h-10 mr-2" />
          Gráficas
        </NavLink>
        <NavLink to="/Alertas" className="flex items-center text-white mb-4">
          <img src={notificaciones} alt="Notificaciones" className="w-10 h-10 mr-2" />
          Notificaciones
        </NavLink>
        <NavLink to="/" className="flex items-center text-white mt-auto">
          <span className="flex items-center">
            <span className="text-lg font-semibold mr-2">Cerrar sesión</span>
            <img src={cerrarsesion} alt="Cerrar sesión" className="w-10 h-10" />
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Dashboard;
