import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import MainContent from './Components/MainContent';

function App() {
  return (
    <>
      <NavBar />
      <div className="wrapped">
      <SideBar />
      <MainContent />
        
      </div>
    </>
  );
}

export default App;
