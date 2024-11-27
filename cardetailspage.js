// CarDetailPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CarDetailPage = ({ cars }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(car => car.id === parseInt(id));

  if (!car) {
    return <div className="text-center text-red-600">Car not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
      <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline mb-4 inline-block">
        Back to Car List
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded mb-4 md:mb-0" />
        <div>
          <h2 className="text-3xl font-bold">{car.name}</h2>
          <p className="text-gray-600 mt-2">{car.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
