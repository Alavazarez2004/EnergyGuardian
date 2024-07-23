import React from 'react';

import inicio from '../assets/inicio.png';
import reportes from '../assets/reportes.png';
import estadisticas from '../assets/estadisticas.png';
import graficas from '../assets/graficas.png';
import notificaciones from '../assets/notificacion.png';
import cerrarsesion from '../assets/cerrarsesion.png';

const Dashboard = () => {
  return (
    <div className="h-full">
      <nav className="flex flex-col bg-gray-500 p-4 h-full">
        <a href="/Home" className="flex items-center text-white mb-4">
          <img src={inicio} alt="Inicio" className="w-10 h-10 mr-2" />
          Inicio
        </a>
        <a href="/Informes" className="flex items-center text-white mb-4">
          <img src={reportes} alt="Reportes" className="w-10 h-10 mr-2" />
          Reportes
        </a>
        <a href="/Estadisticas" className="flex items-center text-white mb-4">
          <img src={estadisticas} alt="Estadisticas" className="w-10 h-10 mr-2" />
          Estadisticas
        </a>
        <a href="/Graficas" className="flex items-center text-white mb-4">
          <img src={graficas} alt="Gráficas" className="w-10 h-10 mr-2" />
          Gráficas
        </a>
        <a href="/Alertas" className="flex items-center text-white mb-4">
          <img src={notificaciones} alt="Notificaciones" className="w-10 h-10 mr-2" />
          Notificaciones
        </a>
        <a href="/" className="flex items-center text-white mt-auto">
          <span className="flex items-center">
            <span className="text-lg font-semibold mr-2">Cerrar sesión</span>
            <img src={cerrarsesion} alt="Cerrar sesión" className="w-10 h-10" />
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Dashboard;
