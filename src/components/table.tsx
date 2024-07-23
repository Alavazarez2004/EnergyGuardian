import React, { useState } from 'react';

const Tables = () => {
  const [dataType, setDataType] = useState('kWh');

  const data = {
    kWh: [
      { interval: '0.020 - 0.025', limInf: '0.020', limSup: '0.025', freqAbs: 4, freqRel: 0.4 },
      { interval: '0.025 - 0.030', limInf: '0.025', limSup: '0.030', freqAbs: 6, freqRel: 0.6 },
    ],
    kWhSummary: [
      { interval: '00:00 - 07:00 (8h)', mean: 0.025, median: 0.025, mode: '0.02 y 0.03 (bimodal)' },
      { interval: '08:00 - 09:00 (2h)', mean: 0.030, median: 0.030, mode: '0.030' },
    ],
    Voltaje: [
      { interval: '220 - 230', limInf: '220', limSup: '230', freqAbs: 5, freqRel: 0.5 },
      { interval: '230 - 240', limInf: '230', limSup: '240', freqAbs: 5, freqRel: 0.5 },
    ],
    VoltajeSummary: [
      { interval: '00:00 - 07:00 (8h)', mean: 225, median: 225, mode: '220 y 230 (bimodal)' },
      { interval: '08:00 - 09:00 (2h)', mean: 235, median: 235, mode: '230' },
    ],
    Corriente: [
      { interval: '10 - 15', limInf: '10', limSup: '15', freqAbs: 3, freqRel: 0.3 },
      { interval: '15 - 20', limInf: '15', limSup: '20', freqAbs: 7, freqRel: 0.7 },
    ],
    CorrienteSummary: [
      { interval: '00:00 - 07:00 (8h)', mean: 12.5, median: 12.5, mode: '10 y 15 (bimodal)' },
      { interval: '08:00 - 09:00 (2h)', mean: 17.5, median: 17.5, mode: '15' },
    ],
    'Factor de Potencia': [
      { interval: '0.8 - 0.85', limInf: '0.8', limSup: '0.85', freqAbs: 6, freqRel: 0.6 },
      { interval: '0.85 - 0.9', limInf: '0.85', limSup: '0.9', freqAbs: 4, freqRel: 0.4 },
    ],
    'Factor de PotenciaSummary': [
      { interval: '00:00 - 07:00 (8h)', mean: 0.825, median: 0.825, mode: '0.8 y 0.85 (bimodal)' },
      { interval: '08:00 - 09:00 (2h)', mean: 0.875, median: 0.875, mode: '0.85' },
    ],  
  };  

  const handleChange = (e) => {
    setDataType(e.target.value);
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <div className="mb-6">
        <label htmlFor="dataType" className="block text-lg font-medium text-gray-700 mb-2">Selecciona el tipo de dato:</label>
        <select
          id="dataType"
          value={dataType}
          onChange={handleChange}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="kWh">kWh</option>
          <option value="Voltaje">Voltaje</option>
          <option value="Corriente">Corriente</option>
          <option value="Factor de Potencia">Factor de Potencia</option>
        </select>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consumo de Energía ({dataType})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Intervalo</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Lim. Inf</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Lim. Sup</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Frecuencia Absoluta (f)</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Frecuencia Relativa (fr)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data[dataType]?.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.interval}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.limInf}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.limSup}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.freqAbs}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.freqRel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Resumen de {dataType}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Intervalo</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Media ({dataType})</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Mediana ({dataType})</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Moda ({dataType})</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data[`${dataType}Summary`]?.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.interval}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.mean}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.median}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{row.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
