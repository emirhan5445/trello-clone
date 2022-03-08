import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import ContentNav from './Components/ContentNav';

function App() {
  return (
    <>
      <NavBar />
      <div className="wrapped">
        <SideBar />
        <ContentNav />
        
      </div>
    </>
  );
}

export default App;
