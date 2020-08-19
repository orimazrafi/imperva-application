import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { RealTimeMain } from './views/RealTimeMain/RealTimeMain';

function App() {
  return (
    <>
      <Navbar />
      <RealTimeMain />
    </>
  );
}

export default App;
