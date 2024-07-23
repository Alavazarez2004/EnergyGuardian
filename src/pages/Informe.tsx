import React from 'react';
import Navbar from '../components/navBar';
import Dashboard from '../components/dashboard';

const Informe = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-[#D9D9D9]">
      <Navbar />
      <div className="flex flex-1 sm:flex-row">
        <div className="sm:w-64">
        </div>
        <div className="relative overflow-x-auto shadow-md w-5/6 mt-8 px-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  DEPT
                </th>
                <th scope="col" className="px-6 py-3">
                  HORA
                </th>
                <th scope="col" className="px-6 py-3">
                  DIAS
                </th>
                <th scope="col" className="px-6 py-3">
                  SEMANA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  CUARTO 1
                </td>
                <td className="px-6 py-4">
                  58%
                </td>
                <td className="px-6 py-4">
                  44%
                </td>
                <td className="px-6 py-4">
                  24%
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  CUARTO 2
                </td>
                <td className="px-6 py-4">
                  58%
                </td>
                <td className="px-6 py-4">
                  44%
                </td>
                <td className="px-6 py-4">
                  24%
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  CUARTO 3
                </td>
                <td className="px-6 py-4">
                  58%
                </td>
                <td className="px-6 py-4">
                  44%
                </td>
                <td className="px-6 py-4">
                  24%
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  CUARTO 4
                </td>
                <td className="px-6 py-4">
                  58%
                </td>
                <td className="px-6 py-4">
                  44%
                </td>
                <td className="px-6 py-4">
                  24%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Informe;
