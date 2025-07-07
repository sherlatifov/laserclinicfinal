import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
        <main className='flex-fill mt-5'>
          <AppRoutes />
        </main>
      <Footer />
    </div>
  );
}

export default App;
