import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import ContentNav from './Components/ContentNav';
import { AppContext } from './Contexts/AppContext';
// import AddList from './Components/AddList';
/* import ClosedSide from './Components/ClosedSide'; */
import { Routes, Route } from "react-router-dom";
import LogInPage from './Components/LogInPage';
import Container from './Components/Container';

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [changeClass, setChangeClas] = useState('80vw'); 

  return (
    <>
      <NavBar />
      <AppContext.Provider value={{ setIsTrue, setChangeClas, changeClass, isTrue }} >
      <Routes>
          {

            isTrue ?


              <Route path='/' element={<ContentNav />} />


              :


              
              <Route path='/' element={<Container />} />
              
              
              
              
              
            }
          <Route path='/LogIn' element={<LogInPage />} />
            {/* <Route path='/' element={<SideBar />} />
              <Route path='/' element={<ContentNav />} /> */}
          {/* <div className="wrapped"></div>  */}
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;