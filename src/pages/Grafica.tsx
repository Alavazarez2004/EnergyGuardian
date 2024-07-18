import React, { useRef } from 'react';
import Navbar from '../components/navBar';
import Dashboard from '../components/dashboard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useReactToPrint } from 'react-to-print';

const data = [
  { name: '0', voltaje: 0 },
  { name: '1', voltaje: 40 },
  { name: '2', voltaje: 33 },
  { name: '3', voltaje: 51 },
  { name: '4', voltaje: 30 },
  { name: '5', voltaje: 100 },
];

const Grafica = () => {
  const chartRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => chartRef.current,
    documentTitle: 'chart-data',
  });

  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex flex-1 sm:flex-row">
        <div className="sm:w-64 bg-gray-500">
          <Dashboard />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div ref={chartRef} className="w-full h-full flex justify-center items-center">
            <LineChart width={800} height={500} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="voltaje" stroke="#8884d8" />
            </LineChart>
          </div>
          <button
            onClick={handlePrint}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Generar PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grafica;