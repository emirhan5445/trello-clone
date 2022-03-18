import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { AppContext } from './Contexts/AppContext';
import { Routes, Route } from "react-router-dom";
import LogInPage from './Components/LogInPage';
import Container from './Components/Container';
import ContainerOfClosed from './Components/ContainerOfClosed';

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [changeClass, setChangeClas] = useState('80vw'); 
  const [letter, setLetter] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [surnameLetter, setSurnameLetter] = useState(null);

  const getUppercase = name => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <>
      <AppContext.Provider value={{ setIsOpen, isOpen, setIsTrue, setChangeClas, changeClass, isTrue, letter, getUppercase, surnameLetter, setLetter, setSurnameLetter }} >
      <NavBar />
      <Routes>
          {

            isTrue ?


              <Route path='/' element={<ContainerOfClosed />} />


              :


              
              <Route path='/' element={<Container />} />
              
              
              
              
              
            }  
          <Route path='/LogIn' element={<LogInPage />} />
        </Routes>
        {/* <AddList /> */}
      </AppContext.Provider>
    </>
  );
}

export default App;