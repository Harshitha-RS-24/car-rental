// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CarListPage from './CarListPage';
import CarDetailPage from './cardetailspage';
import './App.css'; // Assuming Tailwind CSS is imported here

// Mock data
const cars = [
  { id: 1, name: 'Tesla Model 3', image: 'https://via.placeholder.com/400x300', description: 'Electric Sedan' },
  { id: 2, name: 'BMW X5', image: 'https://via.placeholder.com/400x300', description: 'Luxury SUV' },
  { id: 3, name: 'Audi Q7', image: 'https://via.placeholder.com/400x300', description: 'Premium SUV' },
];

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Car Rental</Link>
            <div>
              <Link to="/" className="mr-4">Home</Link>
              <Link to="/cars">Cars</Link>
            </div>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarListPage cars={cars} />} />
            <Route path="/cars/:id" element={<CarDetailPage cars={cars} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

