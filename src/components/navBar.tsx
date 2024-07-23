import React from 'react';

import logo from '../assets/Logo12.png';

const Navbar = () => {
  return (
    <div className="bg-[#3532CF] text-white w-full h-16 flex items-center justify-center">
      <div className='h-14 w-14'>
      <img src={logo} alt="Logo"/>
      </div>
      <div className="text-2xl font-bold">
        ENERGY GUARDIAN
      </div>
    </div>
  );
};

export default Navbar;
