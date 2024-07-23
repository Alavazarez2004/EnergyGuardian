import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/Logo_Empresa.png';
import email from '../assets/email.png';
import password from '../assets/password.png';

const LoginView = () => {
  return (
    <div className="flex h-screen bg-[#1A2038]">
      <div className="w-1/2 flex justify-center items-center">
      <img src={logo} alt="Logo" className="" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-8">INICIO DE SESIÓN</h2>
          <form>
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
            
            {/* Enlace para olvidar la contraseña */}
            <Link to="/olvidar-contrasena" className="text-blue-500 hover:text-blue-700 block mb-4 text-sm">
              ¿Contraseña olvidada?
            </Link>

            {/* Botón de inicio de sesión */}
            <button type="submit" className="w-full bg-[#415292] hover:bg-[#3a4671] text-white py-3 text-lg rounded-md">
              Iniciar sesión
            </button>
          </form>
          <div className="mt-4 flex items-center">
            <p className="mr-2">¿No tiene una cuenta?</p>
            <Link to="/registro" className="text-blue-500 hover:text-blue-700 text-sm">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
