import React from 'react';

import logo from '../assets/Logo_Empresa.png';
import usuario from '../assets/usuario.png';
import email from '../assets/email.png';
import password from '../assets/password.png';
import confirpassword from '../assets/confirmapassword.png';

const RegistroView = () => {
  return (
    <div className="flex h-screen bg-[#1A2038]">
      <div className="w-1/2 flex justify-center items-center">
      <img src={logo} alt="Logo" className="" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-8">REGISTRO</h2>
          <form>
            <div className="mb-6 flex items-center">
              <input 
                type="text" 
                id="usuario" 
                placeholder="Usuario" 
                required 
                className="border border-gray-300 p-4 w-full text-lg rounded-md"
              />
              <img src={usuario} alt="Usuario" className="h-8 w-8 ml-2" />
            </div>
            
            <div className="mb-6 flex items-center">
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                required 
                className="border border-gray-300 p-4 w-full text-lg rounded-md"
              />
              <img src={email} alt="Email" className="h-8 w-8 ml-2" />
            </div>
            
            <div className="mb-6 flex items-center">
              <input 
                type="password" 
                id="password" 
                placeholder="Contraseña" 
                required 
                className="border border-gray-300 p-4 w-full text-lg rounded-md"
              />
              <img src={password} alt="Contraseña" className="h-8 w-8 ml-2" />
            </div>
            
            <div className="mb-6 flex items-center">
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirmar contraseña" 
                required 
                className="border border-gray-300 p-4 w-full text-lg rounded-md"
              />
              <img src={confirpassword} alt="Confirmar contraseña" className="h-8 w-8 ml-2" />
            </div>
            
            {/* Botón de registro */}
            <button 
              type="submit" 
              className="w-full bg-[#415292] hover:bg-[#3a4671] text-white py-3 text-lg rounded-md"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroView;
