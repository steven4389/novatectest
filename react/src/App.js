import React from 'react'
import { DataProvider } from './context/DataContext';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import './App.css';


function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Dashboard />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
