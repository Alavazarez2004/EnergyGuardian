import React, { useState } from 'react';
import logo from '../assets/Logo12.png';
import burgerIcon from '../assets/burger-icon.png'; // Asegúrate de tener esta imagen en la carpeta de assets
import Dashboard from './dashboard';

const Navbar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div>
      <div className="bg-[#3532CF] text-white w-full h-16 flex items-center px-4">
        <button
          className="text-white block mr-4"
          onClick={toggleDashboard}
        >
          <img src={burgerIcon} alt="Burger Menu" className="w-12 h-12" />
        </button>
        <div className="flex flex-grow justify-center items-center">
          <div className="flex items-center">
            <div className="h-14 w-14 mr-2">
              <img src={logo} alt="Logo" />
            </div>
            <div className="text-2xl font-bold">ENERGY GUARDIAN</div>
          </div>
        </div>
      </div>
      {isDashboardOpen && <Dashboard />}
    </div>
  );
};

export default Navbar;
