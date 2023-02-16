import React from 'react';
import { useSelector } from 'react-redux';
import {Doughnut} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const HomePage = () => {
  const {libros } = useSelector((state) => state.libro);
  const {estudiantes } = useSelector((state) => state.estudiante);
  const {prestamos } = useSelector((state) => state.prestamo);
  const {generos } = useSelector((state) => state.genero);
  return (
    <main className="bg-gray-300 p-3 w-screen">
      <h1 className="text-2xl font-bold text-center">Welcome to the Dashboard</h1>
      <p className="text-gray-700 text-center">Here you can see some important information</p>
      <div className="flex justify-center  mx-20">
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-1/3">
          <h2 className="text-xl font-bold">Total de Libros</h2>
          <p className="text-gray-700 text-3xl font-bold">{libros.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-1/3">
          <h2 className="text-xl font-bold">Total de Estudiantes</h2>
          <p className="text-gray-700 text-3xl font-bold">{estudiantes.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-1/3">
          <h2 className="text-xl font-bold">Total de Prestamos</h2>
          <p className="text-gray-700 text-3xl font-bold">{prestamos.length}</p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mt-4">
        <h2 className="text-xl font-bold text-center mb-2">Libros por genero</h2>
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-2/3">
            <Doughnut
              data={{
                labels: generos.map((genero) => genero.nombre),
                datasets: [
                  {
                    label: 'Libros por genero',
                    data: generos.map((genero) => {
                      return libros.filter((libro) => libro.genero.id === genero.id).length;
                    }),
                    backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange'],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  }
              }}
            }

            />
        </div>
      </div>
    </main>
  );
};

export default HomePage;