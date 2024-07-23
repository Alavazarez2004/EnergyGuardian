import React, { useRef, useState } from 'react';
import Navbar from '../components/navBar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
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
  const [chartType, setChartType] = useState('line');
  const chartRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => chartRef.current,
    documentTitle: 'Nivel de Voltaje',
  });

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#D9D9D9]">
      <Navbar />
      <div className="flex flex-col flex-1 p-4">
        <div className="flex flex-col items-end mb-4">
          <select 
            value={chartType}
            onChange={handleChartTypeChange}
            className="px-4 py-2 border rounded mb-4"
          >
            <option value="line">Gráfica Lineal</option>
            <option value="bar">Gráfica de Barras</option>
          </select>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Generar PDF
          </button>
        </div>
        <div ref={chartRef} className="w-full flex justify-center items-center">
          {chartType === 'line' ? (
            <LineChart width={800} height={500} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="voltaje" stroke="#8884d8" />
            </LineChart>
          ) : (
            <BarChart width={800} height={500} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="voltaje" fill="#8884d8" />
            </BarChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grafica;
