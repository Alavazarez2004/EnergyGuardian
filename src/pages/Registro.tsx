import React, { useState } from 'react';
import logo from '../assets/Logo_Empresa.png';
import usuario from '../assets/usuario.png';
import correo from '../assets/email.png';
import contra from '../assets/password.png';
import confirpassword from '../assets/confirmapassword.png';

const RegistroView = () => {
  const [username, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Usuario registrado con éxito');
    } else {
      alert('Error al registrar el usuario: ' + data.message);
    }
  };

  return (
    <div className="flex h-screen bg-orange-100">
      <div className="w-1/2 flex justify-center items-center">
        <img src={logo} alt="Logo" className="" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-8">REGISTRO</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex items-center">
              <input 
                type="text" 
                id="usuario" 
                placeholder="Usuario" 
                value={username}
                onChange={(e) => setUsuario(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="border border-gray-300 p-4 w-full text-lg rounded-md"
              />
              <img src={correo} alt="Email" className="h-8 w-8 ml-2" />
            </div>
            
            <div className="mb-6 flex items-center">
              <input 
                type="password" 
                id="password" 
                placeholder="Contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="border border-gray-300 p-4 w-full text-lg rounded-md"
              />
              <img src={contra} alt="Contraseña" className="h-8 w-8 ml-2" />
            </div>
            
            <div className="mb-6 flex items-center">
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirmar contraseña" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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