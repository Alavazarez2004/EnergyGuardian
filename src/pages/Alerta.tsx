import React from 'react';
import Navbar from '../components/navBar';

import dept from '../assets/dept.png';
import informes from '../assets/informe.png';
import alertas from '../assets/alerta.png';
import graficas from '../assets/grafica.png';

const Alerta = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-[#D9D9D9]">
      <Navbar />
      <div className="flex flex-1 sm:flex-row">
        <div className="sm:w-64">
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-screen-lg mx-auto px-4">
          <button className="bg-[#1A2038] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none">
            <p className="text-lg font-semibold">NOMBRE DEPARTAMENTO</p>
            <p className="text-lg font-semibold">ENERGIA EN USO:</p>
            <img src={alertas} alt="Alertas" className="w-16 h-16 mb-4" />
          </button>

          <button className="bg-[#1A2038] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none">
            <p className="text-lg font-semibold">NOMBRE DEPARTAMENTO</p>
            <p className="text-lg font-semibold">ENERGIA EN USO:</p>
            <img src={alertas} alt="Alertas" className="w-16 h-16 mb-4" />
          </button>

          <button className="bg-[#1A2038] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none">
          <p className="text-lg font-semibold">NOMBRE DEPARTAMENTO</p>
          <p className="text-lg font-semibold">ENERGIA EN USO:</p>
          <img src={alertas} alt="Alertas" className="w-16 h-16 mb-4" />
          </button>

          <button className="bg-[#1A2038] p-4 text-white text-4xl mb-4 flex flex-col items-center justify-center h-48 rounded-none">
          <p className="text-lg font-semibold">NOMBRE DEPARTAMENTO</p>
          <p className="text-lg font-semibold">ENERGIA EN USO:</p>
          <img src={alertas} alt="Alertas" className="w-16 h-16 mb-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alerta;
