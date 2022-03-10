import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import ContentNav from './Components/ContentNav';
import { AppContext } from './Contexts/AppContext';
// import AddList from './Components/AddList';
/* import ClosedSide from './Components/ClosedSide'; */
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInPage from './Components/LogInPage'; */

function App() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <>
        <NavBar />
        <AppContext.Provider value={{ setIsTrue }} >
          {
            isTrue ?



              <ContentNav />

              :
              <>
              <div className="wrapped">
                
                <SideBar />
                <div className="column">
                  <ContentNav />
                  {/* <AddList /> */}
                </div>

              </div>
              </>
          }

          
        </AppContext.Provider>

    </>
  );
}

export default App;