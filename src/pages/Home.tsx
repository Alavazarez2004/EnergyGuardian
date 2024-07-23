import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Navbar from '../components/navBar';
import Dashboard from '../components/dashboard';

import dept from '../assets/dept.png';
import informes from '../assets/informe.png';
import alertas from '../assets/alerta.png';
import graficas from '../assets/grafica.png';

const Home = () => {
  const handleDepartamentosClick = () => {
    history.push('/Departamentos');
  };

  const handleInformesClick = () => {
    history.push('/Informes');
  };

  const handleAlertasClick = () => {
    history.push('/Alertas');
  };

  const handleGraficasClick = () => {
    history.push('/Graficas');
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#D9D9D9]">
      <Navbar />
      <div className="flex flex-1 sm:flex-row">
        <div className="sm:w-64 bg-gray-500">
          <Dashboard />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-screen-lg mx-auto px-4">
          <Link to="/Departamentos" className="bg-[#1A2038] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none" onClick={handleDepartamentosClick}>
            <p className="text-lg font-semibold">DEPARTAMENTOS</p>
            <img src={dept} alt="Departamentos" className="w-16 h-16 mb-4" />
          </Link>

          <Link to="/Informes" className="bg-[#FFDD95] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none" onClick={handleInformesClick}>
            <p className="text-lg font-semibold">INFORMES</p>
            <img src={informes} alt="Informes" className="w-16 h-16 mb-4" />
          </Link>

          <Link to="/Alertas" className="bg-[#F03232] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none" onClick={handleAlertasClick}>
            <p className="text-lg font-semibold">ALERTAS</p>
            <img src={alertas} alt="Alertas" className="w-16 h-16 mb-4" />
          </Link>

          <Link to="/Graficas" className="bg-[#1A2038] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none" onClick={handleGraficasClick}>
            <p className="text-lg font-semibold">GRÁFICAS</p>
            <img src={graficas} alt="Gráficas" className="w-16 h-16 mb-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
