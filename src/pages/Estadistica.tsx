import React from 'react';
import Navbar from '../components/navBar';
import Tables from '../components/table';

const Departamento = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-[#D9D9D9]">
      <Navbar />
      <div className="flex flex-1 sm:flex-row">
        <div className="sm:w-64">
        </div>
        <div className="flex-1 p-4">
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Departamento;
