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
  const [surnameLetter, setSurnameLetter] = useState(null);

  const getUppercase = name => {
    setLetter(name.charAt(0).toUpperCase());
  };

  const getUppercaseSurname = name => {
    setSurnameLetter(name.charAt(0).toUpperCase());
  };
  console.log(window.location.href);
  return (
    <>
      <NavBar />
      <AppContext.Provider value={{ setIsTrue, setChangeClas, changeClass, isTrue, letter, getUppercase, getUppercaseSurname, surnameLetter }} >
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