import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/listings" element={<h1>Listings Page</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
